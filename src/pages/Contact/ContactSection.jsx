import {
  FaInstagram,
  FaFacebookF,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-[#F8F5F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          className="
            flex
            flex-col
            lg:flex-row
            lg:items-end
            lg:justify-between
            gap-12
            lg:gap-20
          "
        >
          <div className="max-w-2xl">
            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#CBA18B]
              "
            >
              Contact
            </span>

            <h2
              className="
                mt-5
                text-[42px]
                sm:text-6xl
                lg:text-7xl
                font-light
                leading-[0.95]
                text-[#1E2A38]
              "
            >
              Parlons de votre
              <span className="text-[#CBA18B]"> projet</span>
            </h2>

            <p
              className="
                mt-8
                text-[#1E2A38]/70
                text-base
                sm:text-lg
                leading-relaxed
                max-w-xl
              "
            >
              Une rénovation, un aménagement intérieur ou un projet extérieur ?
              Nous vous accompagnons dans le choix des matériaux afin de créer
              des espaces élégants, durables et adaptés à votre vision.
            </p>
          </div>

          <a
            href="mailto:contact@hevia.fr"
            className="
              group
              inline-flex
              items-center
              gap-4

              px-8
              py-4

              rounded-full

              bg-[#1E2A38]
              text-white

              text-sm
              sm:text-base
              font-medium

              transition-all
              duration-500

              hover:bg-[#CBA18B]
              hover:text-[#1E2A38]
            "
          >
            Demander un devis
            <FaArrowRight
              className="
                transition-transform
                duration-500
                group-hover:translate-x-1
              "
            />
          </a>
        </div>

        <div
          className="
            mt-14
            lg:mt-20

            h-px

            bg-gradient-to-r
            from-transparent
            via-[#CBA18B]/30
            to-transparent
          "
        />

        <div
          className="
            mt-14
            lg:mt-20

            grid
            lg:grid-cols-[0.75fr_1.25fr]

            gap-8
            lg:gap-12
          "
        >
          <div>
            <div className="space-y-10">
              <div>
                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[11px]
                    text-[#CBA18B]
                  "
                >
                  Email
                </span>

                <a
                  href="mailto:contact@hevia.fr"
                  className="
                    block
                    mt-3

                    text-[#1E2A38]
                    text-lg
                    sm:text-xl

                    hover:text-[#CBA18B]
                    transition-colors
                  "
                >
                  contact@hevia.fr
                </a>
              </div>

              <div>
                <span
                  className="
                    uppercase
                    tracking-[0.25em]
                    text-[11px]
                    text-[#CBA18B]
                  "
                >
                  Showroom
                </span>

                <p
                  className="
                    mt-3

                    text-[#1E2A38]
                    text-lg
                    sm:text-xl

                    leading-relaxed
                  "
                >
                  Béziers
                  <br />
                  Occitanie, France
                </p>
              </div>
            </div>

            <div
              className="
                flex
                gap-4
                mt-12
              "
            >
              <a
                href="https://www.instagram.com/maison.hevia/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  border
                  border-[#1E2A38]/10

                  flex
                  items-center
                  justify-center

                  text-[#1E2A38]

                  transition-all
                  duration-300

                  hover:bg-[#CBA18B]
                  hover:border-[#CBA18B]
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61580245243798"
                target="_blank"
                rel="noreferrer"
                className="
                  w-12
                  h-12

                  rounded-full

                  border
                  border-[#1E2A38]/10

                  flex
                  items-center
                  justify-center

                  text-[#1E2A38]

                  transition-all
                  duration-300

                  hover:bg-[#CBA18B]
                  hover:border-[#CBA18B]
                "
              >
                <FaFacebookF />
              </a>
            </div>
          </div>

          <div
            className="
              overflow-hidden

              rounded-[28px]
              sm:rounded-[40px]

              h-[380px]
              sm:h-[500px]
              lg:h-[620px]

              shadow-[0_25px_80px_rgba(0,0,0,0.08)]
            "
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2902.2808593245772!2d3.2491368!3d43.3293116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b10f31c4f3b415%3A0xd51acd6459037621!2sHEVIA%20B%C3%A9ziers%20-%20Maison%2C%20Vie%20%26%20Ext%C3%A9rieur!5e0!3m2!1sfr!2sfr!4v1780756872315!5m2!1sfr!2sfr"
              className="
                w-full
                h-full
                border-0
              "
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
