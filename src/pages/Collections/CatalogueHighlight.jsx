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
    <section className="py-20 sm:py-24 md:py-32 lg:py-44 bg-[#F8F5F1]">

      <div
        ref={ref}
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
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
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-[10px]
              sm:text-xs
              text-[#CBA18B]
              font-medium
            "
          >
            Sélection HEVIA
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
            Des collections pensées
            <span className="text-[#CBA18B]">
              {" "}pour durer
            </span>
          </h2>

          <p
            className="
              mt-6
              sm:mt-8
              max-w-3xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
              text-[#1E2A38]/70
              leading-relaxed
            "
          >
            Une sélection de matériaux conçus pour répondre aux exigences
            architecturales les plus modernes tout en conservant leur élégance
            au fil du temps.
          </p>

        </div>

        <div className="mt-14 sm:mt-20 md:mt-24 space-y-14 sm:space-y-20 md:space-y-24">

          {collections.map((item, index) => (
            <div
              key={item.number}
              className={`
                grid
                lg:grid-cols-2
                gap-8
                md:gap-12
                lg:gap-16
                items-center
                ${
                  index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                }
              `}
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[28px]
                  sm:rounded-[36px]
                  lg:rounded-[40px]
                  group
                "
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-[260px]
                    sm:h-[420px]
                    md:h-[500px]
                    lg:h-[600px]
                    object-cover
                    transition-all
                    duration-[1800ms]
                    group-hover:scale-110
                  "
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              </div>

              <div className="text-center lg:text-left">

                <div
                  className="
                    text-5xl
                    sm:text-6xl
                    md:text-7xl
                    font-bold
                    text-[#CBA18B]/15
                  "
                >
                  {item.number}
                </div>

                <h3
                  className="
                    mt-3
                    sm:mt-4
                    text-2xl
                    sm:text-4xl
                    md:text-5xl
                    font-light
                    text-[#1E2A38]
                    leading-tight
                  "
                >
                  {item.title}
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
                  {item.description}
                </p>

                <div
                  className="
                    mt-8
                    sm:mt-10
                    w-16
                    sm:w-24
                    h-px
                    bg-[#CBA18B]
                    mx-auto
                    lg:mx-0
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