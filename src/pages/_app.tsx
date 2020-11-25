import { ThemeProvider } from "@material-ui/core";
import { Preload } from "components/elements";
import { AuthProvider } from "libs/context/AuthContext";
import theme from "libs/theme";
import { observer } from "mobx-react-lite";
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useStore } from "stores/global/AuthStore";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const auth = useStore(pageProps.authStore);
  useEffect(() => {
    auth.load();
  }, []);

  return (
    <AuthProvider value={auth}>
      <ThemeProvider theme={theme}>
        <Preload loading={!auth.isReady}>
          <Component {...pageProps} />
        </Preload>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default observer(MyApp);
