import { View } from "react-native";
import { useEffect } from "react";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import TabComponent from "./tabComponent";
import { Tableinconfig } from "../../redux-store/helpers";
import { useDispatch } from "react-redux";
import { fetchTableRequest } from "../../redux-store/actions";
import reactotron from "reactotron-react-native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux-store/store";

interface Props {
  navigation?: any;
  route?: {
    params: {
      parentTable: Tableinconfig
    }
  }
}

export default function TabScreen(props: Props) {
  const parentTable = props.route!.params.parentTable
  const styles = themeAwareStyles();
  const dispatch = useDispatch();
  const tableFromStorage = useSelector((state: RootState) => state.tableStorage[parentTable.Table])

  useEffect(() => {
    props.navigation.setOptions(styles.screenWithHeader);
    props.navigation.setOptions(styles.tabBar);
    dispatch(fetchTableRequest(parentTable))
  }, [styles]);

  return (
    <View style={styles.defaultScreenBG}>
      <TabComponent tableFromStorage={tableFromStorage} parentTable={parentTable} />
    </View>
  );
}