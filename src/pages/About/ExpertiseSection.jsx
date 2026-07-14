import { useEffect, useRef } from "react";
import imgMain from "/images/home/apropos_home2.jpg";
import logo from "/images/logo/logo-hevia.jpg";

export default function ExpertiseSection() {
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
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >
          <div className="order-2 lg:order-1">
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
              Savoir-faire HEVIA
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
              L’expertise &<span className="text-[#CBA18B]"> l’innovation</span>
            </h2>

            <p
              className="
                mt-6
                sm:mt-8
                text-sm
                sm:text-base
                lg:text-lg
                text-[#2B2B2B]/75
                leading-relaxed
              "
            >
              Chez
              <span className="font-semibold text-[#85796D]"> HEVIA</span>, nous
              mettons notre savoir-faire au service de projets modernes et
              durables. Chaque choix, chaque matériau est pensé pour allier
              qualité, esthétisme et innovation.
            </p>

            <p
              className="
                mt-5
                sm:mt-6
                text-sm
                sm:text-base
                lg:text-lg
                text-[#2B2B2B]/75
                leading-relaxed
              "
            >
              Nos solutions vont au-delà du carrelage. Nous proposons des
              inspirations, des conseils personnalisés et des collections
              sélectionnées pour transformer durablement vos espaces.
            </p>

            <div
              className="
                mt-10
                sm:mt-12
                grid
                grid-cols-3
                gap-4
                sm:gap-6
              "
            >
              <div>
                <div
                  className="
                    text-2xl
                    sm:text-4xl
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
                    text-2xl
                    sm:text-4xl
                    font-light
                    text-[#1E2A38]
                  "
                >
                  Premium
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
                    text-2xl
                    sm:text-4xl
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
                  Sélection
                </p>
              </div>
            </div>
          </div>

          <div
            className="
              order-1
              lg:order-2
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            <div className="relative">
              <div
                className="
                  absolute
                  -top-6
                  -left-4
                  sm:-top-8
                  sm:-left-8
                  text-6xl
                  sm:text-8xl
                  font-bold
                  text-[#CBA18B]/10
                  select-none
                "
              >
                04
              </div>

              <img
                src={imgMain}
                alt="Expertise HEVIA"
                className="
                  w-[260px]
                  sm:w-[340px]
                  md:w-[420px]
                  lg:w-[440px]
                  h-[340px]
                  sm:h-[450px]
                  md:h-[520px]
                  object-cover
                  rounded-[28px]
                  sm:rounded-[36px]
                  border-4
                  border-[#CBA18B]
                  shadow-[0_25px_80px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-700
                  hover:scale-[1.02]
                "
              />

              <img
                src={logo}
                alt="Logo HEVIA"
                className="
                  absolute
                  -bottom-5
                  -right-5
                  sm:-bottom-8
                  sm:-right-8
                  w-24
                  h-24
                  sm:w-32
                  sm:h-32
                  md:w-40
                  md:h-40
                  object-cover
                  rounded-[22px]
                  sm:rounded-[28px]
                  border-4
                  border-white
                  shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                  bg-white
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
