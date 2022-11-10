import Link from "next/Link";
import Variant from "common/types/variant";
import styles from "./Button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  onClick?: (evt: React.MouseEvent<HTMLElement>) => void;
};

const Button = ({
  children,
  href,
  onClick,
  variant = "primary"
}: ButtonProps) =>
  href ? (
    <Link href={href} onClick={onClick} legacyBehavior>
      <a className={`${styles.button} ${styles[variant]}`}>{children}</a>
    </Link>
  ) : (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );

export default Button;
