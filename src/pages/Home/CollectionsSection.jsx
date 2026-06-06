import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import img1 from "/images/home/acceuil_home_1.jpg"
import img2 from "/images/home/acceuil_home_2.png"
import img3 from "/images/home/acceuil_home3.jpg"
import img4 from "/images/home/acceuil_home_4.jpg"

const collections = [
  {
    number: "01",
    title: "Tous nos carrelages",
    desc: "Découvrez l'ensemble de nos collections sélectionnées pour leur qualité et leur élégance.",
    img: img1,
    link: "/",
  },
  {
    number: "02",
    title: "Salle de bain",
    desc: "Des matériaux conçus pour créer des espaces raffinés et intemporels.",
    img: img2,
    link: "/",
  },
  {
    number: "03",
    title: "Extérieur",
    desc: "Résistance, esthétique et durabilité pour vos projets en plein air.",
    img: img3,
    link: "/",
  },
  {
    number: "04",
    title: "Piscine",
    desc: "Des finitions haut de gamme pensées pour les environnements les plus exigeants.",
    img: img4,
    link: "/",
  },
]

export default function CollectionsSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-12")
          el.classList.add("opacity-100", "translate-y-0")
        }
      },
      {
        threshold: 0.15,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 sm:py-24 md:py-36 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-[10px]
              sm:text-xs
              text-[#CBA18B]
              font-medium
            "
          >
            Collections
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
            Explorez nos
            <span className="text-[#CBA18B]">
              {" "}collections
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
            Une sélection pensée pour répondre aux projets les plus exigeants,
            entre design contemporain et qualité durable.
          </p>

        </div>

        <div
          ref={ref}
          className="
            mt-10
            sm:mt-16
            md:mt-24
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-5
            sm:gap-8
            opacity-0
            translate-y-12
            transition-all
            duration-1000
          "
        >

          {collections.map((item) => (
            <Link
              key={item.number}
              to={item.link}
              className="
                group
                relative
                overflow-hidden
                rounded-[24px]
                sm:rounded-[30px]
                md:rounded-[36px]
                h-[380px]
                sm:h-[460px]
                lg:h-[580px]
              "
            >

              <img
                src={item.img}
                alt={item.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                  transition-all
                  duration-[1800ms]
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

              <div
                className="
                  absolute
                  top-5
                  left-5
                  sm:top-8
                  sm:left-8
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  font-bold
                  text-white/15
                "
              >
                {item.number}
              </div>

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  sm:p-8
                "
              >

                <span
                  className="
                    text-[#CBA18B]
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.25em]
                    sm:tracking-[0.3em]
                  "
                >
                  Collection
                </span>

                <h3
                  className="
                    mt-3
                    sm:mt-4
                    text-2xl
                    sm:text-3xl
                    font-light
                    text-white
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    sm:mt-4
                    text-white/70
                    leading-relaxed
                    text-xs
                    sm:text-sm
                    max-h-0
                    opacity-0
                    overflow-hidden
                    transition-all
                    duration-500
                    group-hover:max-h-32
                    group-hover:opacity-100
                  "
                >
                  {item.desc}
                </p>

                <div
                  className="
                    mt-4
                    sm:mt-6
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                    text-[#CBA18B]
                    text-xs
                    sm:text-sm
                    tracking-wide
                  "
                >
                  Découvrir

                  <span
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  )
}