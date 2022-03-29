import { ThemeProvider } from "styled-components";
import { AnimatePresence } from "framer-motion";
import { theme } from "../src/styles/theme";
import { GlobalStyle } from "../src/styles/global";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}
