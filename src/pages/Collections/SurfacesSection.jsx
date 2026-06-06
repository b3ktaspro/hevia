import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

const items = [
  {
    number: "01",
    title: "Imitation Pierre",
    desc: "L’authenticité de la pierre naturelle alliée aux performances des matériaux modernes.",
    img: "/images/home/acceuil_home_1.jpg",
  },
  {
    number: "02",
    title: "Imitation Béton",
    desc: "Des surfaces contemporaines inspirées de l’architecture moderne.",
    img: "/images/home/catalogue_home2.jpg",
  },
  {
    number: "03",
    title: "Imitation Bois",
    desc: "La chaleur du bois avec la résistance et la simplicité d’entretien du carrelage.",
    img: "/images/home/catalogue_home2.jpg",
  },
  {
    number: "04",
    title: "Imitation Marbre",
    desc: "Des collections élégantes inspirées des marbres les plus prestigieux.",
    img: "/images/home/catalogue_home1.jpg",
  },
  {
    number: "05",
    title: "Salle de Bain",
    desc: "Pensé pour les espaces de bien-être et les environnements humides.",
    img: "/images/home/acceuil_home_2.png",
  },
  {
    number: "06",
    title: "Extérieur",
    desc: "Des matériaux conçus pour résister durablement aux conditions extérieures.",
    img: "/images/home/acceuil_home3.jpg",
  },
]

export default function SurfacesSection() {
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
    <section className="py-36 md:py-44 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            Univers HEVIA
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
            Des collections pour
            <span className="text-[#CBA18B]">
              {" "}chaque projet
            </span>
          </h2>

          <p
            className="
              mt-8
              text-[#1E2A38]/70
              leading-relaxed
            "
          >
            Découvrez les différentes matières qui composent notre sélection.
          </p>

        </div>

        <div
          ref={ref}
          className="
            mt-24
            grid
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            opacity-0
            translate-y-12
            transition-all
            duration-1000
          "
        >

          {items.map((item) => (
            <article
              key={item.number}
              className="
                group
                relative
                overflow-hidden
                rounded-[40px]
                h-[620px]
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div
                className="
                  absolute
                  top-8
                  left-8
                  text-7xl
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
                  p-8
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
                    text-3xl
                    font-light
                    text-white
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-white/70
                    leading-relaxed
                  "
                >
                  {item.desc}
                </p>

                <Link
                  to="/collections"
                  className="
                    inline-flex
                    mt-8
                    items-center
                    gap-3
                    text-[#CBA18B]
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

                </Link>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  )
}