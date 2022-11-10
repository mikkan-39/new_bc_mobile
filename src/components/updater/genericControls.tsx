import { Text, TextInput, View } from "react-native";
import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { StyleStorage } from "../../configs/themesConstants";
import { ExtendedControl, TicketAttribute } from "../../redux-store/helpers";

interface Props {
  control: ExtendedControl;
  attribute: TicketAttribute;
}

export function UniversalControl(props: Props) {
  const { control, attribute } = props;
  if (!attribute) return null;
  reactotron.log!(attribute.Value);
  const controlProps = { control, attribute: attribute };
  switch (attribute.Type) {
    case "TEXT":
      return <TextControl {...controlProps} />;
    default:
      return null;
  }
}

interface ControlProps {
  control: ExtendedControl;
  attribute: TicketAttribute;
}

export function TextControl(props: ControlProps) {
  const { control, attribute } = props;

  const styleStorage = themeAwareStyles();
  const styles = styleStorage.updater as StyleStorage;

  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={() => {}}
        value={attribute.Value}
      />
    </View>
  );
}
