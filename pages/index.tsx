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

      <section className={styles.section}>
        <div className={`${styles.col2} ${styles.imageWrapper}`}>
          <Image src={topImage} alt="Woman and child overlooking a lake" />
        </div>
        <div className={`${styles.secondary} ${styles.col2}`}>
          <h1>
            Find joy in parenting, <br />
            through connection and unconditional love
          </h1>
        </div>
      </section>
      <section className={styles.section}>
        <div className={`${styles.col2} p-5`}>
          <h2 className="center">
            Do you find yourself being regularly triggered by your children?
          </h2>
          <p className="mx-5">
            Do you react out of anger and later feel full of guilt and remorse?
            Are you longing to change this pattern but are not sure how?
          </p>
          <p className="mx-5">
            I am here to support you to connect with the why behind your
            triggers so that you are able to make sense of the patterns at play
            and create new conscious ways of responding and experiencing
            parenting.
          </p>
          <p className="mx-5">
            Conscious connected parenting is about intention and commitment to
            parenting your children with unconditional love that is rooted in
            science and understanding. It’s about progress, not perfection!
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
