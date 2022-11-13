import { useSelector } from "react-redux";
import { Editorinconfig, TicketResponse } from "../../redux-store/helpers";
import { RootState } from "../../redux-store/store";

// Checks which tables are needed for rendering editor and have not yet been fetched
export const generateNecessaryLinks = (
  ticket: TicketResponse,
  editor: Editorinconfig,
  tablesInStorageOnStart: any
) => {
  const necessaryLinks = ticket.Links.filter((link) => {
    const x = editor.Controls.filter((control) => control.Key == link.Name);
    return x.length == 1 && !(link.ParentTable in tablesInStorageOnStart);
  });
  return necessaryLinks;
};
