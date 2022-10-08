import React, { useCallback } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";
import {
  Editorinconfig,
  ExtendedControl,
  TicketResponse,
} from "../../redux-store/helpers";
import { RootState } from "../../redux-store/store";
import { UniversalControl } from "./genericControls";
import { addLinksToEditorControls } from "./helpers";

interface Props {
  ticket: TicketResponse;
  editor: Editorinconfig;
}

function UpdaterComponent(props: Props) {
  const { ticket, editor } = props;
  const styleStorage = themeAwareStyles();
  const styles = styleStorage.updater as StyleStorage;
  const tablesInStorage = useSelector((state: RootState) => state.tableStorage);

  const generateInputs = useCallback(() => {
    var extendedControls = addLinksToEditorControls(ticket, editor);
    reactotron.log!(extendedControls);
    return extendedControls.map((control) => (
      <UniversalControl control={control} ticket={ticket} />
    ));
  }, [ticket, editor, tablesInStorage]);

  if (!ticket) return null;
  return <ScrollView style={styles.ScrollView}>{generateInputs()}</ScrollView>;
}

export default React.memo(UpdaterComponent);
