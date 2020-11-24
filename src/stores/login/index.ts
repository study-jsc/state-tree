import { Instance } from "mobx-state-tree";

import Store from "./Store";

export type TStore = Instance<typeof Store>;

let store: TStore;

export function initStore(initState?: TStore) {}
