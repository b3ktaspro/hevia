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
    <section className="pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-32 bg-[#F8F5F1]">

      <div
        ref={ref}
        className="
          max-w-6xl
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
            rounded-[24px]
            sm:rounded-[30px]
            lg:rounded-[40px]
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
                md:p-10
                lg:p-14
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
                  sm:mt-5
                  text-[32px]
                  sm:text-4xl
                  md:text-5xl
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
                  mt-5
                  sm:mt-6
                  text-sm
                  sm:text-base
                  text-white/70
                  leading-relaxed
                  max-w-lg
                "
              >
                Une question, une demande de devis ou un projet
                en préparation ? Notre équipe est disponible
                pour vous accompagner dans le choix de vos matériaux.
              </p>

              <div
                className="
                  mt-8
                  sm:mt-10
                  space-y-5
                  sm:space-y-6
                "
              >

                <div className="flex gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      sm:w-12
                      sm:h-12
                      rounded-full
                      bg-[#CBA18B]
                      flex
                      items-center
                      justify-center
                      text-[#1E2A38]
                      shrink-0
                    "
                  >
                    <FaPhoneAlt />
                  </div>

                  <div>

                    <p className="text-white/50 text-xs sm:text-sm">
                      Téléphone
                    </p>

                    <a
                      href="tel:"
                      className="
                        text-white
                        text-sm
                        sm:text-base
                      "
                    >
                      07 XX XX XX XX
                    </a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      sm:w-12
                      sm:h-12
                      rounded-full
                      bg-[#CBA18B]
                      flex
                      items-center
                      justify-center
                      text-[#1E2A38]
                      shrink-0
                    "
                  >
                    <FaEnvelope />
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
                        sm:text-base
                        break-all
                      "
                    >
                      contact@hevia.fr
                    </a>

                  </div>

                </div>

                <div className="flex gap-4">

                  <div
                    className="
                      w-11
                      h-11
                      sm:w-12
                      sm:h-12
                      rounded-full
                      bg-[#CBA18B]
                      flex
                      items-center
                      justify-center
                      text-[#1E2A38]
                      shrink-0
                    "
                  >
                    <FaMapMarkerAlt />
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
                  mt-8
                  sm:mt-10
                "
              >

                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
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
                    w-10
                    h-10
                    sm:w-11
                    sm:h-11
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
    h-[280px]
    sm:h-[360px]
    md:h-[450px]
    lg:min-h-[620px]
    bg-[#2B2622]
    relative
    overflow-hidden
  "
>

  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92442.5267766341!2d3.791596750833308!3d43.61010273155888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6af0725dd9db1%3A0xad8756742894e802!2sMontpellier!5e0!3m2!1sfr!2sfr!4v1776973329149!5m2!1sfr!2sfr"
    className="
      absolute
      inset-0
      w-full
      h-full
      border-0
    "
    loading="eager"
    referrerPolicy="no-referrer-when-downgrade"
  />

</div>

          </div>

        </div>

      </div>

    </section>
  )
}