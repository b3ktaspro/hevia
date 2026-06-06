import { useEffect, useRef } from "react"

const zones = [
  {
    number: "01",
    title: "Béziers & Montpellier",
    text: "Livraisons rapides et accompagnement privilégié pour vos projets locaux."
  },
  {
    number: "02",
    title: "Occitanie",
    text: "Nous assurons la livraison de nos collections dans toute la région."
  },
  {
    number: "03",
    title: "France",
    text: "Expédition nationale sur demande avec étude personnalisée."
  }
]

export default function DeliverySection() {
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
              font-medium
            "
          >
            Logistique
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
            Livraison &
            <span className="text-[#CBA18B]">
              {" "}disponibilité
            </span>
          </h2>

          <p
            className="
              mt-8
              text-lg
              text-[#1E2A38]/70
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Chaque commande bénéficie d’un suivi rigoureux,
            d’une préparation soignée et d’une logistique adaptée
            afin de garantir une réception dans les meilleures conditions.
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

          {zones.map((zone) => (
            <div
              key={zone.number}
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
                {zone.number}
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
                {zone.number}
              </div>

              <h3
                className="
                  mt-8
                  text-2xl
                  font-light
                  text-[#1E2A38]
                "
              >
                {zone.title}
              </h3>

              <p
                className="
                  mt-5
                  text-[#1E2A38]/70
                  leading-relaxed
                "
              >
                {zone.text}
              </p>

            </div>
          ))}

        </div>

        <div
          className="
            mt-24
            bg-[#1E2A38]
            rounded-[40px]
            p-10
            md:p-16
            text-center
          "
        >

          <span
            className="
              uppercase
              tracking-[0.35em]
              text-xs
              text-[#CBA18B]
            "
          >
            Engagement HEVIA
          </span>

          <h3
            className="
              mt-6
              text-3xl
              md:text-5xl
              font-light
              text-white
            "
          >
            Une logistique pensée
            <br />
            pour la sérénité
          </h3>

          <p
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-white/70
              leading-relaxed
            "
          >
            Préparation minutieuse, protection des matériaux,
            suivi personnalisé et accompagnement jusqu’à la livraison :
            nous accordons autant d’importance au transport qu’à la qualité
            des collections que nous sélectionnons.
          </p>

        </div>

      </div>

    </section>
  )
}