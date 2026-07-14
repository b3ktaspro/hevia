import { useEffect, useRef } from "react";

const zones = [
  {
    number: "01",
    title: "Béziers & Montpellier",
    text: "Livraisons rapides et accompagnement privilégié pour vos projets locaux.",
  },
  {
    number: "02",
    title: "Occitanie",
    text: "Nous assurons la livraison de nos collections dans toute la région.",
  },
  {
    number: "03",
    title: "France",
    text: "Expédition nationale sur demande avec étude personnalisée.",
  },
];

export default function DeliverySection() {
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
    <section className="py-20 sm:py-24 md:py-32 lg:py-44 bg-[#F8F5F1]">
      <div
        ref={ref}
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
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
              tracking-[0.25em]
              sm:tracking-[0.35em]
              text-[10px]
              sm:text-xs
              text-[#CBA18B]
              font-medium
            "
          >
            Logistique
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
            Livraison &<span className="text-[#CBA18B]"> disponibilité</span>
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
            Chaque commande bénéficie d’un suivi rigoureux, d’une préparation
            soignée et d’une logistique adaptée afin de garantir une réception
            dans les meilleures conditions.
          </p>
        </div>

        <div
          className="
            mt-12
            sm:mt-16
            lg:mt-24
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {zones.map((zone) => (
            <div
              key={zone.number}
              className="
                relative
                bg-white
                rounded-[24px]
                sm:rounded-[30px]
                lg:rounded-[36px]
                p-6
                sm:p-8
                lg:p-10
                border
                border-[#CBA18B]/10
                shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-1
                lg:hover:-translate-y-2
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
                  sm:text-6xl
                  lg:text-7xl
                  font-bold
                  text-[#CBA18B]/10
                  select-none
                "
              >
                {zone.number}
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
                {zone.number}
              </div>

              <h3
                className="
                  mt-6
                  sm:mt-8
                  text-xl
                  sm:text-2xl
                  font-light
                  text-[#1E2A38]
                "
              >
                {zone.title}
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
                {zone.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-14
            sm:mt-20
            lg:mt-24
            bg-[#322D28]
            rounded-[28px]
            sm:rounded-[36px]
            lg:rounded-[40px]
            px-6
            sm:px-10
            md:px-14
            py-10
            sm:py-14
            md:py-16
            text-center
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
            Engagement HEVIA
          </span>

          <h3
            className="
              mt-4
              sm:mt-6
              text-[28px]
              sm:text-4xl
              md:text-5xl
              font-light
              text-white
              leading-tight
            "
          >
            Une logistique pensée
            <br className="hidden sm:block" />
            pour la sérénité
          </h3>

          <p
            className="
              mt-6
              sm:mt-8
              max-w-3xl
              mx-auto
              text-sm
              sm:text-base
              text-white/70
              leading-relaxed
            "
          >
            Préparation minutieuse, protection des matériaux, suivi personnalisé
            et accompagnement jusqu’à la livraison : nous accordons autant
            d’importance au transport qu’à la qualité des collections que nous
            sélectionnons.
          </p>
        </div>
      </div>
    </section>
  );
}
