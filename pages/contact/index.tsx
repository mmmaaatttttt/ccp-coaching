import type { NextPage } from "next";
import Image from "next/image";
import { InlineWidget } from "react-calendly";
import BaseHead from "common/components/base_head";
import Socials from "common/components/socials";
import SlideFade from "common/components/slide_fade";
import contact from "public/images/contact.png";
import styles from "./Contact.module.css";

const Contact: NextPage = () => {
  return (
    <>
      <BaseHead prefix="Contact" />
      <div className="container mt-4">
        <h3 className="center px-4">
          Take the next step toward a peaceful family life and schedule a
          discovery call with me today.
        </h3>
        <div className="center color-tertiary">
          <Socials />
        </div>
        <InlineWidget url="https://calendly.com/ccpcoachmeg/30min" />
        <div className={styles.contact}>
          <SlideFade from="bottom" scroll>
            <section className="bg-secondary m-4 rounded px-4 py-2">
              <p>
                Our children pay a heavy price when we lack consciousness.
                Overindulged, over-medicated, and over-labeled, many of them are
                unhappy. This is because, coming from unconsciousness ourselves,
                we bequeath to them our own unresolved needs, unmet
                expectations, and frustrated dreams. Despite our best
                intentions, we enslave them to the emotional inheritance we
                received from our parents, binding them to the debilitating
                legacy of ancestors past. The nature of unconsciousness is such
                that, until it&apos;s metabolized, it will seep through
                generation after generation. Only through awareness can the
                cycle of pain that swirls in families end.
              </p>
              <p className="text-right">
                <em>-Shefali Tsabary</em>
              </p>
            </section>
          </SlideFade>
          <SlideFade from="right" delay={0.25} scroll className="center mb-3">
            <Image
              alt="Meg with family"
              className="rounded"
              priority
              src={contact}
              width="300"
              height="383"
            />
          </SlideFade>
        </div>
      </div>
    </>
  );
};

export default Contact;
