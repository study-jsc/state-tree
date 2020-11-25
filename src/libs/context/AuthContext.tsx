import { createContext, useContext, FC } from "react";
import { TStore } from "stores/global/AuthStore";

interface IProps {
  value: TStore;
}

const AuthContext = createContext<TStore | undefined>(undefined);

export const AuthProvider: FC<IProps> = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): TStore | undefined => {
  return useContext(AuthContext);
};
