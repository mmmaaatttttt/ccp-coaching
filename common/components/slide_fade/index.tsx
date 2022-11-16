import { motion } from "framer-motion";
import styles from "./SlideFade.module.css";

type Direction = "top" | "bottom" | "left" | "right";

type SlideFadeProps = {
  amount?: number | "some" | "all";
  children: React.ReactNode;
  className?: string;
  duration?: number;
  from: Direction;
  offset?: string;
  scroll?: boolean;
};

const SlideFade = ({
  amount = "some",
  children,
  className = "",
  duration = 0.5,
  from,
  offset = "50px",
  scroll = false
}: SlideFadeProps) => {
  const animateProps = {
    initial: { opacity: 0, [from]: `-${offset}` },
    [scroll ? "whileInView" : "animate"]: { opacity: 1, [from]: 0 }
  };
  return (
    <motion.div
      className={`${styles.slideFade} ${className}`}
      transition={{ duration }}
      viewport={{ amount }}
      {...animateProps}
    >
      {children}
    </motion.div>
  );
};

export default SlideFade;
