import { useEffect, useRef } from "react"

export default function Intro() {
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
    <section className="py-16 sm:py-24 md:py-36 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div
          ref={ref}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            md:rounded-[48px]
            bg-[#322D28]
            opacity-0
            translate-y-12
            transition-all
            duration-1000
          "
        >

          <div
            className="
              absolute
              top-0
              right-0
              text-[80px]
              sm:text-[140px]
              md:text-[220px]
              leading-none
              font-bold
              text-white/[0.02]
              select-none
              pointer-events-none
            "
          >
            HEVIA
          </div>

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-white/[0.03]
              via-transparent
              to-black/10
            "
          />

          <div
            className="
              relative
              z-10
              px-5
              sm:px-8
              md:px-16
              lg:px-20
              py-12
              sm:py-16
              md:py-24
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
              Maison HEVIA
            </span>

            <h2
              className="
                mt-5
                sm:mt-8
                text-[32px]
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
                font-light
                text-white
                leading-[1.05]
                max-w-5xl
              "
            >
              L'excellence du
              <span className="text-[#CBA18B]">
                {" "}carrelage
              </span>
              <br />
              au service de vos espaces
            </h2>

            <p
              className="
                mt-6
                sm:mt-10
                max-w-3xl
                text-white/70
                text-[15px]
                sm:text-base
                md:text-lg
                leading-relaxed
              "
            >
              Chez HEVIA, nous considérons chaque matériau comme un élément
              d’architecture à part entière. Nous sélectionnons des collections
              capables d’allier esthétique, durabilité et émotion afin de créer
              des espaces élégants qui traversent le temps.
            </p>

            <div
              className="
                mt-10
                sm:mt-16
                grid
                grid-cols-1
                sm:grid-cols-3
                gap-8
                sm:gap-10
              "
            >

              <div>
                <div
                  className="
                    text-[#CBA18B]
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-light
                  "
                >
                  100+
                </div>

                <p
                  className="
                    mt-2
                    sm:mt-3
                    text-white/60
                    text-xs
                    sm:text-sm
                  "
                >
                  Références sélectionnées
                </p>
              </div>

              <div>
                <div
                  className="
                    text-[#CBA18B]
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-light
                  "
                >
                  Premium
                </div>

                <p
                  className="
                    mt-2
                    sm:mt-3
                    text-white/60
                    text-xs
                    sm:text-sm
                  "
                >
                  Collections haut de gamme
                </p>
              </div>

              <div>
                <div
                  className="
                    text-[#CBA18B]
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    font-light
                  "
                >
                  100%
                </div>

                <p
                  className="
                    mt-2
                    sm:mt-3
                    text-white/60
                    text-xs
                    sm:text-sm
                  "
                >
                  Accompagnement personnalisé
                </p>
              </div>

            </div>

            <div
              className="
                mt-10
                sm:mt-16
                w-24
                sm:w-40
                h-px
                bg-[#CBA18B]
              "
            />

          </div>

        </div>

      </div>

    </section>
  )
}