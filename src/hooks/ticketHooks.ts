import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  findAttributeForControl,
  findLink,
} from "../components/updater/helpers";
import { editTicketField, editTicketTable } from "../redux-store/actions";

export function useTicket(ticketId: number) {
  return useSelector((state: RootState) => state.ticketStorage[ticketId]);
}

export function useAttribute(control: UpdaterControl, ticketId: number) {
  const attribute = useSelector(
    (state: RootState) =>
      findAttributeForControl(
        control,
        state.ticketStorage[ticketId].Attributes
      )!
  );
  const dispatch = useDispatch();
  const editAttribute = useCallback(
    (value: any) => {
      dispatch(editTicketField(ticketId, attribute, value));
    },
    [dispatch]
  );

  return { attribute, editAttribute };
}

export function useLink(control: UpdaterControl, ticketId: number) {
  const link = useSelector((state: RootState) =>
    findLink(state.ticketStorage[ticketId], control)
  );
  const table = useSelector(
    (state: RootState) => state.tableStorage[link!.ParentTable]
  );
  const dispatch = useDispatch();
  const selectOption = (pickId: any) => {
    dispatch(editTicketTable(ticketId, table, pickId));
  };

  if (!table) return { table, option: undefined, selectOption };
  var option;
  for (const opt of table.Set) {
    if (opt.Key == link!.Id.toString()) option = opt;
  }
  return { table, option, selectOption };
}
