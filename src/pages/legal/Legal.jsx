import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Legal() {
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
            Informations légales
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
            Mentions
            <span className="text-[#CBA18B]"> légales</span>
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
            Conformément aux dispositions de la loi n°2004-575 du 21 juin 2004
            pour la confiance dans l’économie numérique (LCEN), voici les
            informations légales relatives au site HEVIA.
          </p>
        </div>

        <div className="mt-10 sm:mt-16 space-y-5 sm:space-y-8">
          {[
            {
              title: "1. Éditeur du site",
              content: (
                <>
                  Le site est édité par :
                  <br />
                  <br />
                  <strong>HEVIA</strong>
                  <br />
                  Siège social : 2 Rue ///, 34000 Montpellier
                  <br />
                  Téléphone : 06 *******
                  <br />
                  Email : contact@gmail.com
                  <br />
                  Responsable de publication : HEVIA
                </>
              ),
            },
            {
              title: "2. Hébergement",
              content: (
                <>
                  Le site est hébergé par :
                  <br />
                  <br />
                  <strong>Netlify, Inc.</strong>
                  <br />
                  2325 3rd Street, Suite 215
                  <br />
                  San Francisco, CA 94107
                  <br />
                  États-Unis
                </>
              ),
            },
            {
              title: "3. Conception et développement",
              content:
                "Design, développement et intégration réalisés pour HEVIA dans le cadre du développement du site internet.",
            },
            {
              title: "4. Propriété intellectuelle",
              content:
                "Tous les contenus présents sur le site (textes, images, logos, visuels, éléments graphiques et code source) sont protégés par le droit d’auteur. Toute reproduction est interdite sans autorisation préalable.",
            },
            {
              title: "5. Données personnelles",
              content: (
                <>
                  Les informations collectées via le site font l’objet d’un
                  traitement conforme au RGPD.
                  <br />
                  Consultez notre{" "}
                  <Link
                    to="/privacy"
                    className="text-[#CBA18B] hover:underline"
                  >
                    politique de confidentialité
                  </Link>
                  .
                </>
              ),
            },
            {
              title: "6. Liens externes",
              content:
                "Le site peut contenir des liens vers des services tiers. HEVIA ne peut être tenue responsable du contenu ou du fonctionnement de ces sites externes.",
            },
            {
              title: "7. Responsabilité",
              content:
                "Malgré le soin apporté à la rédaction des contenus, certaines informations peuvent comporter des erreurs ou omissions. L’utilisateur reste responsable de l’usage qu’il fait du site.",
            },
            {
              title: "8. Droit applicable",
              content:
                "Le présent site est soumis au droit français. Tout litige sera soumis aux juridictions compétentes du ressort du siège social de HEVIA.",
            },
          ].map((item) => (
            <div
              key={item.title}
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
              <h2
                className="
                  text-lg
                  sm:text-xl
                  lg:text-2xl
                  font-medium
                  text-[#1E2A38]
                "
              >
                {item.title}
              </h2>

              <div
                className="
                  mt-4
                  text-sm
                  sm:text-base
                  text-[#2B2B2B]/80
                  leading-relaxed
                "
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
