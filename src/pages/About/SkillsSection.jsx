import { useEffect, useRef } from "react"

const skills = [
  {
    number: "01",
    title: "Conception sur mesure",
    text: "Chaque projet est étudié avec attention afin de proposer des solutions adaptées à vos besoins, vos contraintes et votre vision."
  },
  {
    number: "02",
    title: "Expertise technique",
    text: "Nous sélectionnons des matériaux reconnus pour leur qualité, leur durabilité et leurs performances esthétiques."
  },
  {
    number: "03",
    title: "Accompagnement complet",
    text: "Du premier conseil jusqu'à la réalisation finale, nous restons à vos côtés à chaque étape du projet."
  }
]

export default function SkillsSection() {
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
            }, index * 150)
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
            Savoir-faire
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
            Notre expertise &
            <span className="text-[#CBA18B]">
              {" "}savoir-faire
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
            Une approche basée sur l'exigence, la qualité des matériaux
            et l'accompagnement afin de garantir des projets durables
            et élégants.
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

          {skills.map((skill) => (
            <div
              key={skill.number}
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
                {skill.number}
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
                {skill.number}
              </div>

              <h3
                className="
                  mt-6
                  sm:mt-8
                  text-xl
                  sm:text-2xl
                  font-light
                  text-[#1E2A38]
                  leading-tight
                "
              >
                {skill.title}
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
                {skill.text}
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
            Maison HEVIA
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
            L'exigence du détail,
            <br className="hidden sm:block" />
            la qualité comme priorité
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
            Nous accordons une attention particulière à chaque
            sélection afin de proposer des collections capables
            de traverser le temps tout en conservant leur élégance
            et leur caractère.
          </p>

        </div>

      </div>

    </section>
  )
}