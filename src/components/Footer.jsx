import { Link } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-white">

      <div className="border-b border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-20">

          <div className="max-w-4xl">

            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-[#CBA18B]
              "
            >
              Maison HEVIA
            </span>

            <h2
              className="
                mt-6
                text-4xl
                md:text-6xl
                font-light
                leading-tight
              "
            >
              Donnons vie à vos
              <span className="text-[#CBA18B]">
                {" "}projets
              </span>
            </h2>

            <p
              className="
                mt-8
                text-white/60
                leading-relaxed
                max-w-2xl
              "
            >
              Découvrez des collections sélectionnées pour leur élégance,
              leur durabilité et leur capacité à sublimer durablement
              vos espaces.
            </p>

            <Link
              to="/contact"
              className="
                inline-flex
                mt-10
                px-8
                py-4
                rounded-full
                bg-[#CBA18B]
                text-[#1E2A38]
                font-medium
                transition-all
                duration-500
                hover:scale-105
              "
            >
              Nous contacter
            </Link>

          </div>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 gap-14">

          <div>

            <h3
              className="
                text-2xl
                font-medium
                tracking-[0.25em]
                uppercase
              "
            >
              HEVIA
            </h3>

            <p
              className="
                mt-6
                text-white/60
                leading-relaxed
              "
            >
              Carrelages et matériaux
              haut de gamme sélectionnés
              pour les projets résidentiels
              et professionnels.
            </p>

          </div>

          <div>

            <h4
              className="
                text-[#CBA18B]
                uppercase
                tracking-[0.25em]
                text-xs
                mb-6
              "
            >
              Navigation
            </h4>

            <ul className="space-y-4 text-white/60">

              <li>
                <Link
                  to="/"
                  className="hover:text-[#CBA18B] transition"
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/collections"
                  className="hover:text-[#CBA18B] transition"
                >
                  Collections
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-[#CBA18B] transition"
                >
                  À propos
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#CBA18B] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          <div>

            <h4
              className="
                text-[#CBA18B]
                uppercase
                tracking-[0.25em]
                text-xs
                mb-6
              "
            >
              Contact
            </h4>

            <div className="space-y-4 text-white/60">

              <p>Béziers • France</p>

              <p>contact@hevia.fr</p>

              <p>+33 7 XX XX XX XX</p>

            </div>

          </div>

          <div>

            <h4
              className="
                text-[#CBA18B]
                uppercase
                tracking-[0.25em]
                text-xs
                mb-6
              "
            >
              Réseaux
            </h4>

            <div className="flex gap-3">

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
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
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
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

        </div>

      </div>

      <div className="border-t border-white/10">

        <div
          className="
            max-w-7xl
            mx-auto
            px-6
            py-8
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-6
          "
        >

          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} HEVIA — Tous droits réservés
          </p>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-8
              text-sm
              text-white/40
            "
          >

            <Link
              to="/legal"
              className="hover:text-[#CBA18B] transition"
            >
              Mentions légales
            </Link>

            <Link
              to="/privacy"
              className="hover:text-[#CBA18B] transition"
            >
              Confidentialité
            </Link>

            <Link
              to="/terms"
              className="hover:text-[#CBA18B] transition"
            >
              Conditions générales
            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}