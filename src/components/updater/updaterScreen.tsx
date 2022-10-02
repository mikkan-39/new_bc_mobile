import { useEffect } from "react";
import { useSelector } from "react-redux";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { RootState } from "../../redux-store/store";
import UpdaterComponent from "./updaterComponent";

interface Props {
    navigation: any;
}

export default function UpdaterScreen(props: Props) {
    const styles = themeAwareStyles();
    const config = useSelector((state: RootState) => state.interfaceConfig);

    useEffect(() => {
        props.navigation.setOptions(styles.screenWithHeader);
        props.navigation.setOptions(styles.tabBar);
    }, [styles]);

    return (
        <UpdaterComponent/>
    )
}