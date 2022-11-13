import React, { useCallback, useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";
import { Editorinconfig, TicketResponse } from "../../redux-store/helpers";
import { addLinkToStorage } from "../../redux-store/storage";
import { RootState } from "../../redux-store/store";
import { UniversalControl } from "./genericControls";

interface Props {
  ticket: TicketResponse;
  editor: Editorinconfig;
}

function UpdaterComponent(props: Props) {
  const { ticket, editor } = props;
  const styleStorage = themeAwareStyles();
  const styles = styleStorage.updater as StyleStorage;

  const generateInputs = useCallback(() => {
    return editor.Controls.map((control) => (
      // controls are connected to redux themselves
      <UniversalControl control={control} ticket={ticket} key={control.Key} />
    ));
  }, [editor, ticket]);

  if (!ticket) return null; // this should not ever happen though

  return <ScrollView style={styles.ScrollView}>{generateInputs()}</ScrollView>;
}

export default React.memo(UpdaterComponent);
