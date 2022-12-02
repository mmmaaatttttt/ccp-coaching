import Head from "next/head";

type BaseHeadProps = {
  prefix: String;
};

const BaseHead = ({ prefix }: BaseHeadProps) => {
  const title = `${prefix} - Conscious Connected Parenting`;
  const description =
    "Conscious Connected Parenting - parent coaching services provided by Megan Lane";
  const image = "/images/social.png";
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="And a social description for our cool page"
      />
      <meta name="description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff"></meta>
    </Head>
  );
};

export default BaseHead;
