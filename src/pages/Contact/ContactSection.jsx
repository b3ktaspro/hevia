import { useEffect, useRef } from "react"
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa"

export default function ContactSection() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current

    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove(
            "opacity-0",
            "translate-y-12"
          )

          el.classList.add(
            "opacity-100",
            "translate-y-0"
          )
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
            bg-[#322D28]
            rounded-[28px]
            sm:rounded-[36px]
            lg:rounded-[48px]
            overflow-hidden
          "
        >

          <div
            className="
              grid
              lg:grid-cols-[0.95fr_1.05fr]
            "
          >

            <div
              className="
                p-6
                sm:p-8
                md:p-12
                lg:p-20
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
                Contact
              </span>

              <h2
                className="
                  mt-4
                  sm:mt-6
                  text-[34px]
                  sm:text-5xl
                  md:text-6xl
                  font-light
                  text-white
                  leading-[1.05]
                "
              >
                Parlons de votre
                <span className="text-[#CBA18B]">
                  {" "}projet
                </span>
              </h2>

              <p
                className="
                  mt-6
                  sm:mt-8
                  text-sm
                  sm:text-base
                  lg:text-lg
                  text-white/70
                  leading-relaxed
                  max-w-xl
                "
              >
                Une question, une demande de devis ou un projet
                en préparation ? Notre équipe est disponible
                pour vous accompagner dans le choix de vos matériaux.
              </p>

              <div
                className="
                  mt-10
                  sm:mt-14
                  space-y-6
                  sm:space-y-8
                "
              >

                <div className="flex gap-4 sm:gap-5">

                  <div
                    className="
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-full
                      bg-[#CBA18B]
                      flex
                      items-center
                      justify-center
                      text-[#1E2A38]
                      shrink-0
                    "
                  >
                    <FaPhoneAlt className="text-sm sm:text-base" />
                  </div>

                  <div>

                    <p className="text-white/50 text-xs sm:text-sm">
                      Téléphone
                    </p>

                    <a
                      href="tel:"
                      className="
                        text-white
                        text-base
                        sm:text-lg
                      "
                    >
                      07 XX XX XX XX
                    </a>

                  </div>

                </div>

                <div className="flex gap-4 sm:gap-5">

                  <div
                    className="
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-full
                      bg-[#CBA18B]
                      flex
                      items-center
                      justify-center
                      text-[#1E2A38]
                      shrink-0
                    "
                  >
                    <FaEnvelope className="text-sm sm:text-base" />
                  </div>

                  <div>

                    <p className="text-white/50 text-xs sm:text-sm">
                      Email
                    </p>

                    <a
                      href="mailto:contact@hevia.fr"
                      className="
                        text-white
                        text-sm
                        sm:text-lg
                        break-all
                      "
                    >
                      contact@hevia.fr
                    </a>

                  </div>

                </div>

                <div className="flex gap-4 sm:gap-5">

                  <div
                    className="
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
                      rounded-full
                      bg-[#CBA18B]
                      flex
                      items-center
                      justify-center
                      text-[#1E2A38]
                      shrink-0
                    "
                  >
                    <FaMapMarkerAlt className="text-sm sm:text-base" />
                  </div>

                  <div>

                    <p className="text-white/50 text-xs sm:text-sm">
                      Adresse
                    </p>

                    <p
                      className="
                        text-white
                        text-sm
                        sm:text-base
                        leading-relaxed
                      "
                    >
                      Béziers
                      <br />
                      Occitanie, France
                    </p>

                  </div>

                </div>

              </div>

              <div
                className="
                  flex
                  gap-3
                  mt-10
                  sm:mt-12
                "
              >

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/70
                    transition-all
                    duration-300
                    hover:bg-[#CBA18B]
                    hover:text-[#1E2A38]
                    hover:border-[#CBA18B]
                  "
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-11
                    h-11
                    sm:w-12
                    sm:h-12
                    rounded-full
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-white/70
                    transition-all
                    duration-300
                    hover:bg-[#CBA18B]
                    hover:text-[#1E2A38]
                    hover:border-[#CBA18B]
                  "
                >
                  <FaFacebookF />
                </a>

              </div>

            </div>

            <div
              className="
                h-[320px]
                sm:h-[420px]
                md:h-[520px]
                lg:min-h-[700px]
              "
            >

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92442.5267766341!2d3.791596750833308!3d43.61010273155888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0xad8756742894e802!2sMontpellier!5e0!3m2!1sfr!2sfr!4v1776973329149!5m2!1sfr!2sfr"
                className="
                  w-full
                  h-full
                  border-0
                "
                loading="lazy"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}