import { all, put, select } from "redux-saga/effects";
import * as Effects from "redux-saga/effects";
import * as actions from "./actions";
import * as api from "../api";
import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import reactotron from "reactotron-react-native";
import { Androidconfig, TableResponse, TicketForRequest, TicketLink, TicketResponse } from "./helpers";
import { ensureLinkInStorage, getLinksFromStorage, LinkStorage } from "./storage";
import { RootState } from "./store";
import { getTable, getTicket } from "./sagaFunctions";
const call: any = Effects.call; // for TS

export function* experementalPreventiveTablesFetch(action: PayloadAction) {
    try {
        const configFromStore: Androidconfig =
            yield select((state: RootState) => state.interfaceConfig)
        
        const linksFromStorage: LinkStorage = yield call(getLinksFromStorage)
        // those are definitely necessary since they either have been
        // requested by an updater at some point or have been found in an updater config
        let definitelyNecessaryLinks: TicketLink[] = [];
        for (const link in linksFromStorage) {
            const newLink = {
                ParentTable: linksFromStorage[link],
                Id: 0, Name: '', Value: ''
            }
            definitelyNecessaryLinks.push(newLink)
        }
        for (const link of definitelyNecessaryLinks) {
            const response: AxiosResponse =
                yield call(api.getTicketTable, link);
            yield put(actions.fetchTableSuccess(response.data));
        };
        definitelyNecessaryLinks = [];


        let controlsKeysInConfig: string[] = [];
        // get keys for all controls in config
        configFromStore.Tabs.forEach((tab) => {
            tab.Editor.Controls.forEach((control) => {
                controlsKeysInConfig.push(control.Key)
            })
            // so far we can only have 1 nested table.
            // definetely can bite me someday.
            if (tab.Editor.Children.length) {
                tab.Editor.Children[0].Editor.Controls.forEach((control) => {
                    controlsKeysInConfig.push(control.Key)
                })
            }
        })

        // now let's get some new links from each ticket type
        let tabs: TableResponse[] = [];
        for (const tab of configFromStore.Tabs) {
            const tabresponse: AxiosResponse = yield call(api.getSqlTable, tab);
            tabs.push(tabresponse.data);
        }

        for (const table in tabs) {
            const ticket = tabs[table].Set![0] as TicketForRequest
            ticket.ParentTable = tabs[table]
            const ticketResponse: AxiosResponse = yield call(api.getTicket, ticket);
            const ticketData = ticketResponse.data as unknown as TicketResponse;
            for (const link of ticketData.Links) {
                // make sure the link will be used
                if (controlsKeysInConfig.includes(link.Name)) {
                    const newLink = {
                        ParentTable: link.ParentTable,
                        Id: 0, Name: link.Name, Value: ''
                    }
                    definitelyNecessaryLinks.push(newLink)
                }
            }
        }

        // fetch necessary links
        // store links, of course
        const tablesInState: string[] = yield select((state: RootState) => Object.keys(state.tableStorage))
        for (const link of definitelyNecessaryLinks) {
            if (!tablesInState.includes(link.ParentTable)) {
                const response: AxiosResponse =
                    yield call(api.getTicketTable, link);
                yield put(actions.fetchTableSuccess(response.data));
                ensureLinkInStorage(link);
            }
        };

    } catch (error: any) {
        yield put(actions.fetchTableFailed(error));
    }
}