import { useEffect, useRef } from "react"

export default function Terms() {
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
      {
        threshold: 0.15,
      }
    )

    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 lg:pb-40 bg-[#F8F5F1]">

      <div
        ref={ref}
        className="
          max-w-5xl
          mx-auto
          px-4
          sm:px-6
          opacity-0
          translate-y-10
          transition-all
          duration-700
        "
      >

        <div className="text-center">

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
            Conditions de vente
          </span>

          <h1
            className="
              mt-4
              sm:mt-6
              text-[34px]
              sm:text-5xl
              lg:text-6xl
              font-light
              text-[#1E2A38]
            "
          >
            Conditions Générales de
            <span className="text-[#CBA18B]">
              {" "}Vente
            </span>
          </h1>

          <p
            className="
              mt-5
              sm:mt-8
              text-sm
              sm:text-base
              lg:text-lg
              text-[#2B2B2B]/80
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Les présentes Conditions Générales de Vente régissent
            les commandes effectuées auprès de HEVIA. Elles définissent
            les droits et obligations du vendeur et du client.
          </p>

        </div>

        <div className="mt-10 sm:mt-16 space-y-5 sm:space-y-8">

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              1. Produits
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Les produits sont décrits avec la plus grande précision possible.
              Les photographies et visuels présentés sur le site sont fournis à
              titre indicatif et n'ont pas de valeur contractuelle.
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              2. Prix
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Les prix sont exprimés en euros TTC. HEVIA se réserve le droit
              de modifier ses tarifs à tout moment sans préavis.
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              3. Commande
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Toute commande devient ferme et définitive après validation.
              Le client garantit l’exactitude des informations communiquées.
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              4. Paiement
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Le règlement de la commande valide définitivement l’achat.
              Les modalités de paiement sont précisées lors de l’établissement
              du devis ou de la commande.
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              5. Livraison & Retrait
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Les délais de livraison sont communiqués à titre indicatif.
              Ils peuvent varier selon la disponibilité des produits et les
              contraintes logistiques.
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              6. Réclamations & Retours
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Toute réclamation doit être signalée dans les meilleurs délais.
              Les produits retournés doivent être dans leur état d’origine.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-[#85796D]">
              Certains produits commandés sur mesure ne sont ni repris ni échangés.
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              7. Garantie
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Les produits bénéficient des garanties légales prévues
              par la réglementation française.
            </p>

            <p className="mt-4 text-sm">
              Contact :
              {" "}
              <a
                href="mailto:contact@gmail.com"
                className="text-[#CBA18B] hover:underline"
              >
                contact@gmail.com
              </a>
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              8. Responsabilité
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              HEVIA ne pourra être tenue responsable en cas de mauvaise
              utilisation des produits ou de circonstances indépendantes
              de sa volonté.
            </p>
          </div>

          <div
            className="
              bg-white
              rounded-[24px]
              sm:rounded-[30px]
              p-5
              sm:p-8
              lg:p-10
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
            "
          >
            <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-[#1E2A38]">
              9. Droit applicable
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Les présentes conditions sont soumises au droit français.
              Une solution amiable sera privilégiée avant toute procédure
              judiciaire.
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}