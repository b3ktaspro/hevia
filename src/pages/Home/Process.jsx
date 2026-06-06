import { useEffect, useRef } from "react"

const steps = [
  {
    number: "01",
    title: "Conseil & Écoute",
    text: "Nous analysons votre projet afin de comprendre vos besoins, vos contraintes et l’ambiance recherchée."
  },
  {
    number: "02",
    title: "Sélection & Qualité",
    text: "Nous vous accompagnons dans le choix de matériaux haut de gamme issus des meilleurs fabricants européens."
  },
  {
    number: "03",
    title: "Préparation & Logistique",
    text: "Chaque commande est contrôlée, préparée et suivie avec précision pour garantir une expérience sans compromis."
  },
  {
    number: "04",
    title: "Livraison & Pose",
    text: "Nous coordonnons la livraison et pouvons vous orienter vers des artisans qualifiés pour une finition irréprochable."
  }
]

export default function Process() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const cards = el.querySelectorAll(".process-card")

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.remove("opacity-0", "translate-y-12")
            card.classList.add("opacity-100", "translate-y-0")
          }, index * 150)
        })
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
        className="max-w-7xl mx-auto px-6"
      >

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[0.35em] text-xs text-[#CBA18B] font-medium">
            Processus
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-light text-[#1E2A38] leading-tight">
            Notre
            <span className="text-[#CBA18B]"> procédure </span>
            d'accompagnement
          </h2>

          <p className="mt-8 text-[#1E2A38]/70 leading-relaxed">
            Chaque projet suit une méthode rigoureuse afin de garantir une expérience fluide,
            un accompagnement personnalisé et un résultat à la hauteur de vos attentes.
          </p>

        </div>

        <div className="relative mt-24">

          <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-[#CBA18B]/25" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  process-card
                  relative
                  bg-white
                  rounded-[32px]
                  p-8
                  border
                  border-[#CBA18B]/10
                  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  opacity-0
                  translate-y-12
                  transition-all
                  duration-700
                  hover:-translate-y-2
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >

                <div
                  className="
                    absolute
                    top-4
                    right-5
                    text-6xl
                    font-bold
                    text-[#CBA18B]/10
                    pointer-events-none
                    select-none
                  "
                >
                  {step.number}
                </div>

                <div
                  className="
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-full
                    bg-[#CBA18B]
                    text-white
                    flex
                    items-center
                    justify-center
                    text-lg
                    font-semibold
                    shadow-lg
                  "
                >
                  {step.number}
                </div>

                <h3
                  className="
                    mt-8
                    text-xl
                    font-semibold
                    text-[#1E2A38]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[#1E2A38]/70
                    leading-relaxed
                    text-sm
                  "
                >
                  {step.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  )
}