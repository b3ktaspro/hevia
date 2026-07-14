import { useEffect, useRef } from "react";

export default function Privacy() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-10");
          el.classList.add("opacity-100", "translate-y-0");
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

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
            Protection des données
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
            Politique de
            <span className="text-[#CBA18B]"> confidentialité</span>
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
            Cette politique explique comment HEVIA collecte, utilise et protège
            vos données personnelles conformément au RGPD et à la législation
            française en vigueur.
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
              1. Données collectées
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Lorsque vous nous contactez via notre site, nous pouvons
              recueillir :
            </p>

            <ul className="mt-4 pl-5 space-y-2 list-disc text-sm sm:text-base text-[#2B2B2B]/80">
              <li>Nom et prénom</li>
              <li>Adresse e-mail et numéro de téléphone</li>
              <li>Message et informations liées à votre demande</li>
              <li>Données techniques anonymes (cookies, IP, navigateur)</li>
            </ul>
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
              2. Finalité du traitement
            </h2>

            <ul className="mt-4 pl-5 space-y-2 list-disc text-sm sm:text-base text-[#2B2B2B]/80">
              <li>Répondre aux demandes de contact et devis</li>
              <li>Assurer le suivi client</li>
              <li>Améliorer l’expérience utilisateur</li>
              <li>Garantir la sécurité du site</li>
            </ul>
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
              3. Durée de conservation
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Les données sont conservées uniquement pendant la durée nécessaire
              au traitement de votre demande. Les demandes de contact peuvent
              être conservées jusqu’à 3 ans.
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
              4. Cookies et traceurs
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Le site peut utiliser des cookies techniques et analytiques
              nécessaires à son bon fonctionnement.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-[#85796D]">
              Aucun cookie publicitaire tiers n’est utilisé.
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
              5. Partage des données
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Vos données personnelles ne sont jamais revendues. Elles peuvent
              être transmises uniquement aux prestataires techniques nécessaires
              au fonctionnement du site.
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
              6. Vos droits
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>

            <ul className="mt-4 pl-5 space-y-2 list-disc text-sm sm:text-base text-[#2B2B2B]/80">
              <li>Droit d’accès</li>
              <li>Droit de rectification</li>
              <li>Droit à l’effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d’opposition</li>
            </ul>

            <p className="mt-4 text-sm text-[#85796D]">
              Contact :{" "}
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
              7. Hébergement
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Le site est hébergé sur une infrastructure sécurisée via Netlify.
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
              8. Mise à jour
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#2B2B2B]/80 leading-relaxed">
              Cette politique peut évoluer en fonction des évolutions
              législatives ou techniques.
            </p>

            <p className="mt-3 text-sm text-[#CBA18B] font-medium">
              Dernière mise à jour : Juin 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
