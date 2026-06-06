import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"

import logo from "/images/logo/logo-hevia.jpg"

const links = [
  { name: "Accueil", path: "/" },
  { name: "Collections", path: "/collections" },
  { name: "Inspiration", path: "/inspiration" },
  { name: "Réalisations", path: "/realisations" },
  { name: "À propos", path: "/about" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [menuOpen])

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[1000]">

        <nav
          className={`
            relative
            mt-5
            mx-auto
            w-[94%]
            lg:w-[88%]
            max-w-7xl
            rounded-[24px]
            transition-all
            duration-500
            ${
              scrolled
                ? `
                  bg-[#ECE6DF]/82
                  backdrop-blur-2xl
                  border
                  border-[#CBA18B]/15
                  shadow-[0_15px_50px_rgba(0,0,0,0.06)]
                `
                : `
                  bg-white/8
                  backdrop-blur-xl
                  border
                  border-white/10
                `
            }
          `}
        >

          <div className="px-6 lg:px-10 h-[76px] flex items-center justify-between">

            <Link
              to="/"
              className="flex items-center gap-4"
            >

              <img
                src={logo}
                alt="HEVIA"
                className="
                  w-14
                  h-14
                  rounded-[16px]
                  object-cover
                "
              />

              <div className="hidden md:block">

                <div
                  className="
                    text-[#1E2A38]
                    text-sm
                    tracking-[0.35em]
                    uppercase
                    font-medium
                  "
                >
                  HEVIA
                </div>

                <div
                  className="
                    text-[11px]
                    text-[#1E2A38]/50
                    tracking-[0.25em]
                    uppercase
                  "
                >
                  Béziers
                </div>

              </div>

            </Link>

            <ul
              className="
                hidden
                lg:flex
                items-center
                gap-12
                text-sm
                tracking-wide
              "
            >

              {links.map((link) => (
                <li key={link.path}>

                  <Link
                    to={link.path}
                    className={`
                      relative
                      transition-all
                      duration-300
                      ${
                        location.pathname === link.path
                          ? "text-[#CBA18B]"
                          : "text-[#1E2A38] hover:text-[#CBA18B]"
                      }
                    `}
                  >

                    {link.name}

                    {location.pathname === link.path && (
                      <span
                        className="
                          absolute
                          -bottom-2
                          left-0
                          w-full
                          h-px
                          bg-[#CBA18B]
                        "
                      />
                    )}

                  </Link>

                </li>
              ))}

            </ul>

            <div className="hidden lg:flex items-center">

              <Link
                to="/contact"
                className="
                  bg-[#1E2A38]
                  text-white
                  px-7
                  py-3
                  rounded-[14px]
                  font-medium
                  transition-all
                  duration-500
                  hover:bg-[#CBA18B]
                  hover:text-[#1E2A38]
                  hover:-translate-y-0.5
                "
              >
                Demander un devis
              </Link>

            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                relative
                w-10
                h-10
                flex
                items-center
                justify-center
              "
            >

              <span
                className={`
                  absolute
                  w-7
                  h-[2px]
                  bg-[#1E2A38]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "rotate-45"
                      : "-translate-y-2"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  w-7
                  h-[2px]
                  bg-[#1E2A38]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "opacity-0"
                      : "opacity-100"
                  }
                `}
              />

              <span
                className={`
                  absolute
                  w-7
                  h-[2px]
                  bg-[#1E2A38]
                  transition-all
                  duration-300
                  ${
                    menuOpen
                      ? "-rotate-45"
                      : "translate-y-2"
                  }
                `}
              />

            </button>

          </div>

        </nav>

      </header>

      <div
        className={`
          fixed
          inset-0
          z-[999]
          bg-[#F8F5F1]
          transition-all
          duration-500
          flex
          flex-col
          justify-center
          px-10
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        <div className="space-y-8">

          {links.map((link, index) => (

            <Link
              key={link.path}
              to={link.path}
              className="
                flex
                items-center
                gap-6
                text-[#1E2A38]
                hover:text-[#CBA18B]
                transition-all
              "
            >

              <span
                className="
                  text-[#CBA18B]
                  text-sm
                  tracking-[0.3em]
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span
                className="
                  text-4xl
                  font-light
                "
              >
                {link.name}
              </span>

            </Link>

          ))}

        </div>

        <Link
          to="/contact"
          className="
            mt-14
            inline-flex
            w-fit
            px-8
            py-4
            rounded-full
            bg-[#1E2A38]
            text-white
            font-medium
          "
        >
          Demander un devis
        </Link>

        <div className="flex gap-4 mt-12">

          <a
            href="https://www.instagram.com/maison.hevia/"
            target="_blank"
            rel="noreferrer"
            className="
              w-12
              h-12
              rounded-full
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              text-[#1E2A38]
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
              bg-white
              shadow-md
              flex
              items-center
              justify-center
              text-[#1E2A38]
            "
          >
            <FaFacebookF />
          </a>

        </div>

      </div>
    </>
  )
}