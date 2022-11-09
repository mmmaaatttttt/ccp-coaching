import Link from "next/link";
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
    <Link
      className={`${styles.button} ${styles[variant]}`}
      href={href}
      onClick={onClick}
    >
      {children}
    </Link>
  ) : (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );

export default Button;
