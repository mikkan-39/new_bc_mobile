import { Fragment, useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import {
  LOADING_PLACEHOLDER,
  NO_SELECTION_PLACEHOLDER,
} from "../../configs/errorMessages";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { editTicketField } from "../../redux-store/actions";
import {
  stripHTML,
  TicketAttribute,
  TicketResponse,
  UpdaterControl,
} from "../../redux-store/interfaces";
import { RootState } from "../../redux-store/store";
import { findAttributeForControl, findLink } from "./helpers";

interface Props {
  control: UpdaterControl;
  ticketId: number;
}

interface ControlProps {
  control: UpdaterControl;
  ticket: TicketResponse;
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
  switch (control.Type) {
    case "BIGINT":
    case "FILE":
      return <TableField control={control} ticket={ticket} />;
    default:
      return <TextField control={control} ticket={ticket} />;
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
  const { control, ticket } = props;
  const styles = themeAwareStyles().updater;
  const attribute = findAttributeForControl(control, ticket.Attributes)!;
  stripHTML(attribute.Value);
  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <Text style={styles.placeholderText}>{attribute.Value}</Text>
    </View>
  );
}

function TableField(props: ControlProps) {
  const { control, ticket } = props;
  const styles = themeAwareStyles().updater;
  const link = findLink(ticket, control);
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
