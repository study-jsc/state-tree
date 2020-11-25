import { IAuthor } from "@types";
import { AxiosPromise } from "axios";
import { TAuthorize } from "stores/global/AuthStore";
import axios from "./axios";

export const login = (auth: IAuthor): AxiosPromise<TAuthorize> =>
  axios.post("/api/auth/login", auth);
