import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Footer from "@/components/commons/Footer/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
