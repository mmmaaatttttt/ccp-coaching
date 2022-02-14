import { useState } from "react";
import Image from "next/image";
import Link from "next/Link";
import { List, XLg } from "react-bootstrap-icons";
import logo from "public/logo.svg";
import { links } from "./constants";
import styles from "./Header.module.css";

const title = "Conscious Connected Parenting";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const expand = () => setExpanded(true);
  const collapse = () => setExpanded(false);
  console.log({ expanded });
  return (
    <header className={`${styles.header} ${expanded ? styles.expanded : ""}`}>
      <div className={styles.logo}>
        <Image src={logo} alt={`${title} logo`} width={50} height={50} />
        <h2 className={styles.title}>{title}</h2>
      </div>
      <List
        size={24}
        className={`${styles.icon} ${expanded ? styles.hideIcon : ""}`}
        onClick={expand}
      />
      <XLg
        size={24}
        className={`${styles.icon} ${!expanded ? styles.hideIcon : ""}`}
        onClick={collapse}
      />
      <div
        className={`${styles.links} ${expanded ? styles.expandedLinks : ""}`}
      >
        {links.map(({ path, text }) => (
          <Link href={path} key={path}>
            <a className={styles.link}>{text}</a>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
