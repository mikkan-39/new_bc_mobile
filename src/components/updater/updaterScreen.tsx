import { useCallback, useEffect, useMemo } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import {
  fetchTicketRequest,
  fetchTicketTablesRequest,
} from "../../redux-store/actions";
import { TicketForRequest } from "../../redux-store/interfaces";
import { RootState } from "../../redux-store/store";
import { generateNecessaryLinks } from "./helpers";
import UpdaterComponent from "./updaterComponent";

interface Props {
  navigation: any;
  route: any;
}

export default function UpdaterScreen(props: Props) {
  const styles = themeAwareStyles();
  const config = useSelector((state: RootState) => state.interfaceConfig);
  const dispatch = useDispatch();
  const ticketFromProps = props.route.params.ticket as TicketForRequest;
  const ticketFromResponse = useSelector(
    (state: RootState) => state.ticketStorage[ticketFromProps.Key]
  );
  const editor = config.Tabs.find(
    (item) => item.Table == ticketFromProps.ParentTable.Table
  )!.Editor;

  // initial ticket request
  useEffect(() => {
    dispatch(fetchTicketRequest(ticketFromProps));
  }, []);

  // navigation setting for navBar styling
  useEffect(() => {
    props.navigation.setOptions({
      ...styles.screenWithHeader,
      ...styles.tabBar,
    });
  }, [styles]);

  // fetching necessary tables for updater
  const tablesInStorage = useSelector((state: RootState) => state.tableStorage);
  useEffect(() => {
    if (ticketFromResponse) {
      const necessaryLinks = generateNecessaryLinks(
        ticketFromResponse,
        editor,
        tablesInStorage
      );
      if (necessaryLinks.length)
        dispatch(fetchTicketTablesRequest(necessaryLinks));
    }
  }, [ticketFromResponse]); // tablesInStorage intentionally not in here.

  return (
    <View style={styles.defaultScreenBG}>
      <UpdaterComponent
        ticketId={ticketFromProps.Key as unknown as number}
        editor={editor}
      />
    </View>
  );
}
