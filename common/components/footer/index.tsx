import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Conscious Connected Parenting
    </footer>
  );
};

export default Footer;
