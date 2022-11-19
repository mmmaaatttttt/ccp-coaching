import type { NextPage } from "next";
import Image from "next/image";
import { Sunrise, CloudSun, Sun } from "react-bootstrap-icons";
import BaseHead from "common/components/base_head";
import Button from "common/components/button";
import SlideFade from "common/components/slide_fade";
import headerImage from "public/images/pexels-header.jpg";
import descriptionImage from "public/images/pexels-description.jpg";
import endorsementsImage from "public/images/endorsements.png";
import styles from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <BaseHead prefix="Home" />
      <section className={styles.section}>
        <div className={`${styles.imageWrapper}`}>
          <Image
            src={headerImage}
            alt="Man and child in the mountains"
            fill
            priority
          />
        </div>
        <SlideFade from="right" className={styles.bubble}>
          <h1>
            Find joy in parenting, <br />
            through connection and unconditional love
          </h1>
        </SlideFade>
      </section>

      <div className={`container ${styles.container}`}>
        <SlideFade from="bottom" duration={1} amount={0.1} scroll>
          <section className={styles.section}>
            <div className={`${styles.col2} p-5`}>
              <h2 className="center">
                Do you find yourself being regularly triggered by your children?
              </h2>
              <p>
                Do you react out of anger and later feel full of guilt and
                remorse? Are you longing to change this pattern but are not sure
                how?
              </p>
              <p>
                I am here to support you to connect with the why behind your
                triggers so that you are able to make sense of the patterns at
                play and create new conscious ways of responding and
                experiencing parenting.
              </p>
              <p>
                I am here to help you connect with the <em>why</em> behind your
                triggers, so that you are able to make sense of the patterns at
                play and create new, conscious ways of responding to and
                experiencing parenting.
              </p>
              <p>
                Conscious Connected Parenting is about an intention and
                commitment to parent your children with unconditional love,
                rooted in science and developmental understanding. It&apos;s
                about progress, not perfection!
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
              <Button href="/about" variant="secondary" className="mt-4">
                Learn more about Meg
              </Button>
            </div>
          </section>
        </SlideFade>

        <SlideFade from="right" duration={1} amount={0.25} scroll>
          <section className={`${styles.section} bg-primary m-5 px-5 py-3`}>
            <div className={styles.program}>
              <h2 className="center mt-1">Private Coaching</h2>
              <ul>
                <li className="my-2">
                  12 weeks of weekly one hour coaching at a time convenient to
                  you
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
                  12 weeks of weekly one hour coaching at a set time with a
                  group of 3 to 5 parents
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
        </SlideFade>

        <SlideFade from="left" duration={1} amount={0.25} scroll>
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
                struggles without judgment. She has great insight, and is able
                to create a space where I felt comfortable discussing
                challenging topics. In short, Meg is an incredible coach!
              </p>
              <p className="text-right">
                <em>-Matt</em>
              </p>
            </div>
            <div className="px-3">
              <p>
                Meg is such a wonderful and thoughtful parenting coach. She
                helped me discover things in myself I never knew and it has
                helped my parenting in so many ways. I can&apos;t recommend her
                enough!
              </p>
              <p className="text-right">
                <em>-Lindy</em>
              </p>
            </div>
          </section>
          <div className="center">
            <Button href="/endorsements">Read more endorsements</Button>
          </div>
        </SlideFade>
      </div>
      <div className="bg-tertiary mt-5 pb-5">
        <div className={styles.container}>
          <section className={`${styles.section} ${styles.contact}`}>
            <div className="m-4 mt-5 p-4">
              <h2>Find More</h2>
              <Sunrise width="2.5rem" height="2.5rem" className="color-secondary" />
              <ul className="p-4">
                <li className="mb-3">Cooperation and connection</li>
                <li className="mb-3">Ease, peace, and teamwork</li>
                <li className="mb-3">Confidence and empowerment</li>
                <li className="mb-3">Joy!</li>
              </ul>
            </div>
            <div className="m-4 mt-5 p-4">
              <h2>Eliminate</h2>
              <CloudSun width="2.5rem" height="2.5rem" className="color-secondary" />
              <ul className="p-4">
                <li className="mb-3">
                  Yelling, shaming, and fear-based tactics
                </li>
                <li className="mb-3">Power struggles</li>
                <li className="mb-3">
                  Cycles of reactionary behavior and guilt
                </li>
                <li className="mb-3">
                  Patterns and beliefs that may be keeping you from
                  authentically connecting with your child
                </li>
              </ul>
            </div>
            <div className="m-4 mt-5 p-4">
              <h2>You CAN</h2>
              <Sun width="2.5rem" height="2.5rem" className="color-secondary" />
              <ul className="p-4">
                <li className="mb-3">
                  Solve everyday problems with effective strategies that
                  don&apos;t rely on punishments or rewards
                </li>
                <li className="mb-3">
                  Meet both you and your childrens&apos; needs
                </li>
                <li className="mb-3">
                  Show up with more patience, presence, and compassion
                </li>
              </ul>
            </div>
          </section>
          <div className="center pt-4">
            <Button href="/contact">Contact me</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
