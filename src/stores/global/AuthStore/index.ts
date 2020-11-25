import { getCookie, setCookie } from "libs/cookies";
import { applySnapshot, Instance } from "mobx-state-tree";
import { useMemo } from "react";
import { Auth, Authorize } from "./Store";

export const AuthStore = Auth.actions((self) => {
  const authorize = (authorization: TAuthorize) => {
    applySnapshot(self.authorization, authorization);
    self.isAuthenticated = !!authorization;
    setCookie({
      key: "token",
      value: authorization,
      options: {
        path: "/",
        maxAge: authorization.expires_in,
      },
    });
  };

  const deAuthorize = () => {
    applySnapshot(self.authorization, {});
    self.isAuthenticated = false;
  };

  const load = (ctx?: any) => {
    const token = getCookie("token", ctx);
    if (token) {
      authorize(token as TAuthorize);
    }
    self.isReady = true;
  };

  return {
    load,
    authorize,
    deAuthorize,
  };
});

export type TAuthorize = Instance<typeof Authorize>;
export type TStore = Instance<typeof AuthStore>;

const isServerSide = typeof window === "undefined";
let store: TStore;

export function initStore(snapshot?: TStore) {
  const _store = store ?? AuthStore.create();

  if (snapshot) applySnapshot(_store, snapshot);
  if (isServerSide) return _store;
  if (!store) store = _store;

  return store;
}

export const useStore = (snapshot?: TStore) => {
  return useMemo(() => initStore(snapshot), [snapshot]);
};
