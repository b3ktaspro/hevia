import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

import img1 from "/images/hero/acceuil_hero1.jpg"
import img2 from "/images/hero/acceuil_hero2.jpg"
import img3 from "/images/hero/acceuil_hero3.png"
import img4 from "/images/hero/acceuil_hero4.png"

const slides = [img1, img2, img3, img4]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">

      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current]}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="relative z-20 h-full max-w-7xl mx-auto px-6">

        <div className="h-full flex items-center">

          <div className="max-w-3xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-3 text-white/70 uppercase tracking-[0.35em] text-xs">
                <span className="w-12 h-px bg-[#CBA18B]" />
                Maison Hevia
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="text-white text-5xl md:text-7xl font-light leading-[0.95]"
            >
              L'élégance des
              <br />

              <span className="text-[#CBA18B] font-medium">
                matériaux nobles
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.9 }}
              className="mt-8 text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
            >
              Découvrez une sélection de carrelages et revêtements
              haut de gamme conçus pour donner caractère, élégance
              et durabilité à chaque espace.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.9 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link
                to="/collections"
                className="
                group
                bg-[#CBA18B]
                text-black
                px-8
                py-4
                rounded-full
                font-medium
                transition-all
                duration-500
                hover:scale-105
                "
              >
                Découvrir les collections
              </Link>

              <Link
                to="/contact"
                className="
                border
                border-white/20
                backdrop-blur-sm
                bg-white/5
                text-white
                px-8
                py-4
                rounded-full
                font-medium
                transition-all
                duration-500
                hover:bg-white/10
                "
              >
                Prendre rendez-vous
              </Link>
            </motion.div>

          </div>

        </div>

      </div>

      <div className="absolute left-8 bottom-10 z-30 flex items-center gap-3">

        <a
          href="https://www.instagram.com/maison.hevia/"
          target="_blank"
          rel="noreferrer"
          className="
          w-11
          h-11
          rounded-full
          border
          border-white/15
          bg-white/5
          backdrop-blur-sm
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-300
          hover:bg-[#CBA18B]
          hover:text-black
          "
        >
          <FaInstagram />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61580245243798"
          target="_blank"
          rel="noreferrer"
          className="
          w-11
          h-11
          rounded-full
          border
          border-white/15
          bg-white/5
          backdrop-blur-sm
          flex
          items-center
          justify-center
          text-white
          transition-all
          duration-300
          hover:bg-[#CBA18B]
          hover:text-black
          "
        >
          <FaFacebookF />
        </a>

      </div>

      <div className="absolute right-8 bottom-10 z-30 flex gap-3">

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              h-[3px]
              transition-all
              duration-500
              ${
                current === index
                  ? "w-14 bg-[#CBA18B]"
                  : "w-6 bg-white/30"
              }
            `}
          />
        ))}

      </div>

    </section>
  )
}