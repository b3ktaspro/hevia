import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const faqs = [
  {
    question: "Quels types de carrelage propose HEVIA ?",
    answer:
      "Nous sélectionnons des collections haut de gamme reconnues pour leur qualité, leur esthétique et leur durabilité afin de répondre aux exigences des projets résidentiels et professionnels.",
  },
  {
    question: "Proposez-vous un service de pose ?",
    answer:
      "Nous travaillons avec un réseau d’artisans partenaires qualifiés et pouvons vous orienter vers des professionnels adaptés à votre projet.",
  },
  {
    question: "Comment obtenir un devis personnalisé ?",
    answer:
      "Après étude de votre projet, nous établissons une proposition détaillée et adaptée à vos besoins dans les meilleurs délais.",
  },
  {
    question: "Dans quelles zones intervenez-vous ?",
    answer:
      "Nous accompagnons principalement les projets situés à Béziers, Montpellier, Narbonne, Nîmes et dans l’ensemble de la région.",
  },
  {
    question: "Proposez-vous d'autres produits ?",
    answer:
      "Nous proposons également des faïences, revêtements décoratifs, accessoires de finition, colles, joints et solutions d’entretien.",
  },
]

export default function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-20 sm:py-28 lg:py-40 bg-[#F8F5F1]">

      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-3xl mx-auto">

          <span
            className="
              uppercase
              tracking-[0.22em]
              sm:tracking-[0.35em]
              text-[10px]
              sm:text-xs
              text-[#CBA18B]
              font-medium
            "
          >
            FAQ
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
            Questions

            <span className="text-[#CBA18B]">
              {" "}fréquentes
            </span>

          </h2>

          <p
            className="
              mt-5
              sm:mt-8
              text-sm
              sm:text-base
              text-[#1E2A38]/70
              leading-relaxed
              max-w-2xl
              mx-auto
            "
          >
            Retrouvez les réponses aux questions les plus courantes concernant nos produits,
            notre accompagnement et le déroulement de votre projet.
          </p>

        </div>

        <div className="mt-10 sm:mt-16 lg:mt-20 border-t border-[#CBA18B]/15">

          {faqs.map((faq, index) => {
            const isOpen = open === index

            return (
              <div
                key={index}
                className="border-b border-[#CBA18B]/15"
              >

                <button
                  onClick={() =>
                    setOpen(isOpen ? null : index)
                  }
                  className="
                    w-full
                    py-5
                    sm:py-8
                    flex
                    items-start
                    sm:items-center
                    justify-between
                    gap-4
                    sm:gap-8
                    text-left
                  "
                >

                  <div className="flex items-start gap-3 sm:gap-6 flex-1">

                    <span
                      className="
                        text-[#CBA18B]
                        text-[11px]
                        sm:text-sm
                        font-medium
                        tracking-[0.15em]
                        sm:tracking-[0.25em]
                        min-w-[28px]
                        sm:min-w-[40px]
                        mt-1
                      "
                    >
                      0{index + 1}
                    </span>

                    <span
                      className="
                        text-[#1E2A38]
                        text-base
                        sm:text-lg
                        md:text-xl
                        font-medium
                        leading-relaxed
                      "
                    >
                      {faq.question}
                    </span>

                  </div>

                  <div
                    className={`
                      w-10
                      h-10
                      sm:w-12
                      sm:h-12
                      rounded-full
                      border
                      shrink-0
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-500
                      ${
                        isOpen
                          ? "bg-[#CBA18B] border-[#CBA18B] rotate-45"
                          : "border-[#CBA18B]/30"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-lg
                        sm:text-xl
                        transition-colors
                        duration-300
                        ${
                          isOpen
                            ? "text-white"
                            : "text-[#CBA18B]"
                        }
                      `}
                    >
                      +
                    </span>
                  </div>

                </button>

                <AnimatePresence>

                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                    >

                      <div
                        className="
                          pb-5
                          sm:pb-8
                          pl-10
                          sm:pl-[72px]
                          pr-2
                          sm:pr-6
                          text-sm
                          sm:text-base
                          text-[#1E2A38]/70
                          leading-relaxed
                        "
                      >
                        {faq.answer}
                      </div>

                    </motion.div>
                  )}

                </AnimatePresence>

              </div>
            )
          })}

        </div>

      </div>

    </section>
  )
}