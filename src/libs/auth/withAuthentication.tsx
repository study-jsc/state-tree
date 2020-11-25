import Router from "next/router";
import { useAuth } from "../context/AuthContext";

export const withAuthentication = (Component: any) => {
  return (props: any) => {
    const auth = useAuth();
    if (auth?.isAuthenticated) Router.replace("/login");

    return <Component {...props} />;
  };
};
