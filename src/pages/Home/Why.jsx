import { useEffect, useRef } from "react";

const features = [
  {
    number: "01",
    title: "Qualité supérieure",
    text: "Nous sélectionnons exclusivement des collections issues de fabricants reconnus pour leur savoir-faire, leur durabilité et l'excellence de leurs finitions.",
  },
  {
    number: "02",
    title: "Design & Élégance",
    text: "Des matériaux inspirés de l'architecture contemporaine, pensés pour traverser les tendances et valoriser durablement chaque espace.",
  },
  {
    number: "03",
    title: "Accompagnement sur mesure",
    text: "De la sélection des matériaux jusqu'à la concrétisation de votre projet, nous vous accompagnons avec attention et expertise.",
  },
];

export default function Why() {
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
    <section className="py-20 sm:py-28 lg:py-40 bg-[#F8F5F1]">
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
        <div className="max-w-4xl mx-auto text-center">
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
            Pourquoi HEVIA
          </span>

          <h2
            className="
              mt-4
              sm:mt-6
              text-[32px]
              sm:text-5xl
              lg:text-6xl
              font-light
              text-[#1E2A38]
              leading-tight
            "
          >
            Plus qu'un simple
            <span className="text-[#CBA18B]"> carrelage</span>
          </h2>

          <p
            className="
              mt-5
              sm:mt-8
              text-sm
              sm:text-lg
              text-[#1E2A38]/70
              leading-relaxed
              max-w-3xl
              mx-auto
            "
          >
            Chez HEVIA, nous considérons chaque matériau comme un élément
            essentiel de l'identité d'un espace. Notre approche repose sur
            l'exigence, le design et l'accompagnement personnalisé.
          </p>
        </div>

        <div
          className="
            mt-10
            sm:mt-16
            lg:mt-24
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5
            sm:gap-6
            lg:gap-8
          "
        >
          {features.map((feature) => (
            <div
              key={feature.number}
              className="
                relative
                bg-white
                rounded-[24px]
                sm:rounded-[30px]
                lg:rounded-[36px]
                p-5
                sm:p-8
                lg:p-10
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
                {feature.number}
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
                {feature.number}
              </div>

              <h3
                className="
                  mt-5
                  sm:mt-8
                  text-xl
                  sm:text-2xl
                  font-light
                  text-[#1E2A38]
                "
              >
                {feature.title}
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
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div
          className="
            mt-12
            sm:mt-20
            lg:mt-24
            flex
            justify-center
          "
        >
          <div
            className="
              grid
              grid-cols-3
              gap-6
              sm:gap-12
              lg:gap-20
              text-center
            "
          >
            <div>
              <div
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-light
                  text-[#1E2A38]
                "
              >
                100+
              </div>

              <p
                className="
                  mt-2
                  text-[11px]
                  sm:text-sm
                  text-[#1E2A38]/60
                "
              >
                Références
              </p>
            </div>

            <div>
              <div
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-light
                  text-[#1E2A38]
                "
              >
                10+
              </div>

              <p
                className="
                  mt-2
                  text-[11px]
                  sm:text-sm
                  text-[#1E2A38]/60
                "
              >
                Collections
              </p>
            </div>

            <div>
              <div
                className="
                  text-3xl
                  sm:text-4xl
                  lg:text-5xl
                  font-light
                  text-[#1E2A38]
                "
              >
                100%
              </div>

              <p
                className="
                  mt-2
                  text-[11px]
                  sm:text-sm
                  text-[#1E2A38]/60
                "
              >
                Sélectionnées
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
