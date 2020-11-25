import { IAuthor } from "@types";
import { login as onLogin } from "libs/apis";
import { flow, Instance, types } from "mobx-state-tree";
import { Authorize } from "../global/AuthStore/Store";

const Store = types
  .model({
    authorization: types.maybe(Authorize),
  })
  .actions((self) => {
    const login = flow(function* (value: IAuthor) {
      const { data } = yield onLogin(value);
      self.authorization = data;
    });

    return {
      login,
    };
  });

export type TStore = Instance<typeof Store>;

export default Store;
