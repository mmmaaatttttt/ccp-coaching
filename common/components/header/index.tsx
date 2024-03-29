import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import logo from "public/images/logo.svg";
import { links } from "./constants";
import styles from "./Header.module.css";

const title = "Conscious Connected Parenting";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded(expanded => !expanded);
  const variants = useMemo(
    () => ({
      expanded: { height: `${4.125 + links.length * 2.25}rem` },
      collapsed: { height: `${4.125}rem` }
    }),
    []
  );
  return (
    <motion.header
      className={`${styles.header} ${expanded ? styles.expanded : ""}`}
      variants={variants}
      animate={expanded ? "expanded" : "collapsed"}
    >
      <Link href="/" legacyBehavior>
        <a className={styles.logo}>
          <Image src={logo} alt={`${title} logo`} width={50} height={50} />
          <h2 className={styles.title}>{title}</h2>
        </a>
      </Link>
      <div className={styles.menu}>
        <a className={expanded ? styles.expanded : ""} onClick={toggleExpanded}>
          <i>Menu</i>
        </a>
      </div>
      <div
        className={`${styles.links} ${expanded ? styles.expandedLinks : ""}`}
      >
        {links.map(({ path, text }) => (
          <Link href={path} key={path} legacyBehavior>
            <a className={styles.link} onClick={toggleExpanded}>{text}</a>
          </Link>
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
