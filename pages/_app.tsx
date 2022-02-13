import "../styles/variables.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "common/components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
