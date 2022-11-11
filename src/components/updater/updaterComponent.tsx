import React, { useCallback, useEffect } from "react";
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

  const generateInputs = useCallback(() => {
    var extendedControls = addLinksToEditorControls(ticket, editor);
    return extendedControls.map((control) => (
      // controls are connected to redux themselves
      <UniversalControl
        control={control}
        attribute={
          ticket.Attributes.find((value) => {
            return value.Name == control.Key;
          })!
        }
        key={control.Key}
      />
    ));
  }, [editor, ticket]);

  if (!ticket) return null; // this should not ever happen though

  return <ScrollView style={styles.ScrollView}>{generateInputs()}</ScrollView>;
}

export default React.memo(UpdaterComponent);
