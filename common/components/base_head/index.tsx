import Head from "next/head";

type BaseHeadProps = {
  prefix: String;
};

const BaseHead = ({ prefix }: BaseHeadProps) => (
  <Head>
    <title>{prefix} - Conscious Connected Parenting</title>
    <meta
      name="description"
      content="Conscious Connected Parenting - parent coaching services provided by Megan Lane."
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default BaseHead;
