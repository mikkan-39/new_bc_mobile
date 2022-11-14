import AsyncStorage from "@react-native-async-storage/async-storage";
import reactotron from "reactotron-react-native";
import { TicketLink } from "./interfaces";

export interface LinkStorage {
  [name: string]: string;
}

export const getLinksFromStorage = async () => {
  try {
    let res = await AsyncStorage.getItem("@bcm.linkStorage");
    return (res != null ? JSON.parse(res) : {}) as LinkStorage;
  } catch (e) {
    reactotron.error!(e, null);
    return {} as LinkStorage;
  }
};

export const addLinkToStorage = async (link: TicketLink) => {
  try {
    let currentStorage = await getLinksFromStorage();
    let nextStorage: any = currentStorage == null ? {} : currentStorage;
    nextStorage[link.Name] = link.ParentTable;
    await AsyncStorage.setItem("@bcm.linkStorage", JSON.stringify(nextStorage));
  } catch (e) {
    // saving error
  }
};

export const ensureLinkInStorage = async (link: TicketLink) => {
  try {
    const storage = await getLinksFromStorage();
    if (storage[link.Name] == undefined) {
      addLinkToStorage(link);
    } else if (storage[link.Name] != link.ParentTable) {
      addLinkToStorage(link);
    }
  } catch (e) {
    // error reading value
  }
};

export const clearStorage = async () => {
  reactotron.log!("CLEARING STORAGE");
  return AsyncStorage.clear();
};
