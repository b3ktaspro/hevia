import { useEffect } from "react"
import { motion } from "framer-motion"
import { lenisInstance } from "../App"

export default function PageTransition({ children }) {
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, {
        immediate: true,
      })
    } else {
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.985,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 1.01,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  )
}