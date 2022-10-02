import { Text, View } from "react-native"
import { themeAwareStyles } from "../../configs/themeAwareHook"
import { StyleStorage } from "../../configs/themesConstants";
import { stripHTML, TableTicket } from "../../redux-store/helpers"


interface Props {
    element: TableTicket
}

export default function TableElement(props: Props) {
    const styleStorage = themeAwareStyles();
    const styles = styleStorage.tabScreen.tableElement as StyleStorage;
    let ticket = props.element;
    ticket.Name = stripHTML(ticket.Name)
    return (
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <Text style={styles.rightText}>{ticket.Right}</Text>
        </View>
        <Text style={styles.text}>{ticket.Name}</Text>
      </View>
    );
}