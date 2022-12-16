import { PayloadAction } from "@reduxjs/toolkit";
import reactotron from "reactotron-react-native";
import { useTicket } from "../hooks/ticketHooks";

export function ticketFieldReducer(
  ticketStorage: TicketStorage,
  action: PayloadAction
) {
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

export function ticketTableReducer(state: RootState, action: PayloadAction) {
  const payload = action.payload as unknown as TicketSetTableActionPayload;
  var { ticketId, link, optionKey } = payload;
  const ticket = state.ticketStorage[ticketId];

  for (const index of ticket.Links.keys()) {
    const lynk = ticket.Links[index];
    if (lynk.Name == link.Name) lynk.Id = optionKey;
  }

  return state.ticketStorage;
}
