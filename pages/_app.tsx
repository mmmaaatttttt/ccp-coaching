import "styles/variables.css";
import "styles/globals.css";
import type { AppProps } from "next/app";
import Header from "common/components/header";
import Footer from "common/components/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="main">
        <Header />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
