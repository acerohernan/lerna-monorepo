import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { dark, ResetCSS } from "@pancakeswap/uikit";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <ResetCSS />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
