import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import reactotron from "reactotron-react-native";
import { NO_SELECTION_PLACEHOLDER } from "../../configs/errorMessages";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import {
  stripHTML,
  TicketAttribute,
  TicketResponse,
  UpdaterControl,
} from "../../redux-store/interfaces";
import { RootState } from "../../redux-store/store";
import { findAttributeForControl } from "./helpers";

interface Props {
  control: UpdaterControl;
  ticket: TicketResponse;
}

export function UniversalControl(props: Props) {
  const { control, ticket } = props;
  const attribute = findAttributeForControl(control, ticket.Attributes);
  if (!attribute) {
    reactotron.warn!({ message: "Could not find attribute", control, ticket });
    return null;
  }

  // Finding readable table values in store by ID
  const tableStorage = useSelector((state: RootState) => state.tableStorage);
  if (attribute.Type == "TABLE") {
    if (!tableStorage[attribute.TableStoreLink!]) return LoaderPlaceholder();
    // Sometimes there is nothing, e.g. id is set to -1.
    attribute.Value = NO_SELECTION_PLACEHOLDER;
    for (const option of tableStorage[attribute.TableStoreLink!].Set) {
      if (option.Key == attribute.TableSelectionId!.toString())
        attribute.Value = option.Name;
    }
  }

  attribute.Value = stripHTML(attribute.Value);
  switch (attribute!.Type) {
    default:
      return Placeholder(control, attribute);
  }
}

function Placeholder(control: UpdaterControl, attribute: TicketAttribute) {
  const styles = themeAwareStyles().updater;
  return (
    <View style={styles.controlContainer}>
      <Text style={styles.labelText}>{control.Label}</Text>
      <Text style={styles.placeholderControl}>{attribute.Value}</Text>
    </View>
  );
}

function LoaderPlaceholder() {
  const styles = themeAwareStyles().updater;
  return <View style={styles.loaderContainer}></View>;
}
