import { IAuthor } from "@types";
import { Instance, types } from "mobx-state-tree";

const Store = types.model({}).actions((self) => ({
  login(value: IAuthor) {
    console.log({ value });
  },
}));

export type TStore = Instance<typeof Store>;

export default Store;
