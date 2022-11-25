import type { NextPage } from "next";
import Image from "next/image";
import BaseHead from "common/components/base_head";
import Button from "common/components/button";
import SlideFade from "common/components/slide_fade";
import about1 from "public/images/about-1.png";
import about2 from "public/images/about-2.png";
import styles from "./About.module.css";

const About: NextPage = () => {
  return (
    <>
      <BaseHead prefix="About" />
      <div className="container mt-4">
        <div className={styles.about1}>
          <SlideFade from="top" scroll>
            <section className="bg-secondary px-4 py-2 mb-4 rounded">
              <p>
                I was blessed with an incredible little boy in 2015, and another
                in 2019. I was so confident in my ability to be a mother. I had
                seven years of experience as a postpartum doula and years of
                caring for children as a nanny. I believed I had this whole
                parent thing in the bag.
              </p>
              <p>You can probably see where this is going...</p>
              <p>
                I struggled so much to understand and parent my highly
                sensitive, deeply feeling kid. I read every book I could,
                utilized any positive parenting tool I could find! Anything that
                would help me connect with my son and help us to support him
                through his struggles. There is so much great information out
                there and I have learned a lot over the years, but none of it
                was clicking and “working” in our family.
              </p>
              <p>
                At four years old we were still struggling with my son&apos;s
                explosive behavior, lack of regulation, and general anxiety. We
                consulted with therapists and OTs. It was constant small
                progress followed by big regressions.
              </p>
            </section>
          </SlideFade>
          <SlideFade from="right" scroll delay={0.25}>
            <Image
              alt="Meg hiding under blanket with child"
              className={styles.img}
              priority
              src={about1}
              width="550"
              height="395"
            />
          </SlideFade>
        </div>
        <div className={styles.about2}>
          <SlideFade from="bottom" delay={0.75} scroll>
            <section className="bg-tertiary px-4 py-2 my-4 rounded">
              <p>
                I felt defeated. Like I was failing him. I kept questioning. Why
                are we still struggling with this? What am I doing wrong? What
                is wrong with my child? With me?
              </p>
              <p>
                I finally utilized the support of a parent coach and through
                that process I was able to connect the dots. To better
                understand myself, because it wasn&apos;t about him, it was
                about me. It was about what I was believing about myself and the
                stories (based in fear) I was telling myself about who my child
                was and what that said about myself as a mother. I was able to
                make a true shift into trust, radical acceptance, unconditional
                love and conscious connected parenting. It has made all the
                difference in my connection with my son and in my belief in
                myself as a parent. Our home is now rooted in a power with
                paradigm, where everyone&apos;s needs can be met and where we
                feel joy and confidence in our parenting.
              </p>
              <p>
                This process was so inspiring to me that it became my passion to
                help other parents in this way. Now as a certified parent coach
                with the Jai Institute I&apos;m seeing firsthand the impact that
                this work has, and I want to share that with as many parents as
                possible. It&apos;s had such an incredible impact on my
                family&apos;s life, the lives of my children and the clients I
                see. I believe every parent and child deserves to experience
                this kind of connection and harmony in their lives.
              </p>
            </section>
          </SlideFade>
          <SlideFade from="left" delay={0.5} scroll>
            <Image
              alt="Meg sitting on ground with child"
              className={styles.img}
              priority
              src={about2}
              width="351"
              height="575"
            />
          </SlideFade>
        </div>
        <SlideFade from="left" scroll>
          <div className="center my-4">
            <Button href="/coaching" variant="secondary">
              Learn more about the program
            </Button>
          </div>
        </SlideFade>
      </div>
    </>
  );
};

export default About;
