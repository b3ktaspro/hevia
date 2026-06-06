import { useEffect, useRef } from "react"

const projects = [
  {
    title: "Villa Contemporaine",
    image: "/images/home/acceuil_home_1.jpg",
  },
  {
    title: "Salle de bain haut de gamme",
    image: "/images/home/catalogue_home2.jpg",
  },
  {
    title: "Terrasse extérieure",
    image: "/images/home/catalogue_home2.jpg",
  },
  {
    title: "Piscine & margelles",
    image: "/images/home/catalogue_home1.jpg",
  },
  {
    title: "Cuisine moderne",
    image: "/images/home/acceuil_home_2.png",
  },
  {
    title: "Projet résidentiel",
    image: "/images/home/acceuil_home3.jpg",
  },
]

export default function RealisationsSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(
            "opacity-0",
            "translate-y-10"
          )

          el.classList.add(
            "opacity-100",
            "translate-y-0"
          )
        }
      },
      {
        threshold: 0.1,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-[#F8F5F1]">

      <div
        ref={sectionRef}
        className="
          max-w-7xl
          mx-auto

          px-4
          sm:px-6

          pt-28
          sm:pt-32
          lg:pt-36

          pb-20
          sm:pb-24
          lg:pb-32

          opacity-0
          translate-y-10

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
            "
          >
            Réalisations
          </span>

          <h1
            className="
              mt-6

              text-3xl
              sm:text-4xl
              lg:text-5xl

              font-light
              leading-tight

              text-[#1E2A38]
            "
          >
            Des projets qui
            <span className="text-[#CBA18B]">
              {" "}inspirent
            </span>
          </h1>

          <p
            className="
              mt-6

              max-w-2xl
              mx-auto

              text-[#1E2A38]/70
              text-sm
              sm:text-base

              leading-relaxed
            "
          >
            Chaque projet est unique. Découvrez quelques
            réalisations qui illustrent l'élégance et le
            caractère de nos collections.
          </p>

        </div>

        <div
          className="
            mt-12
            sm:mt-16

            grid
            sm:grid-cols-2
            lg:grid-cols-12

            gap-4
            sm:gap-6
          "
        >

          <div
            className="
              lg:col-span-7

              relative
              overflow-hidden

              rounded-[28px]

              h-[280px]
              sm:h-[360px]
              lg:h-[520px]

              group
            "
          >

            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="
                w-full
                h-full

                object-cover

                transition-all
                duration-[1800ms]

                group-hover:scale-105
              "
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8">

              <span
                className="
                  uppercase
                  tracking-[0.25em]
                  text-[10px]
                  text-[#CBA18B]
                "
              >
                Projet Signature
              </span>

              <h2
                className="
                  mt-3

                  text-2xl
                  sm:text-3xl
                  lg:text-4xl

                  font-light

                  text-white
                "
              >
                {projects[0].title}
              </h2>

            </div>

          </div>

          <div
            className="
              lg:col-span-5

              grid

              gap-4
              sm:gap-6
            "
          >

            {projects.slice(1, 3).map((project) => (

              <div
                key={project.title}
                className="
                  relative
                  overflow-hidden

                  rounded-[24px]

                  h-[200px]
                  sm:h-[240px]
                  lg:h-[250px]

                  group
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full

                    object-cover

                    transition-all
                    duration-[1800ms]

                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">

                  <h3
                    className="
                      text-xl
                      sm:text-2xl

                      font-light
                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

        <div
          className="
            mt-4
            sm:mt-6

            grid
            sm:grid-cols-2
            lg:grid-cols-3

            gap-4
            sm:gap-6
          "
        >

          {projects.slice(3).map((project) => (

            <div
              key={project.title}
              className="
                relative
                overflow-hidden

                rounded-[24px]

                h-[220px]
                sm:h-[260px]
                lg:h-[280px]

                group
              "
            >

              <img
                src={project.image}
                alt={project.title}
                className="
                  w-full
                  h-full

                  object-cover

                  transition-all
                  duration-[1800ms]

                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">

                <h3
                  className="
                    text-lg
                    sm:text-xl

                    font-light
                    text-white
                  "
                >
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}