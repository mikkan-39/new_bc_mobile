import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { fetchTicketRequest } from "../../redux-store/actions";
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
    reactotron.log!(ticket)

    useEffect(() => {
        props.navigation.setOptions(styles.screenWithHeader);
        props.navigation.setOptions(styles.tabBar);
        dispatch(fetchTicketRequest(ticket))
    }, [styles, dispatch, ticket]);

    return (
        <UpdaterComponent/>
    )
}