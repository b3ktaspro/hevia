import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import image from "/images/logo/logo_hevia.png"

export default function AboutSection() {
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
        threshold: 0.15
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="
        py-36
        md:py-44
        bg-[#F8F5F1]
        opacity-0
        translate-y-12
        transition-all
        duration-1000
      "
    >

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >

          <div
            className="
              relative
              overflow-hidden
              rounded-[40px]
              group
            "
          >

            <div
              className="
                absolute
                top-8
                left-8
                z-20
                text-[90px]
                font-bold
                text-white/15
              "
            >
              03
            </div>

            <img
              src={image}
              alt="HEVIA"
              className="
                w-full
                h-[720px]
                object-cover
                transition-all
                duration-[1800ms]
                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          </div>

          <div>

            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#CBA18B]
                font-medium
              "
            >
              Maison HEVIA
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
              Une vision moderne du
              <span className="text-[#CBA18B]">
                {" "}carrelage
              </span>
            </h2>

            <p
              className="
                mt-8
                text-lg
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              HEVIA réunit design, exigence et sélection
              rigoureuse afin de proposer des collections
              capables de répondre aux projets les plus ambitieux.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Chaque matériau est choisi pour sa qualité,
              sa durabilité et sa capacité à créer des espaces
              élégants qui traversent les années sans perdre
              leur caractère.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Notre approche repose sur le conseil,
              la proximité et une attention particulière
              portée aux détails qui font toute la différence.
            </p>

            <div
              className="
                mt-12
                grid
                grid-cols-3
                gap-8
              "
            >

              <div>

                <div
                  className="
                    text-4xl
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
                    text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  Premium
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
                    text-4xl
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

            <div
              className="
                mt-14
                flex
                flex-wrap
                gap-4
              "
            >

              <Link
                to="/collections"
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-[#1E2A38]
                  text-white
                  font-medium
                  transition-all
                  duration-500
                  hover:bg-[#CBA18B]
                  hover:text-[#1E2A38]
                  hover:scale-105
                "
              >
                Découvrir les collections
              </Link>

              <Link
                to="/about"
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-[#1E2A38]/15
                  text-[#1E2A38]
                  transition-all
                  duration-500
                  hover:border-[#CBA18B]
                  hover:text-[#CBA18B]
                "
              >
                Notre histoire
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}