import { StyleStorage, Theme } from "./themesConstants";

export const updaterStyles = (theme: Theme): StyleStorage => {
    return {
        ScrollView: {
            flex: 1,
            padding: 10,
            paddingBottom: 0,
        },
        inputContainer: {
            borderRadius: theme.rounding,
            marginBottom: 10,
            padding: 10,
            backgroundColor: theme.surfaceColor,
            minHeight: 20,
        }
    };
};
