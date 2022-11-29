import {
  Editorinconfig,
  TicketAttribute,
  TicketResponse,
  UpdaterControl,
} from "../../redux-store/interfaces";

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

export function findLink(ticket: TicketResponse, control: UpdaterControl) {
  for (const link of ticket.Links) {
    if (link.Name == control.Key) return link;
  }
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
