import { Preload } from "components/elements";
import { AuthProvider } from "libs/context/AuthContext";
import { reaction } from "mobx";
import { observer } from "mobx-react-lite";
import { AppProps } from "next/app";
import Router from "next/router";
import { useEffect } from "react";
import { useStore } from "stores/global/AuthStore";
import "../styles/globals.css";

const Wrapper: React.FC = observer(({ children }) => {
  const auth = useStore();
  reaction(
    () => auth.isAuthenticated,
    (isAuthenticated) => {
      console.log({ isAuthenticated });
      if (!isAuthenticated) return Router.replace("/login");
      Router.replace("/");
    }
  );

  return <>{children}</>;
});

function MyApp({ Component, pageProps }: AppProps) {
  const auth = useStore(pageProps.authStore);
  useEffect(() => {
    auth.load();
  }, []);

  return (
    <AuthProvider value={auth}>
      <Preload loading={!auth.isReady}>
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </Preload>
    </AuthProvider>
  );
}

export default observer(MyApp);
