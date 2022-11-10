import { useSelector } from "react-redux";
import {
  Editorinconfig,
  TicketResponse,
  ExtendedControl,
} from "../../redux-store/helpers";
import { RootState } from "../../redux-store/store";

export const addLinksToEditorControls = (
  ticket: TicketResponse,
  editor: Editorinconfig
) => {
  const linkmap: { [key: string]: string } = {};
  ticket.Links.forEach((value) => {
    linkmap[value.Name] = value.ParentTable;
  });

  var extendedControls: ExtendedControl[] = [];
  for (const control of editor.Controls) {
    const tableKey = linkmap[control.Key];
    extendedControls.push({
      ...control,
      TableLink: tableKey,
    });
  }
  return extendedControls;
};

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
