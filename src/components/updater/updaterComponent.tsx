import { useCallback } from "react";
import { ScrollView, Text, View } from "react-native";
import { shallowEqual, useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";
import { Editorinconfig, ExtendedControl, TicketResponse } from "../../redux-store/helpers";
import { RootState } from "../../redux-store/store";
import { PlaceholderControl, TextControl } from "./genericControls";

interface Props {
    ticket: TicketResponse;
    editor: Editorinconfig;
}

export default function UpdaterComponent(props: Props) {
    const { ticket, editor } = props;
    const styleStorage = themeAwareStyles();
    const styles = styleStorage.updater as StyleStorage;
    const tablesInStorage = useSelector((state: RootState) => state.tableStorage);


    const generateInputs = useCallback(() => {
        const linkmap: { [key: string]: string } = {};
        ticket.Links.forEach((value) => {
            linkmap[value.Name] = value.ParentTable;
        })

        var extendedControls: ExtendedControl[] = [];
        for (const control of editor.Controls) {
            const tableKey = linkmap[control.Key]
            const table = tableKey ? tablesInStorage[tableKey] : undefined
            extendedControls.push({
                Table: table,
                ...control
            });
        }

        return extendedControls.map((control) => {
            if (control.Type != 'BIGINT' || control.Table) {
                switch (control.Type) {
                    case 'TEXT':
                        return <TextControl control={control} ticket={ticket} key={control.Key} />
                    default:
                        return <PlaceholderControl control={control} ticket={ticket} key={control.Key} />
                }
            } else {
                return null
            }
        })
    }, [ticket, editor, tablesInStorage])

    if (!ticket) return null
    return (
            <ScrollView style={styles.ScrollView}>
                {generateInputs()}
            </ScrollView>
    )
}