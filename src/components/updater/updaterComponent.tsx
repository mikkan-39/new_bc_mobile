import { ScrollView } from "react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";

interface Props {
}

export default function UpdaterComponent(props: Props) {
    const styleStorage = themeAwareStyles();
    const styles = styleStorage.updater as StyleStorage;

    return (
        <ScrollView style={styles.ScrollView}>

        </ScrollView>   
    )
}