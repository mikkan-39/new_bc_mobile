import React, { useCallback, useEffect } from "react";
import { ScrollView } from "react-native";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";
import { Editorinconfig } from "../../redux-store/interfaces";
import { UniversalControl } from "./genericControls";

interface Props {
  ticketId: number;
  editor: Editorinconfig;
}

function UpdaterComponent(props: Props) {
  const { ticketId, editor } = props;
  const styleStorage = themeAwareStyles();
  const styles = styleStorage.updater as StyleStorage;

  const generateInputs = useCallback(() => {
    return editor.Controls.map((control) => (
      // controls are connected to redux themselves
      <UniversalControl
        control={control}
        ticketId={ticketId}
        key={control.Key}
      />
    ));
  }, [editor, ticketId]);

  return <ScrollView style={styles.ScrollView}>{generateInputs()}</ScrollView>;
}

export default React.memo(UpdaterComponent);
