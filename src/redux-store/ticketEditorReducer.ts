import { PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./reducers";
import { TicketEditActionPayload } from "./interfaces";

export default function (state: typeof initialState, action: PayloadAction) {
  const payload = action.payload as unknown as TicketEditActionPayload;

  return state;
}
