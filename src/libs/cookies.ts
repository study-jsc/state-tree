import nookies from "nookies";
import { CookieSerializeOptions } from "cookie";

type TKey = "token";

interface IArgs {
  key: TKey;
  value: any;
  ctx?: any;
  options?: CookieSerializeOptions;
}

export const setCookie = ({ key, value, ctx = null, options = {} }: IArgs) => {
  nookies.set(ctx, key, JSON.stringify(value), options);
};

export const getCookie = <T>(key: TKey, ctx: any = null): T => {
  const cookie = nookies.get(ctx)[key];
  return cookie && JSON.parse(cookie);
};

export const removeCookie = (key: TKey, ctx: any = null) => {
  nookies.destroy(ctx, key);
};
