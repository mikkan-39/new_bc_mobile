import { Fragment, useCallback, useEffect } from "react";
import { Text, TextInput, View } from "react-native";
import { Fumi } from "react-native-textinput-effects";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import {
  LOADING_PLACEHOLDER,
  NO_SELECTION_PLACEHOLDER,
} from "../../configs/errorMessages";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { editTicketField } from "../../redux-store/actions";
import { RootState } from "../../redux-store/store";
import { findAttributeForControl, findLink } from "./helpers";

interface Props {
  control: UpdaterControl;
  ticketId: number;
}

interface ControlProps {
  control: UpdaterControl;
  ticketId: number;
}

// This should deal with how to represent any attribute to the user
export function UniversalControl(props: Props) {
  const { control, ticketId } = props;
  const ticket = useSelector(
    (state: RootState) => state.ticketStorage[ticketId]
  );

  if (!ticket) return <LoaderPlaceholder />;

  // This is some lame prop drilling
  // For some reason if we don't use
  // component syntax and call them as functions,
  // problems with hooks arise.

  reactotron.log!("Rendering control #" + control.Key);
  switch (control.Type) {
    case "BIGINT":
    case "FILE":
      return <TableField control={control} ticketId={ticket.Id} />;
    default:
      return <TextField control={control} ticketId={ticket.Id} />;
  }
}

// For tables which have not been loaded yet
function LoaderPlaceholder() {
  const styles = themeAwareStyles().updater;
  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.placeholderText}>{LOADING_PLACEHOLDER}</Text>
    </View>
  );
}

function TextField(props: ControlProps) {
  const { control, ticketId } = props;
  const styles = themeAwareStyles().updater;
  const attribute = useSelector(
    (state: RootState) =>
      findAttributeForControl(
        control,
        state.ticketStorage[ticketId].Attributes
      )!
  );
  const dispatch = useDispatch();
  const editField = useCallback(
    (value: any) => {
      dispatch(editTicketField(ticketId, attribute, value));
    },
    [dispatch]
  );
  stripHTML(attribute.Value);
  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <TextInput
        style={styles.placeholderText}
        value={attribute.Value}
        editable={!control.Readonly}
        onChangeText={editField}
      />
    </View>
  );
}

function TableField(props: ControlProps) {
  const { control, ticketId } = props;
  const styles = themeAwareStyles().updater;
  const link = useSelector((state: RootState) =>
    findLink(state.ticketStorage[ticketId], control)
  );
  const table = useSelector(
    (state: RootState) => state.tableStorage[link!.ParentTable]
  );
  if (!table) return LoaderPlaceholder();

  var label = NO_SELECTION_PLACEHOLDER;
  for (const option of table.Set) {
    if (option.Key == link!.Id.toString()) label = option.Name;
  }

  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <Text style={styles.placeholderText}>{label}</Text>
    </View>
  );
}
