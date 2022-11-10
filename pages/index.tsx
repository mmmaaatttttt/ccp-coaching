import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "common/components/button";
import headerImage from "public/images/pexels-header.jpg";
import descriptionImage from "public/images/pexels-description.jpg";
import endorsementsImage from "public/images/endorsements.png";
import styles from "./Home.module.css";

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
          <Image
            src={headerImage}
            alt="Man and child in the mountains"
            priority
            fill
          />
        </div>
        <div className={`${styles.secondary} ${styles.col2}`}>
          <h1>
            Find joy in parenting, <br />
            through connection and unconditional love
          </h1>
        </div>
      </section>

      <div className={styles.container}>
        <section className={styles.section}>
          <div className={`${styles.col2} p-5`}>
            <h2 className="center">
              Do you find yourself being regularly triggered by your children?
            </h2>
            <p className="mx-5">
              Do you react out of anger and later feel full of guilt and
              remorse? Are you longing to change this pattern but are not sure
              how?
            </p>
            <p className="mx-5">
              I am here to support you to connect with the why behind your
              triggers so that you are able to make sense of the patterns at
              play and create new conscious ways of responding and experiencing
              parenting.
            </p>
            <p className="mx-5">
              I am here to help you connect with the <em>why</em> behind your
              triggers, so that you are able to make sense of the patterns at
              play and create new, conscious ways of responding to and
              experiencing parenting.
            </p>
            <p className="mx-5">
              Conscious Connected Parenting is about an intention and commitment
              to parent your children with unconditional love, rooted in science
              and developmental understanding. It&apos;s about progress, not
              perfection!
            </p>
          </div>
          <div className={`${styles.col2} ${styles.descriptionImageWrapper}`}>
            <Image
              src={descriptionImage}
              alt="Woman and child in front of pink background"
              width={300}
              height={450}
              className={`${styles.imageDescription}`}
            />
            <Button href="/about" variant="secondary">
              Learn more about Meg
            </Button>
          </div>
        </section>

        <section className={`${styles.section} bg-primary m-5 px-5 py-3`}>
          <div className={styles.program}>
            <h2 className="center mt-1">Private Coaching</h2>
            <ul>
              <li className="my-2">
                12 weeks of weekly one hour coaching at a time convenient to you
              </li>
              <li className="my-2">
                Guidance through the Ultimate Parenting Success Course
              </li>
              <li className="my-2">
                Strategies and tools customized for your family{" "}
              </li>
              <li className="my-2">
                Develop an understanding of the patterns at play that are
                keeping you from being the parent you want to be
              </li>
            </ul>
          </div>
          <div className={styles.program}>
            <h2 className="center mt-1">Group Coaching</h2>
            <ul>
              <li className="my-2">
                12 weeks of weekly one hour coaching at a set time with a group
                of 3 to 5 parents
              </li>
              <li className="my-2">
                Guidance through the Ultimate Parenting Success Course
              </li>
              <li className="my-2">
                An opportunity to connect with other parents who share similar
                goals and grow this community
              </li>
            </ul>
          </div>
        </section>

        <div className="center">
          <Button href="/coaching" variant="tertiary">
            Learn more about the program
          </Button>
        </div>

        <section
          className={`${styles.section} ${styles.endorsements} mt-4 p-4`}
        >
          <Image
            src={endorsementsImage}
            alt="Cartoon of woman and child hugging"
            width={300}
            height={300}
          />
          <div className="px-3">
            <p>
              Meg leads with empathy, and is able to listen to my parenting
              struggles without judgment. She has great insight, and is able to
              create a space where I felt comfortable discussing challenging
              topics. In short, Meg is an incredible coach!
            </p>
            <p className="text-right">
              <em>-Matt</em>
            </p>
          </div>
          <div className="px-3">
            <p>
              Meg is such a wonderful and thoughtful parenting coach. She helped
              me discover things in myself I never knew and it has helped my
              parenting in so many ways. I can&apos;t recommend her enough!
            </p>
            <p className="text-right">
              <em>-Lindy</em>
            </p>
          </div>
        </section>

        <div className="center">
          <Button href="/endorsements">
            Read more endorsements
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
