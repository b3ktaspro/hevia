import { useEffect } from "react";
import { motion } from "framer-motion";
import { lenisInstance } from "../App";

export default function PageTransition({ children }) {
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, {
        immediate: true,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      {children}
    </motion.div>
  );
}
