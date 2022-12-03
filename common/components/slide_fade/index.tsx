import { motion } from "framer-motion";
import styles from "./SlideFade.module.css";

type Direction = "top" | "bottom" | "left" | "right";

type SlideFadeProps = {
  amount?: number | "some" | "all";
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from: Direction;
  offset?: string;
  scroll?: boolean;
};

const SlideFade = ({
  amount = "some",
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  from,
  offset = "50px",
  scroll = false
}: SlideFadeProps) => {
  const isMobile =
    typeof window === "undefined" ? false : window.innerWidth < 768;
  const animateProps = {
    initial: { opacity: 0, [from]: `-${offset}` },
    [scroll ? "whileInView" : "animate"]: { opacity: 1, [from]: 0 }
  };
  return (
    <motion.div
      className={`${styles.slideFade} ${className}`}
      transition={{ delay: isMobile ? 0 : delay, duration }}
      viewport={{ amount }}
      {...animateProps}
    >
      {children}
    </motion.div>
  );
};

export default SlideFade;
