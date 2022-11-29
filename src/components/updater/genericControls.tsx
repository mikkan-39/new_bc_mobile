import { Fragment, useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { NO_SELECTION_PLACEHOLDER } from "../../configs/errorMessages";
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

// This should deal with how to represent any attribute to the user
export function UniversalControl(props: Props) {
  const { control, ticketId } = props;
  const ticket = useSelector(
    (state: RootState) => state.ticketStorage[ticketId]
  );
  // this will be undefined for tables
  const attribute = findAttributeForControl(control, ticket.Attributes)!;

  // This is some lame prop drilling
  switch (control.Type) {
    case "TEXT":
      return TextField(control, attribute, ticket);
    case "BIGINT":
    case "FILE":
      return TableField(control, ticket);
    default:
      return Placeholder(control, attribute, ticket);
  }
}

// Use this for attribute types that are WIP
function Placeholder(
  control: UpdaterControl,
  attribute: TicketAttribute,
  ticket: TicketResponse
) {
  const styles = themeAwareStyles().updater;
  stripHTML(attribute.Value);
  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <Text style={styles.placeholderText}>{attribute.Value}</Text>
    </View>
  );
}

// For tables which have not been loaded yet
function LoaderPlaceholder() {
  const styles = themeAwareStyles().updater;
  return <View style={styles.loaderContainer}></View>;
}

function TextField(
  control: UpdaterControl,
  attribute: TicketAttribute,
  ticket: TicketResponse
) {
  stripHTML(attribute.Value);
  const styles = themeAwareStyles().updater;
  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <Text style={styles.placeholderText}>{attribute.Value}</Text>
    </View>
  );
}

function TableField(control: UpdaterControl, ticket: TicketResponse) {
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
