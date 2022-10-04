import { useEffect, useLayoutEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { clearTicketStorage, fetchTicketRequest, fetchTicketTablesRequest } from "../../redux-store/actions";
import { TicketForRequest } from "../../redux-store/helpers";
import { RootState } from "../../redux-store/store";
import UpdaterComponent from "./updaterComponent";

interface Props {
    navigation: any;
    route: any;
}

export default function UpdaterScreen(props: Props) {
    const styles = themeAwareStyles();
    const config = useSelector((state: RootState) => state.interfaceConfig);
    const dispatch = useDispatch();
    const ticket = props.route.params.ticket as TicketForRequest; // MUST have ParentTable
    // reactotron.log!(ticket)
    const ticketFromResponse = useSelector((state: RootState) => state.ticketStorage[ticket.Key])

    const editor =  config.Tabs.find(item => item.Table == ticket.ParentTable.Table)!.Editor

    // initial ticket request
    useEffect(() => {
        dispatch(fetchTicketRequest(ticket))
    }, [ticket]);

    // navigation setting for navBar styling
    useEffect(() => {
        props.navigation.setOptions(styles.screenWithHeader);
        props.navigation.setOptions(styles.tabBar);
    }, [styles])

    // fetching necessary tables for updater
    // not on first render
    const tablesInStorage = useSelector((state: RootState) => state.tableStorage);
    const firstUpdate = useRef(true);
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        if (ticketFromResponse !== undefined) {
            const necessaryLinks = ticketFromResponse.Links.filter((link) => {
                const x = editor.Controls.filter((control) => control.Key == link.Name)
                return (x.length == 1) && !(link.ParentTable in tablesInStorage)
            })
            if(necessaryLinks.length)
                dispatch(fetchTicketTablesRequest(necessaryLinks));
        }
    }, [ticketFromResponse]); // tablesInStorage intentionally not in here.
    
    return (
        <UpdaterComponent/>
    )
}