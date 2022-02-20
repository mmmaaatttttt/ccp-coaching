import "../styles/variables.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "common/components/header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="main">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
