import type { NextPage } from "next";
import Image from "next/image";
import BaseHead from "common/components/base_head";
import Button from "common/components/button";
import SlideFade from "common/components/slide_fade";
import coaching from "public/images/coaching.png";
import jaiLogo from "public/images/jai-logo.png";
import styles from "./Coaching.module.css";

const Coaching: NextPage = () => {
  return (
    <>
      <BaseHead prefix="Coaching" />
      <div className="container mt-4">
        <div className={styles.coaching1}>
          <SlideFade from="top" scroll>
            <section className="bg-primary px-4 py-2 mb-4 rounded">
              <p>
                <span className="color-tertiary">
                  The Ultimate Parent Success Course
                </span>{" "}
                is about you making profound shifts in your parenting and family
                relationships. Rooted in connection, as well as brain, nervous
                system, and attachment science, this program supports you to
                become the parent you long to be. It provides a deep,
                transformational experience for you as a parent first, as you
                let go of your residual feelings and unconscious belief patterns
                left over from your own childhood and the way you were parented.
              </p>
              <p>
                Since the unconscious mind accounts for over 90% of our
                behavior, you will see a change almost immediately, even before
                you receive any parenting tools.
              </p>
              <p>
                Within the course, you are able to quickly release the old
                unconscious belief patterns and replace them with your own
                empowering beliefs &ndash; the ones that will truly support your
                best parenting.
              </p>
              <p>
                What you&apos;ll experience in your Ultimate Parent Success
                Course is that there is no need for time-outs, consequences or
                punishments as a means to discipline your child.
              </p>
              <p>
                Instead, we work together with your new parenting tools to
                develop a deep connection with your child, so that you both have
                simple, effective communication, and an awareness of family
                values. Your family will be able to easily move through
                conflicts within the home. You will nurture a deep connection
                that allows your child to feel safe to communicate with you.
              </p>
            </section>
          </SlideFade>
        </div>
        <div className={styles.coaching2}>
          <SlideFade from="bottom" delay={0.25} scroll>
            <section className="bg-secondary px-4 py-2 my-4 rounded">
              <p>
                With my support, after this course you can raise respectful,
                polite and thoughtful children who are self-confident,
                responsible and happy. You won&apos;t have to resort to yelling,
                punishing, or threatening. Or turning a blind eye to challenging
                behavior.
              </p>
              <p>
                When you access the parenting tools in your Ultimate Parent
                Success Course, you&apos;ll notice a decrease in your
                frustration level, less conflict in the home, a difference in
                your child&apos;s behavior. Most importantly, you&apos;ll
                discover a deep sense of calm and connection, with the peace of
                mind that comes when you know you are doing your very best as a
                parent.
              </p>
            </section>
          </SlideFade>
          <SlideFade from="right" delay={0.5} scroll>
            <Image
              alt="Meg and family in park"
              className={`${styles.img} rounded`}
              priority
              src={coaching}
              width="251"
              height="350"
            />
          </SlideFade>
        </div>
        <div className={styles.coaching3}>
          <SlideFade from="bottom" scroll>
            <section className="bg-tertiary px-4 py-2 my-4 rounded">
              <p>
                This 12 week course is offered in both one on one and group
                settings. After the program is completed I offer discounted a la
                carte coaching packages. Schedule a discovery call today so that
                we can determine what your needs are and how I can best support
                you!
              </p>
            </section>
          </SlideFade>
          <SlideFade from="left" scroll>
            <Image
              alt="Meg sitting on ground with child"
              className={styles.img}
              priority
              src={jaiLogo}
              width="250"
              height="243"
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

export default Coaching;
