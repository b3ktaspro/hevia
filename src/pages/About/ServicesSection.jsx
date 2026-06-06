import { useEffect, useRef } from "react"

const services = [
  {
    number: "01",
    title: "Conseils personnalisés",
    text: "Nos experts vous accompagnent dans le choix des matériaux, textures et couleurs afin de créer un projet cohérent, élégant et durable."
  },
  {
    number: "02",
    title: "Solutions sur mesure",
    text: "Du simple revêtement à l'aménagement complet, nous sélectionnons des collections adaptées à vos besoins et à votre budget."
  },
  {
    number: "03",
    title: "Suivi & accompagnement",
    text: "Nous restons à vos côtés à chaque étape afin de garantir la réussite de votre projet et une expérience sereine."
  }
]

export default function ServicesSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const items = el.querySelectorAll("[data-animate]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.remove(
                "opacity-0",
                "translate-y-12"
              )

              entry.target.classList.add(
                "opacity-100",
                "translate-y-0"
              )
            }, index * 120)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    items.forEach((item) => observer.observe(item))

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
        "
      >

        <div
          data-animate
          className="
            text-center
            max-w-4xl
            mx-auto
            opacity-0
            translate-y-12
            transition-all
            duration-1000
          "
        >

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
            Nos services
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
            Un accompagnement
            <span className="text-[#CBA18B]">
              {" "}sur mesure
            </span>
          </h2>

          <p
            className="
              mt-6
              sm:mt-8
              text-sm
              sm:text-base
              lg:text-lg
              text-[#1E2A38]/70
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Chez HEVIA, nous vous accompagnons dans chaque étape
            de votre projet afin de vous proposer les meilleures
            solutions en matière de design, de qualité et de durabilité.
          </p>

        </div>

        <div
          className="
            mt-12
            sm:mt-16
            md:mt-24
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >

          {services.map((service) => (
            <div
              key={service.number}
              data-animate
              className="
                relative
                bg-white
                rounded-[28px]
                sm:rounded-[36px]
                p-6
                sm:p-8
                lg:p-10
                border
                border-[#CBA18B]/10
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                opacity-0
                translate-y-12
                transition-all
                duration-1000
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >

              <div
                className="
                  absolute
                  top-4
                  right-4
                  sm:top-6
                  sm:right-6
                  text-5xl
                  sm:text-7xl
                  font-bold
                  text-[#CBA18B]/10
                  select-none
                "
              >
                {service.number}
              </div>

              <div
                className="
                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  rounded-full
                  bg-[#CBA18B]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-xs
                  sm:text-sm
                  font-semibold
                "
              >
                {service.number}
              </div>

              <h3
                className="
                  mt-6
                  sm:mt-8
                  text-xl
                  sm:text-2xl
                  font-light
                  text-[#1E2A38]
                "
              >
                {service.title}
              </h3>

              <p
                className="
                  mt-4
                  sm:mt-5
                  text-sm
                  sm:text-base
                  text-[#1E2A38]/70
                  leading-relaxed
                "
              >
                {service.text}
              </p>

            </div>
          ))}

        </div>

        <div
          data-animate
          className="
            mt-12
            sm:mt-16
            md:mt-24
            bg-[#322D28]
            rounded-[32px]
            sm:rounded-[40px]
            p-8
            sm:p-12
            md:p-16
            text-center
            opacity-0
            translate-y-12
            transition-all
            duration-1000
          "
        >

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
            Engagement HEVIA
          </span>

          <h3
            className="
              mt-4
              sm:mt-6
              text-2xl
              sm:text-4xl
              md:text-5xl
              font-light
              text-white
              leading-tight
            "
          >
            Bien plus qu’un simple
            <br className="hidden sm:block" />
            fournisseur
          </h3>

          <p
            className="
              mt-6
              sm:mt-8
              max-w-3xl
              mx-auto
              text-sm
              sm:text-base
              lg:text-lg
              text-white/70
              leading-relaxed
            "
          >
            Notre mission est de vous guider dans la sélection
            des matériaux les plus adaptés à votre projet afin
            de créer des espaces élégants, durables et intemporels.
          </p>

        </div>

      </div>

    </section>
  )
}