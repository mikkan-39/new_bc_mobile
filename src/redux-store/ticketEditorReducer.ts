import { PayloadAction } from "@reduxjs/toolkit";
import { TicketStorage } from "./reducers";
import { TicketAttribute, TicketEditActionPayload } from "./interfaces";
import reactotron from "reactotron-react-native";

export default function (ticketStorage: TicketStorage, action: PayloadAction) {
  const payload = action.payload as unknown as TicketEditActionPayload;
  var { ticketId, attribute, value } = payload;
  const ticket = ticketStorage[ticketId];
  // we might need type conversions
  switch (attribute.Type) {
    case "DECIMAL":
      value = value as number;
  }

  //const ticketInStorage = { ...ticketStorage[ticket.Id] };
  const ticketInStorage = ticketStorage[ticket.Id];
  for (const index of ticketInStorage.Attributes.keys()) {
    const attr = ticketInStorage.Attributes[index];
    if (attr.Name == attribute.Name)
      ticketStorage[ticket.Id].Attributes[index] = { ...attr, Value: value };
  }

  return ticketStorage;
}
