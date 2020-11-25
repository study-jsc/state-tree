import { types } from "mobx-state-tree";

export const Authorize = types.model({
  token_type: "",
  access_token: "",
  expires_in: 0,
});

export const Auth = types.model({
  isReady: false,
  isAuthenticated: false,
  authorization: types.optional(Authorize, {}),
});
