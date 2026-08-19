import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img from "/images/home/acceuil_home5.jpg";

export default function Catalogue() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-y-12");
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
    <section
      ref={ref}
      className="
        py-20
        sm:py-28
        lg:py-40
        bg-[#F8F5F1]
        opacity-0
        translate-y-12
        transition-all
        duration-1000
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
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
            Collections
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
            Explorez notre
            <span className="text-[#CBA18B]"> univers carrelage</span>
          </h2>

          <p
            className="
              mt-5
              sm:mt-8
              text-sm
              sm:text-base
              text-[#1E2A38]/70
              leading-relaxed
            "
          >
            Une sélection de collections inspirées par les matières naturelles,
            l’architecture contemporaine et l’excellence des finitions.
          </p>
        </div>

        <div
          className="
            mt-10
            sm:mt-16
            lg:mt-24
            grid
            xl:grid-cols-[1.45fr_0.85fr]
            gap-6
            lg:gap-10
            items-stretch
          "
        >
          <div
            className="
              relative
              overflow-hidden
              rounded-[28px]
              sm:rounded-[40px]
              group
              min-h-[420px]
              sm:min-h-[550px]
              lg:min-h-[650px]
            "
          >
            <img
              src={img}
              alt="Catalogue HEVIA"
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                transition-all
                duration-[1800ms]
                group-hover:scale-110
              "
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div
              className="
                relative
                z-10
                h-full
                flex
                flex-col
                justify-end
                p-6
                sm:p-10
                lg:p-12
              "
            >
              <span
                className="
                  uppercase
                  tracking-[0.22em]
                  sm:tracking-[0.3em]
                  text-[10px]
                  sm:text-xs
                  text-[#CBA18B]
                "
              >
                Signature Collection
              </span>

              <h3
                className="
                  mt-4
                  sm:mt-5
                  text-3xl
                  sm:text-5xl
                  lg:text-6xl
                  font-light
                  text-white
                  leading-[1]
                  max-w-3xl
                "
              >
                L'art du
                <br />
                design minéral
              </h3>

              <p
                className="
                  mt-4
                  sm:mt-6
                  text-sm
                  sm:text-base
                  text-white/75
                  max-w-xl
                  leading-relaxed
                "
              >
                Des collections inspirées de la pierre, du marbre, du bois et
                des matières naturelles les plus élégantes.
              </p>

              <div className="mt-6 sm:mt-10">
                <Link
                  to="/collections"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    w-full
                    sm:w-auto
                    px-6
                    sm:px-8
                    py-3.5
                    sm:py-4
                    rounded-full
                    bg-[#CBA18B]
                    text-[#1E2A38]
                    text-sm
                    sm:text-base
                    font-medium
                    transition-all
                    duration-500
                    hover:scale-105
                  "
                >
                  Découvrir le catalogue
                </Link>
              </div>
            </div>
          </div>

          <div
            className="
              bg-white
              rounded-[28px]
              sm:rounded-[40px]
              p-6
              sm:p-8
              lg:p-12
              border
              border-[#CBA18B]/10
              shadow-[0_10px_40px_rgba(0,0,0,0.04)]
              flex
              flex-col
              justify-center
            "
          >
            <span
              className="
                text-[#CBA18B]
                uppercase
                tracking-[0.22em]
                sm:tracking-[0.3em]
                text-[10px]
                sm:text-xs
                font-medium
              "
            >
              HEVIA
            </span>

            <h4
              className="
                mt-4
                sm:mt-6
                text-2xl
                sm:text-3xl
                lg:text-4xl
                font-light
                text-[#1E2A38]
                leading-tight
              "
            >
              Des produits d'exception
            </h4>

            <p
              className="
                mt-4
                sm:mt-6
                text-sm
                sm:text-base
                text-[#1E2A38]/70
                leading-relaxed
              "
            >
              Chaque collection est sélectionnée pour son esthétique, sa
              durabilité et sa capacité à valoriser durablement vos espaces.
            </p>

            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
              {[
                "Carrelages intérieurs & extérieurs",
                "Effets marbre, pierre, bois et béton",
                "Grand format & dalles contemporaines",
                "Solutions pour cuisines & salles de bain",
                "Terrasses, piscines et extérieurs",
                "Conseils personnalisés",
                "Produits durables et faciles d’entretien",
              ].map((item) => (
                <div
                  key={item}
                  className="
                    flex
                    items-start
                    gap-3
                    sm:gap-4
                  "
                >
                  <div
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#CBA18B]
                      mt-2
                      shrink-0
                    "
                  />

                  <span
                    className="
                      text-sm
                      sm:text-base
                      text-[#1E2A38]/80
                      leading-relaxed
                    "
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
