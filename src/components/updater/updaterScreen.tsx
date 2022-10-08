import { useEffect, useLayoutEffect, useRef } from "react";
import { View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import {
  fetchTicketRequest,
  fetchTicketTablesRequest,
} from "../../redux-store/actions";
import { TicketForRequest } from "../../redux-store/helpers";
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
    (state: RootState) => state.ticketStorage
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
    props.navigation.setOptions(styles.screenWithHeader);
    props.navigation.setOptions(styles.tabBar);
  }, [styles]);

  // fetching necessary tables for updater
  const tablesInStorage = useSelector((state: RootState) => state.tableStorage);
  useLayoutEffect(() => {
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

  if (ticketFromResponse == null) return null;
  return (
    <View style={styles.defaultScreenBG}>
      <UpdaterComponent ticket={ticketFromResponse} editor={editor} />
    </View>
  );
}
