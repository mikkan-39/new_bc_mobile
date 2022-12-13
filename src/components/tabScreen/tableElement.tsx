import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";
import { RootState } from "../../redux-store/store";

interface Props {
  element: TicketForRequest; // MUST have ParentTable
}

type RootStackParamList = {
  Updater: {};
};

export default function TableElement(props: Props) {
  const styleStorage = themeAwareStyles();
  const styles = styleStorage.tabScreen.tableElement as StyleStorage;
  let ticket = props.element;
  const ticketIsLoaded = Boolean(
    useSelector((state: RootState) => state.ticketStorage[ticket.Key])
  );
  ticket.Name = stripHTML(ticket.Name);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigateToUpdater = useCallback(() => {
    navigation.navigate("Updater", { ticket });
  }, [props, navigation]);

  return (
    //TODO: show selected style only if ticket was edited
    <TouchableOpacity
      style={ticketIsLoaded ? styles.containerSelected : styles.container}
      onPress={navigateToUpdater}
    >
      <View style={styles.upperRow}>
        <Text style={styles.rightText}>{ticket.Right}</Text>
      </View>
      <Text style={styles.text}>{ticket.Name}</Text>
    </TouchableOpacity>
  );
}
