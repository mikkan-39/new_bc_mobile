import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findAttributeForControl } from "../components/updater/helpers";
import { editTicketField } from "../redux-store/actions";

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
