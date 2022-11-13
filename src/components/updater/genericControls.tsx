import reactotron from "reactotron-react-native";
import { themeAwareStyles } from "../../configs/themeAwareHook";
import { TicketResponse, UpdaterControl } from "../../redux-store/helpers";

interface Props {
  control: UpdaterControl;
  ticket: TicketResponse;
}

export function UniversalControl(props: Props) {
  const { control, ticket } = props;
  return null;
}
