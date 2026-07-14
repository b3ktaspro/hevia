import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import img1 from "/images/home/acceuil_home_1.jpg";
import img2 from "/images/home/acceuil_home_2.png";
import img3 from "/images/home/acceuil_home3.jpg";
import img4 from "/images/home/acceuil_home_4.jpg";

const collections = [
  {
    number: "01",
    title: "Tous nos carrelages",
    desc: "Découvrez l'ensemble de nos collections sélectionnées pour leur qualité et leur élégance.",
    img: img1,
    link: "/",
  },
  {
    number: "02",
    title: "Salle de bain",
    desc: "Des matériaux conçus pour créer des espaces raffinés et intemporels.",
    img: img2,
    link: "/",
  },
  {
    number: "03",
    title: "Extérieur",
    desc: "Résistance, esthétique et durabilité pour vos projets en plein air.",
    img: img3,
    link: "/",
  },
  {
    number: "04",
    title: "Piscine",
    desc: "Des finitions haut de gamme pensées pour les environnements les plus exigeants.",
    img: img4,
    link: "/",
  },
];

export default function CollectionsSection() {
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
            Explorez nos
            <span className="text-[#CBA18B]"> collections</span>
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
            Une sélection pensée pour répondre aux projets les plus exigeants,
            entre design contemporain et qualité durable.
          </p>
        </div>

        <div
          ref={ref}
          className="
            mt-10
            sm:mt-16
            lg:mt-24
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-4
            gap-5
            sm:gap-6
            lg:gap-8
            opacity-0
            translate-y-12
            transition-all
            duration-1000
          "
        >
          {collections.map((item) => (
            <Link
              key={item.number}
              to={item.link}
              className="
                group
                relative
                overflow-hidden
                rounded-[26px]
                sm:rounded-[32px]
                lg:rounded-[36px]
                h-[340px]
                sm:h-[430px]
                lg:h-[520px]
              "
            >
              <img
                src={item.img}
                alt={item.title}
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

              <div className="absolute inset-0 bg-black/30" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div
                className="
                  absolute
                  top-5
                  left-5
                  sm:top-7
                  sm:left-7
                  text-4xl
                  sm:text-5xl
                  lg:text-6xl
                  font-bold
                  text-white/10
                  select-none
                "
              >
                {item.number}
              </div>

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-5
                  sm:p-6
                  lg:p-8
                "
              >
                <span
                  className="
                    text-[#CBA18B]
                    text-[10px]
                    sm:text-xs
                    uppercase
                    tracking-[0.22em]
                    sm:tracking-[0.3em]
                  "
                >
                  Collection
                </span>

                <h3
                  className="
                    mt-3
                    text-2xl
                    sm:text-[28px]
                    lg:text-3xl
                    font-light
                    text-white
                    leading-tight
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    mt-3
                    text-white/70
                    leading-relaxed
                    text-xs
                    sm:text-sm
                    max-h-[80px]
                    sm:max-h-0
                    opacity-100
                    sm:opacity-0
                    overflow-hidden
                    transition-all
                    duration-500
                    sm:group-hover:max-h-32
                    sm:group-hover:opacity-100
                  "
                >
                  {item.desc}
                </p>

                <div
                  className="
                    mt-4
                    sm:mt-6
                    flex
                    items-center
                    gap-2
                    sm:gap-3
                    text-[#CBA18B]
                    text-xs
                    sm:text-sm
                    tracking-wide
                  "
                >
                  Découvrir
                  <span
                    className="
                      transition-transform
                      duration-500
                      group-hover:translate-x-2
                    "
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
