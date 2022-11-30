import type { NextPage } from "next";
import Image from "next/image";
import BaseHead from "common/components/base_head";
import Button from "common/components/button";
import SlideFade from "common/components/slide_fade";
import endorsements1 from "public/images/endorsements-1.png";
import endorsements2 from "public/images/endorsements-2.png";
import endorsementsImg from "public/images/pexels-endorsements.jpg";
import styles from "./Endorsements.module.css";

const Endorsements: NextPage = () => {
  return (
    <>
      <BaseHead prefix="Endorsements" />
      <div className="container mt-4">
        <h1 className="mx-3">What clients are saying...</h1>
        <div className={styles.endorsements1}>
          <SlideFade from="top" scroll>
            <section className="bg-tertiary px-4 py-2 mb-4 rounded">
              <p>
                Working with Meg has helped me immensely on my parenting
                journey. The combination of the Parent Success Course and
                Meg&apos;s thoughtful coaching helped me practice new parenting
                habits in my day to day life for a more peaceful relationship
                with my children. Going through this process, I learned about my
                own parenting and sensory triggers as well as how to more
                respectfully and non-judgmentally respond to my children&apos;s
                big feelings.
              </p>
              <p className="text-right">
                <em>-Christina</em>
              </p>
            </section>
          </SlideFade>
          <SlideFade from="right" delay={0.25} scroll>
            <Image
              alt="Kid reading a book in bed with parents"
              className={`${styles.img} rounded`}
              priority
              src={endorsementsImg}
              width="480"
              height="320"
            />
          </SlideFade>
        </div>
        <div className={styles.endorsements2}>
          <SlideFade from="left" delay={0.75} scroll>
            <section className="bg-primary px-4 py-2 my-4 rounded">
              <p>
                Working with Megan was one of the most important decisions my
                partner and I made after we became parents. She holds space for
                the most vulnerable moments on your journey, is never
                judgemental and provides the tools and practices to make
                parenting joyful. Her approach is empowering and life-changing.
                I&apos;m thankful for what she does.
              </p>
              <p className="text-right">
                <em>-Tarra</em>
              </p>
            </section>
          </SlideFade>
          <SlideFade from="top" delay={0.5} scroll>
            <Image
              alt="Cartoon of family hugging"
              className={`${styles.img} rounded`}
              priority
              src={endorsements1}
              width="300"
              height="340"
            />
          </SlideFade>
        </div>
        <div className={styles.endorsements3}>
          <SlideFade from="bottom" scroll>
            <section className="bg-secondary px-4 py-2 my-4 rounded">
              <p>
                Taking this course with Meg has changed the way I see my
                children and more importantly, how I understand my own behavior
                in response to them. She has helped me to be softer, more gentle
                and to lead with connection instead of yelling and making
                threats. I now have a better understanding of why I react in
                certain ways to my kids and have learned how to work through
                that in order to prioritize connection with them above all else.
                I am more like the parent I want to be thanks to Meg and I
                highly encourage anyone seeking parenting support to take this
                course.
              </p>
              <p className="text-right">
                <em>-Emily</em>
              </p>
            </section>
          </SlideFade>
          <SlideFade from="left" scroll delay={0.25}>
            <Image
              alt="Meg sitting on ground with child"
              className={styles.img}
              priority
              src={endorsements2}
              width="250"
              height="397"
            />
          </SlideFade>
        </div>
        <SlideFade from="left" scroll>
          <div className="center my-4">
            <Button href="/contact" variant="primary">
              Sign me up
            </Button>
          </div>
        </SlideFade>
      </div>
    </>
  );
};

export default Endorsements;
