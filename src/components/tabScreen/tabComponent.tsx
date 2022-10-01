import { ScrollView, View } from "react-native";
import { ReactNode } from "react";
import { TableResponse } from "../../redux-store/helpers";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import TableElement from "./tableElement";
import reactotron from "reactotron-react-native";

interface Props {
    tableFromStorage?: TableResponse
}

export default function TabComponent(props: Props) {
    const styles = themeAwareStyles()

    const generateTickets = () => {
        let tabs: ReactNode[] = [];
        props.tableFromStorage!.Set.forEach((value, index) => {
            tabs.push(<TableElement element={value} key={index}/>)
        })
        return tabs
    }

    if(props.tableFromStorage === undefined) return null

    return (
        <View style={styles.defaultScreenBG}>
            <ScrollView style={styles.tabScreen.ScrollView}>
                {generateTickets()}
            </ScrollView>
        </View>
    );
}