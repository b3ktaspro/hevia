import { useEffect, useRef } from "react";
import img from "/images/home/acceuil_home5.jpg";

export default function Banner() {
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
        relative
        h-[55vh]
        sm:h-[60vh]
        lg:h-[75vh]
        min-h-[420px]
        sm:min-h-[500px]
        lg:min-h-[600px]
        overflow-hidden
        flex
        items-center
        justify-center
        opacity-0
        translate-y-12
        transition-all
        duration-1000
      "
    >
      <img
        src={img}
        alt="HEVIA"
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          scale-110
        "
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <span
          className="
            inline-block
            text-[#CBA18B]
            uppercase
            tracking-[0.25em]
            sm:tracking-[0.35em]
            text-[10px]
            sm:text-xs
            font-medium
          "
        >
          Maison HEVIA
        </span>

        <h2
          className="
            mt-5
            sm:mt-8
            text-[34px]
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            font-light
            text-white
            leading-[1.05]
            max-w-5xl
            mx-auto
          "
        >
          Des matériaux conçus
          <br />
          <span className="text-[#CBA18B]">pour traverser le temps</span>
        </h2>

        <p
          className="
            mt-6
            sm:mt-8
            lg:mt-10
            max-w-3xl
            mx-auto
            text-sm
            sm:text-base
            lg:text-xl
            text-white/75
            leading-relaxed
          "
        >
          Chaque collection est sélectionnée pour son esthétique, sa durabilité
          et sa capacité à sublimer les espaces contemporains comme les projets
          les plus ambitieux.
        </p>

        <div
          className="
            mt-8
            sm:mt-10
            lg:mt-14
            flex
            justify-center
          "
        >
          <div
            className="
              w-16
              sm:w-20
              lg:w-24
              h-px
              bg-[#CBA18B]
            "
          />
        </div>
      </div>
    </section>
  );
}
