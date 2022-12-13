import { ScrollView, View } from "react-native";
import { ReactNode } from "react";
import { useStyles } from "../../hooks/themeAwareHook";
import TableElement from "./tableElement";
import reactotron from "reactotron-react-native";

interface Props {
  tableFromStorage: TableResponse;
  parentTable: Tableinconfig;
}

export default function TabComponent(props: Props) {
  const styles = useStyles();

  const generateTickets = () => {
    let tabs: ReactNode[] = [];
    props.tableFromStorage!.Set.forEach((value, index) => {
      let ticket = value as TicketForRequest;
      ticket.ParentTable = props.parentTable;
      tabs.push(<TableElement element={ticket} key={index} />);
    });
    return tabs;
  };

  if (props.tableFromStorage === undefined) return null;

  return (
    <View style={styles.defaultScreenBG}>
      <ScrollView style={styles.tabScreen.ScrollView}>
        {generateTickets()}
      </ScrollView>
    </View>
  );
}
