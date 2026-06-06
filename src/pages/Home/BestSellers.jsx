import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const categories = [
  {
    id: "salle-bain",
    label: "Salle de bain"
  },
  {
    id: "exterieur",
    label: "Extérieur"
  },
  {
    id: "piscine",
    label: "Piscine"
  },
  {
    id: "pierre",
    label: "Pierre"
  },
  {
    id: "bois",
    label: "Bois"
  },
  {
    id: "beton",
    label: "Béton"
  },
  {
    id: "marbre",
    label: "Marbre"
  }
]

const collections = {
  "salle-bain": {
    title: "Salle de bain",
    subtitle: "Des espaces pensés pour le bien-être",
    image: "/images/carrelage/carrelage_1.jpg",
    description:
      "Des matériaux élégants et durables qui transforment la salle de bain en un véritable espace de détente."
  },

  exterieur: {
    title: "Extérieur",
    subtitle: "Résistance et élégance",
    image: "/images/carrelage/carrelage_4.jpg",
    description:
      "Des collections conçues pour sublimer terrasses, jardins et espaces de vie extérieurs."
  },

  piscine: {
    title: "Piscine",
    subtitle: "Le détail qui change tout",
    image: "/images/carrelage/carrelage_6.jpg",
    description:
      "Des finitions haut de gamme adaptées aux environnements les plus exigeants."
  },

  pierre: {
    title: "Pierre",
    subtitle: "Authenticité minérale",
    image: "/images/carrelage/carrelage_8.jpg",
    description:
      "La beauté naturelle de la pierre associée aux performances des matériaux modernes."
  },

  bois: {
    title: "Bois",
    subtitle: "Chaleur naturelle",
    image: "/images/carrelage/carrelage_9.jpg",
    description:
      "Toute l’élégance du bois avec la résistance et la simplicité d’entretien du carrelage."
  },

  beton: {
    title: "Béton",
    subtitle: "Minimalisme contemporain",
    image: "/images/carrelage/carrelage_10.jpg",
    description:
      "Des surfaces épurées idéales pour les projets architecturaux modernes."
  },

  marbre: {
    title: "Marbre",
    subtitle: "L'excellence intemporelle",
    image: "/images/carrelage/carrelage_11.jpg",
    description:
      "Des collections inspirées des marbres les plus prestigieux pour des espaces raffinés."
  }
}

export default function BestSellers() {
  const [active, setActive] = useState("salle-bain")

  const current = collections[active]

  return (
    <section className="py-36 md:py-44 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
              font-medium
            "
          >
            Collections Signature
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-light
              text-[#1E2A38]
            "
          >
            Nos collections
            <span className="text-[#CBA18B]">
              {" "}les plus appréciées
            </span>
          </h2>

          <p
            className="
              mt-8
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
            mt-16
            flex
            flex-wrap
            justify-center
            gap-3
          "
        >

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className={`
                px-6
                py-3
                rounded-full
                text-sm
                transition-all
                duration-500
                ${
                  active === cat.id
                    ? "bg-[#1E2A38] text-white"
                    : "bg-white border border-[#1E2A38]/10 text-[#1E2A38] hover:border-[#CBA18B]"
                }
              `}
            >
              {cat.label}
            </button>
          ))}

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={active}
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -20
            }}
            transition={{
              duration: 0.4
            }}
            className="
              mt-16
              grid
              lg:grid-cols-2
              gap-10
              items-center
            "
          >

            <div
              className="
                relative
                overflow-hidden
                rounded-[40px]
                h-[650px]
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
                  bottom-10
                  left-10
                  right-10
                "
              >

                <span
                  className="
                    uppercase
                    tracking-[0.3em]
                    text-xs
                    text-[#CBA18B]
                  "
                >
                  Collection
                </span>

                <h3
                  className="
                    mt-4
                    text-5xl
                    font-light
                    text-white
                  "
                >
                  {current.title}
                </h3>

              </div>

            </div>

            <div>

              <span
                className="
                  uppercase
                  tracking-[0.35em]
                  text-xs
                  text-[#CBA18B]
                "
              >
                Signature
              </span>

              <h3
                className="
                  mt-6
                  text-4xl
                  md:text-5xl
                  font-light
                  text-[#1E2A38]
                "
              >
                {current.subtitle}
              </h3>

              <p
                className="
                  mt-8
                  text-[#1E2A38]/70
                  leading-relaxed
                  text-lg
                "
              >
                {current.description}
              </p>

              <div className="mt-10">

                <button
                  className="
                    px-8
                    py-4
                    rounded-full
                    bg-[#CBA18B]
                    text-[#1E2A38]
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