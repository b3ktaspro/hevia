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

export default function Realisations() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10")
          el.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 bg-[#F8F5F1]">

      <div
        ref={ref}
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          opacity-0
          translate-y-10
          transition-all
          duration-1000
        "
      >

        <div className="text-center max-w-3xl mx-auto">

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
              text-4xl
              sm:text-5xl
              lg:text-6xl
              font-light
              text-[#1E2A38]
            "
          >
            Nos projets
          </h1>

          <p
            className="
              mt-6
              text-[#1E2A38]/70
              leading-relaxed
            "
          >
            Découvrez une sélection d'espaces réalisés avec
            nos collections de carrelage et matériaux.
          </p>

        </div>

        <div
          className="
            mt-16
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >

          {projects.map((project) => (

            <div
              key={project.title}
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                h-[420px]
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
                  group-hover:scale-110
                "
              />

              <div className="absolute inset-0 bg-black/25" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div
                className="
                  absolute
                  bottom-8
                  left-8
                  right-8
                "
              >

                <h3
                  className="
                    text-2xl
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