import Socials from "../socials";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="p-2">© {new Date().getFullYear()} Conscious Connected Parenting</div>
      <div className="p-2">
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;
