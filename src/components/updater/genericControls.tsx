import { Pressable, Text, TextInput, View } from "react-native";
import reactotron from "reactotron-react-native";
import {
  LOADING_PLACEHOLDER,
  NO_SELECTION_PLACEHOLDER,
} from "../../configs/errorMessages";
import { useStyles } from "../../hooks/themeAwareHook";
import { useAttribute, useLink, useTicket } from "../../hooks/ticketHooks";
import { stripHTML } from "./helpers";
import RNPickerSelect from "react-native-picker-select";
import { useDispatch } from "react-redux";

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
  const ticket = useTicket(ticketId);
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
  const styles = useStyles().updater;
  return (
    <View style={styles.loaderContainer}>
      <Text style={styles.placeholderText}>{LOADING_PLACEHOLDER}</Text>
    </View>
  );
}

function TextField(props: ControlProps) {
  const { control, ticketId } = props;
  const { attribute, editAttribute } = useAttribute(control, ticketId);
  const styles = useStyles().updater;
  stripHTML(attribute.Value);
  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <TextInput
        style={styles.placeholderText}
        value={attribute.Value}
        editable={!control.Readonly}
        onChangeText={editAttribute}
      />
    </View>
  );
}

function TableField(props: ControlProps) {
  const { control, ticketId } = props;
  const { table, option, selectOption } = useLink(control, ticketId);
  const styles = useStyles().updater;
  if (!table) return <LoaderPlaceholder />;
  if (!table.Set?.length) return null;

  type Pick = {
    label: string;
    value: any;
  };

  const pickerItems = table.Set.map((pick) => {
    return { label: pick.Name, value: pick.Key };
  });

  var placeholderObject: Pick | {} = {
    label: NO_SELECTION_PLACEHOLDER,
    value: null,
  };
  if (control.Required) placeholderObject = {};

  // I already hate RNPickerSelect so much.
  // TODO: yeet this code.
  // TODO: really.
  // FIXME: I'm a teapot.
  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <RNPickerSelect
        style={{
          inputIOS: styles.pickerContainer,
          inputAndroid: styles.pickerContainer,
        }}
        onValueChange={selectOption}
        items={pickerItems}
        value={option?.Key}
        placeholder={placeholderObject}
        doneText={"ОК"}
      />
    </View>
  );
  // const callDropdown = () => {}
  // return (
  //   <Pressable style={styles.controlContainer} onPress={callDropdown}>
  //     <Text style={styles.labelText}>{control.Label}</Text>
  //     <Text style={styles.placeholderText}>{label}</Text>
  //   </Pressable>
  // );
}
