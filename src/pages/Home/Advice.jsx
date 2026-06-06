import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"

import img from "/images/home/acceuil_home_2.png"

export default function Advice() {
  const imgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const elements = [imgRef.current, textRef.current]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove(
              "opacity-0",
              "translate-y-12"
            )

            entry.target.classList.add(
              "opacity-100",
              "translate-y-0"
            )
          }
        })
      },
      {
        threshold: 0.15
      }
    )

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-36 md:py-44 bg-[#F8F5F1]">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
            grid
            lg:grid-cols-2
            gap-16
            items-center
          "
        >

          <div
            ref={imgRef}
            className="
              relative
              overflow-hidden
              rounded-[40px]
              opacity-0
              translate-y-12
              transition-all
              duration-1000
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
              02
            </div>

            <img
              src={img}
              alt="Conseil HEVIA"
              className="
                w-full
                h-[700px]
                object-cover
                transition-all
                duration-[1800ms]
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          </div>

          <div
            ref={textRef}
            className="
              opacity-0
              translate-y-12
              transition-all
              duration-1000
            "
          >

            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#CBA18B]
                font-medium
              "
            >
              Conseil & Expertise
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
              Trouvez le matériau
              <span className="text-[#CBA18B]">
                {" "}idéal
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
              Choisir un carrelage ne se limite pas à une question
              d’esthétique. Chaque espace possède ses contraintes,
              ses usages et son identité propre.
            </p>

            <p
              className="
                mt-6
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Notre équipe vous accompagne dans la sélection
              des formats, textures, couleurs et finitions
              afin de créer des espaces harmonieux,
              durables et parfaitement adaptés à votre projet.
            </p>

            <div
              className="
                mt-12
                grid
                grid-cols-2
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
                  Références disponibles
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
                  Accompagnement personnalisé
                </p>

              </div>

            </div>

            <div className="mt-12">

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-3
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
                Prendre rendez-vous
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}