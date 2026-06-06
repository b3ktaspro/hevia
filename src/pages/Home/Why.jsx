import { useEffect, useRef } from "react"

const features = [
  {
    number: "01",
    title: "Qualité supérieure",
    text: "Nous sélectionnons exclusivement des collections issues de fabricants reconnus pour leur savoir-faire, leur durabilité et l'excellence de leurs finitions."
  },
  {
    number: "02",
    title: "Design & Élégance",
    text: "Des matériaux inspirés de l'architecture contemporaine, pensés pour traverser les tendances et valoriser durablement chaque espace."
  },
  {
    number: "03",
    title: "Accompagnement sur mesure",
    text: "De la sélection des matériaux jusqu'à la concrétisation de votre projet, nous vous accompagnons avec attention et expertise."
  }
]

export default function Why() {
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
        threshold: 0.15
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

        <div className="max-w-4xl mx-auto text-center">

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
              font-medium
            "
          >
            Pourquoi HEVIA
          </span>

          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-light
              text-[#1E2A38]
              leading-tight
            "
          >
            Plus qu'un simple
            <span className="text-[#CBA18B]">
              {" "}carrelage
            </span>
          </h2>

          <p
            className="
              mt-8
              text-[#1E2A38]/70
              text-lg
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Chez HEVIA, nous considérons chaque matériau comme un élément
            essentiel de l'identité d'un espace. Notre approche repose sur
            l'exigence, le design et l'accompagnement personnalisé.
          </p>

        </div>

        <div
          className="
            mt-24
            grid
            md:grid-cols-3
            gap-8
          "
        >

          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                relative
                bg-white
                rounded-[36px]
                p-10
                border
                border-[#CBA18B]/10
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              <div
                className="
                  absolute
                  top-6
                  right-6
                  text-7xl
                  font-bold
                  text-[#CBA18B]/10
                  select-none
                "
              >
                {feature.number}
              </div>

              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-[#CBA18B]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-sm
                  font-semibold
                "
              >
                {feature.number}
              </div>

              <h3
                className="
                  mt-8
                  text-2xl
                  font-light
                  text-[#1E2A38]
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-5
                  text-[#1E2A38]/70
                  leading-relaxed
                "
              >
                {feature.text}
              </p>

            </div>
          ))}

        </div>

        <div
          className="
            mt-24
            flex
            justify-center
          "
        >

          <div
            className="
              grid
              grid-cols-3
              gap-10
              md:gap-20
              text-center
            "
          >

            <div>

              <div
                className="
                  text-5xl
                  font-light
                  text-[#1E2A38]
                "
              >
                100+
              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-[#1E2A38]/60
                "
              >
                Références
              </p>

            </div>

            <div>

              <div
                className="
                  text-5xl
                  font-light
                  text-[#1E2A38]
                "
              >
                10+
              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-[#1E2A38]/60
                "
              >
                Collections
              </p>

            </div>

            <div>

              <div
                className="
                  text-5xl
                  font-light
                  text-[#1E2A38]
                "
              >
                100%
              </div>

              <p
                className="
                  mt-2
                  text-sm
                  text-[#1E2A38]/60
                "
              >
                Sélectionnées
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}