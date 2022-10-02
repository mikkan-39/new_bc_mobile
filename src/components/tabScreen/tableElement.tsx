import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native"
import { themeAwareStyles } from "../../configs/themeAwareHook"
import { StyleStorage } from "../../configs/themesConstants";
import { stripHTML, TableTicket } from "../../redux-store/helpers"

interface Props {
    element: TableTicket;
}

type RootStackParamList = {
    "Updater": {}
}

export default function TableElement(props: Props) {
    const styleStorage = themeAwareStyles();
    const styles = styleStorage.tabScreen.tableElement as StyleStorage;
    let ticket = props.element;
    ticket.Name = stripHTML(ticket.Name)

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    const navigateToUpdater = useCallback(
      () => {
        navigation.navigate("Updater", {})
      },
      [props, navigation],
    )

    return (
      <TouchableOpacity style={styles.container} onPress={navigateToUpdater}>
        <View style={styles.upperRow}>
          <Text style={styles.rightText}>{ticket.Right}</Text>
        </View>
        <Text style={styles.text}>{ticket.Name}</Text>
      </TouchableOpacity>
    );
}