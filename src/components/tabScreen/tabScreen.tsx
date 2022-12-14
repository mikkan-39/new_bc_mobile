import { View } from "react-native";
import { useEffect } from "react";
import { useStyles } from "../../hooks/themeAwareHook";
import TabComponent from "./tabComponent";
import { useDispatch } from "react-redux";
import { fetchTableRequest } from "../../redux-store/actions";
import reactotron from "reactotron-react-native";
import { useSelector } from "react-redux";

interface Props {
  navigation?: any;
  route?: {
    params: {
      parentTable: Tableinconfig;
    };
  };
}

export default function TabScreen(props: Props) {
  const parentTable = props.route!.params.parentTable;
  const styles = useStyles();
  const dispatch = useDispatch();
  const tableFromStorage = useSelector(
    (state: RootState) => state.tableStorage[parentTable.Table]
  );

  // navigation setting for navBar styling
  useEffect(() => {
    props.navigation.setOptions({
      ...styles.screenWithHeader,
      ...styles.tabBar,
    });
  }, [styles]);

  // initial table request
  useEffect(() => {
    dispatch(fetchTableRequest(parentTable));
  }, []);

  return (
    <View style={styles.defaultScreenBG}>
      <TabComponent
        tableFromStorage={tableFromStorage}
        parentTable={parentTable}
      />
    </View>
  );
}
