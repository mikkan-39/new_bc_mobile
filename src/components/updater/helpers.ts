import { Link } from "@react-navigation/native";
import { useSelector } from "react-redux";
import {
  Editorinconfig,
  TicketAttribute,
  TicketResponse,
  UpdaterControl,
} from "../../redux-store/helpers";
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

// Adds table links as ticket attributes for easier control rendering
export function addTablesToAttributes(ticket: TicketResponse) {
  for (const Link of ticket.Links) {
    ticket.Attributes.push({
      Name: Link.Name,
      TableSelectionId: Link.Id,
      Value: Link.Value,
      Type: "TABLE",
    } as TicketAttribute);
  }
  return ticket;
}

export function findAttributeForControl(
  control: UpdaterControl,
  attributes: TicketAttribute[]
) {
  for (const attribute of attributes) {
    if (attribute.Name == control.Key) return attribute;
  }
  return undefined;
}
