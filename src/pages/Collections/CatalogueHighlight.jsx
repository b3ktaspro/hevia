import { useEffect, useRef } from "react"

const collections = [
  {
    number: "01",
    title: "Sélection Premium",
    description:
      "Des collections sélectionnées pour leur qualité exceptionnelle et leur capacité à valoriser durablement les espaces contemporains.",
    image: "/images/home/acceuil_home_2.png",
  },
  {
    number: "02",
    title: "Matières & Inspirations",
    description:
      "Bois, pierre, marbre ou béton : chaque finition possède sa personnalité et répond à une vision architecturale unique.",
    image: "/images/home/catalogue_home2.jpg",
  },
  {
    number: "03",
    title: "Projets d'Exception",
    description:
      "Des matériaux conçus pour accompagner les projets résidentiels et professionnels les plus ambitieux.",
    image: "/images/home/catalogue_home1.jpg",
  },
]

export default function CatalogueHighlight() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(
            "opacity-0",
            "translate-y-12"
          )

          el.classList.add(
            "opacity-100",
            "translate-y-0"
          )
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

      <div
        ref={ref}
        className="
          max-w-7xl
          mx-auto
          px-6
          opacity-0
          translate-y-12
          transition-all
          duration-1000
        "
      >

        <div className="text-center max-w-4xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            Sélection HEVIA
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
            Des collections pensées
            <span className="text-[#CBA18B]">
              {" "}pour durer
            </span>
          </h2>

        </div>

        <div className="mt-24 space-y-24">

          {collections.map((item, index) => (
            <div
              key={item.number}
              className={`
                grid
                lg:grid-cols-2
                gap-12
                items-center
                ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}
              `}
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  group
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[600px]
                    object-cover
                    transition-all
                    duration-[1800ms]
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-black/20" />

              </div>

              <div>

                <div
                  className="
                    text-7xl
                    font-bold
                    text-[#CBA18B]/15
                  "
                >
                  {item.number}
                </div>

                <h3
                  className="
                    mt-4
                    text-4xl
                    md:text-5xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-8
                    text-[#1E2A38]/70
                    text-lg
                    leading-relaxed
                    max-w-xl
                  "
                >
                  {item.description}
                </p>

                <div
                  className="
                    mt-10
                    w-24
                    h-px
                    bg-[#CBA18B]
                  "
                />

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}