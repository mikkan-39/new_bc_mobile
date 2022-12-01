import { PayloadAction } from "@reduxjs/toolkit";
import { TicketStorage } from "./reducers";
import { TicketEditActionPayload } from "./interfaces";
import reactotron from "reactotron-react-native";

export default function (ticketStorage: TicketStorage, action: PayloadAction) {
  const payload = action.payload as unknown as TicketEditActionPayload;
  var { ticket, attribute, value } = payload;

  // we might need type conversions
  switch (attribute.Type) {
    case "DECIMAL":
      value = value as number;
  }

  const ticketInStorage = { ...ticketStorage[ticket.Id] };

  for (const attr of ticketInStorage.Attributes) {
    if (attr.Name == attribute.Name) attr.Value = value;
  }

  ticketStorage[ticket.Id] = { ...ticketInStorage };
  return ticketStorage;
}
