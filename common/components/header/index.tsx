import Image from "next/image";
import Link from "next/Link";
import logo from "public/logo.svg";
import { links } from "./constants"
import styles from "./Header.module.css";

const title = "Conscious Connected Parenting";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} alt={`${title} logo`} width={50} height={50} />
      <h2 className={styles.title}>{title}</h2>
      {links.map(({ path, text }) => (
        <Link href={path} key={path}>
          <a className={styles.link}>{text}</a>
        </Link>
      ))}
    </header>
  );
};

export default Header;
