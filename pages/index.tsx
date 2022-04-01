import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import topImage from "public/images/stowlake.jpeg";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - Conscious Connected Parenting</title>
        <meta
          name="description"
          content="Conscious Connected Parenting - parent coaching services provided by Megan Lane."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.introduction}>
        <div>
          <Image src={topImage} alt="Woman and child overlooking a lake" />
        </div>
        <div className={styles.secondary}>
          <h1>
            Find joy in parenting, <br />
            through connection and unconditional love
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
