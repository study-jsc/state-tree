import { Instance, applySnapshot } from "mobx-state-tree";
import { useMemo } from "react";
import Store from "./Store";

export type TStore = Instance<typeof Store>;

const isServerSide = typeof window === "undefined";
let store: TStore;

export function initStore(snapshot?: TStore) {
  const _store = store ?? Store.create();

  if (snapshot) applySnapshot(_store, snapshot);
  if (isServerSide) return _store;
  if (!store) store = _store;

  return store;
}

export const useStore = (snapshot?: TStore) => {
  return useMemo(() => initStore(snapshot), [snapshot]);
};
