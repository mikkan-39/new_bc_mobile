import { themeAwareStyles } from "../configs/themeAwareHook";
import { ScrollView, View } from "react-native";

export default function TabComponent() {
    const styles = themeAwareStyles()

    const generateTickets = () => {

    }

    return (
        <View style={styles.defaultScreenBG}>
            <ScrollView style={styles.tabScreen.ScrollView}>

            </ScrollView>
        </View>
    );
}