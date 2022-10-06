import { Text, TextInput, View } from "react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";
import { ExtendedControl, TicketResponse } from "../../redux-store/helpers";

interface Props {
    control: ExtendedControl,
    ticket: TicketResponse
}

export function TextControl(props: Props) {
    const { control, ticket } = props;
    const thisAttribute = ticket.Attributes.find((value) => {
        return value.Name == control.Key
    })
    const styleStorage = themeAwareStyles();
    const styles = styleStorage.updater as StyleStorage;

    return (
        <View style={styles.controlContainer}>
            <Text style={styles.labelText}>{control.Label}</Text>
            <TextInput style={styles.textInput} editable={false} value={thisAttribute!.Value} />
        </View>
    )
}


export function PlaceholderControl(props: Props) {
    const { control, ticket } = props;
    const thisAttribute = ticket.Attributes.find((value) => {
        return value.Name == control.Key
    })
    const styleStorage = themeAwareStyles();
    const styles = styleStorage.updater as StyleStorage;

    return (
        <View style={styles.controlContainer}>
            <Text style={styles.labelText}>{control.Label}</Text>
            <Text style={styles.placeholderControl}>{thisAttribute?.Value}</Text>
        </View>
        
    )
}
