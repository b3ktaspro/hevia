import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const categories = [
  { id: "salle-bain", label: "Salle de bain" },
  { id: "exterieur", label: "Extérieur" },
  { id: "piscine", label: "Piscine" },
  { id: "pierre", label: "Pierre" },
  { id: "bois", label: "Bois" },
  { id: "beton", label: "Béton" },
  { id: "marbre", label: "Marbre" },
]

const collections = {
  "salle-bain": {
    title: "Salle de bain",
    subtitle: "Des espaces pensés pour le bien-être",
    image: "/images/carrelage/carrelage_1.jpg",
    description:
      "Des matériaux élégants et durables qui transforment la salle de bain en un véritable espace de détente.",
  },

  exterieur: {
    title: "Extérieur",
    subtitle: "Résistance et élégance",
    image: "/images/carrelage/carrelage_4.jpg",
    description:
      "Des collections conçues pour sublimer terrasses, jardins et espaces de vie extérieurs.",
  },

  piscine: {
    title: "Piscine",
    subtitle: "Le détail qui change tout",
    image: "/images/carrelage/carrelage_6.jpg",
    description:
      "Des finitions haut de gamme adaptées aux environnements les plus exigeants.",
  },

  pierre: {
    title: "Pierre",
    subtitle: "Authenticité minérale",
    image: "/images/carrelage/carrelage_8.jpg",
    description:
      "La beauté naturelle de la pierre associée aux performances des matériaux modernes.",
  },

  bois: {
    title: "Bois",
    subtitle: "Chaleur naturelle",
    image: "/images/carrelage/carrelage_9.jpg",
    description:
      "Toute l’élégance du bois avec la résistance et la simplicité d’entretien du carrelage.",
  },

  beton: {
    title: "Béton",
    subtitle: "Minimalisme contemporain",
    image: "/images/carrelage/carrelage_10.jpg",
    description:
      "Des surfaces épurées idéales pour les projets architecturaux modernes.",
  },

  marbre: {
    title: "Marbre",
    subtitle: "L'excellence intemporelle",
    image: "/images/carrelage/carrelage_11.jpg",
    description:
      "Des collections inspirées des marbres les plus prestigieux pour des espaces raffinés.",
  },
}

export default function BestSellers() {
  const [active, setActive] = useState("salle-bain")

  const current = collections[active]

  return (
    <section className="py-20 sm:py-28 lg:py-40 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.22em]
              sm:tracking-[0.35em]
              text-[10px]
              sm:text-xs
              text-[#CBA18B]
              font-medium
            "
          >
            Collections Signature
          </span>

          <h2
            className="
              mt-4
              sm:mt-6
              text-[32px]
              sm:text-5xl
              md:text-6xl
              font-light
              text-[#1E2A38]
              leading-tight
            "
          >
            Nos collections

            <span className="text-[#CBA18B]">
              {" "}les plus appréciées
            </span>

          </h2>

          <p
            className="
              mt-5
              sm:mt-8
              text-sm
              sm:text-base
              text-[#1E2A38]/70
              leading-relaxed
            "
          >
            Découvrez les univers qui inspirent
            les architectes, décorateurs et particuliers.
          </p>

        </div>

        
        <div
  className="
    mt-10
    sm:mt-14
    flex
    flex-wrap
    justify-center
    gap-x-8
    gap-y-4
  "
>

  {categories.map((cat) => (

    <button
      key={cat.id}
      onClick={() => setActive(cat.id)}
      className="
        relative
        pb-2
        text-sm
        sm:text-base
        transition-all
        duration-300
      "
    >

      <span
        className={`
          transition-colors
          duration-300

          ${
            active === cat.id
              ? "text-[#1E2A38]"
              : "text-[#1E2A38]/40 hover:text-[#1E2A38]/80"
          }
        `}
      >
        {cat.label}
      </span>

      <span
        className={`
          absolute
          left-0
          -bottom-[2px]
          h-px
          bg-[#CBA18B]
          transition-all
          duration-500

          ${
            active === cat.id
              ? "w-full"
              : "w-0"
          }
        `}
      />

    </button>

  ))}

</div>

        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              mt-10
              sm:mt-16
              grid
              lg:grid-cols-2
              gap-8
              lg:gap-12
              items-center
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[26px]
                sm:rounded-[40px]
                h-[340px]
                sm:h-[500px]
                lg:h-[650px]
                group
              "
            >

              <img
                src={current.image}
                alt={current.title}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-[1800ms]
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div
                className="
                  absolute
                  bottom-6
                  sm:bottom-10
                  left-6
                  sm:left-10
                  right-6
                  sm:right-10
                "
              >

                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[10px]
                    sm:text-xs
                    text-[#CBA18B]
                  "
                >
                  Collection
                </span>

                <h3
                  className="
                    mt-3
                    sm:mt-4
                    text-3xl
                    sm:text-4xl
                    lg:text-5xl
                    font-light
                    text-white
                  "
                >
                  {current.title}
                </h3>

              </div>

            </div>

            <div className="text-center lg:text-left">

              <span
                className="
                  uppercase
                  tracking-[0.25em]
                  sm:tracking-[0.35em]
                  text-[10px]
                  sm:text-xs
                  text-[#CBA18B]
                "
              >
                Signature
              </span>

              <h3
                className="
                  mt-4
                  sm:mt-6
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-light
                  text-[#1E2A38]
                  leading-tight
                "
              >
                {current.subtitle}
              </h3>

              <p
                className="
                  mt-5
                  sm:mt-8
                  text-sm
                  sm:text-base
                  lg:text-lg
                  text-[#1E2A38]/70
                  leading-relaxed
                  max-w-xl
                  mx-auto
                  lg:mx-0
                "
              >
                {current.description}
              </p>

              <div className="mt-8 sm:mt-10">

                <button
                  className="
                    w-full
                    sm:w-auto
                    px-7
                    sm:px-8
                    py-3.5
                    sm:py-4
                    rounded-full
                    bg-[#CBA18B]
                    text-[#1E2A38]
                    text-sm
                    sm:text-base
                    font-medium
                    transition-all
                    duration-500
                    hover:scale-105
                  "
                >
                  Découvrir la collection
                </button>

              </div>

            </div>

          </motion.div>

        </AnimatePresence>

      </div>

    </section>
  )
}