import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import logo from "/images/logo/logo-hevia.jpg"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navLink = (path) =>
    `relative transition-all duration-300 ${
      location.pathname === path
        ? "text-[#CBA18B]"
        : "text-[#1E2A38] hover:text-[#CBA18B]"
    }`

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <nav
        className={`
          relative
          mt-4
          mx-auto
          w-[94%]
          lg:w-[88%]
          max-w-7xl
          rounded-full
          border
          transition-all
          duration-500
          ${
            scrolled
              ? "bg-[#ECE6DF]/90 backdrop-blur-2xl border-[#CBA18B]/20 shadow-[0_15px_50px_rgba(0,0,0,0.08)]"
              : "bg-[#ECE6DF]/70 backdrop-blur-xl border-transparent"
          }
        `}
      >

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CBA18B]/40 to-transparent" />

        <div className="px-6 lg:px-8 py-4 flex items-center justify-between">

          <div className="flex items-center gap-4 flex-1">

            <Link
              to="/"
              className="flex items-center gap-3 group"
            >
              <img
                src={logo}
                alt="Hevia"
                className="
                  w-12
                  h-12
                  rounded-2xl
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              <div className="hidden md:flex flex-col">
                <span className="text-[#1E2A38] text-sm tracking-[0.25em] uppercase font-medium">
                  HEVIA
                </span>

                <span className="text-[11px] text-[#1E2A38]/50 tracking-[0.18em] uppercase">
                  Béziers
                </span>
              </div>
            </Link>

          </div>

          <ul className="hidden md:flex items-center justify-center gap-16 flex-1 text-sm font-medium tracking-wide">

            <li>
              <Link
                to="/about"
                className={navLink("/about")}
              >
                À propos
              </Link>
            </li>

            <li>
              <Link
                to="/collections"
                className={navLink("/collections")}
              >
                Collections
              </Link>
            </li>

          </ul>

          <div className="hidden md:flex items-center justify-end gap-5 flex-1">

            <Link
              to="/contact"
              className="
                bg-[#1E2A38]
                text-white
                px-7
                py-3
                rounded-full
                font-medium
                transition-all
                duration-500
                hover:bg-[#CBA18B]
                hover:text-[#1E2A38]
                hover:-translate-y-0.5
              "
            >
              Nous contacter
            </Link>

            <div className="flex items-center gap-2 pl-5 border-l border-[#1E2A38]/10">

              <a
                href="https://www.instagram.com/maison.hevia/"
                target="_blank"
                rel="noreferrer"
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white/50
                  flex
                  items-center
                  justify-center
                  text-[#1E2A38]
                  transition-all
                  duration-300
                  hover:bg-[#CBA18B]
                  hover:scale-105
                "
              >
                <FaInstagram size={14} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61580245243798"
                target="_blank"
                rel="noreferrer"
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white/50
                  flex
                  items-center
                  justify-center
                  text-[#1E2A38]
                  transition-all
                  duration-300
                  hover:bg-[#CBA18B]
                  hover:scale-105
                "
              >
                <FaFacebookF size={13} />
              </a>

            </div>

          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              relative
              w-8
              h-8
              flex
              flex-col
              justify-center
              items-center
            "
          >

            <span
              className={`
                absolute
                w-6
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
                w-6
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
                w-6
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

      <div
        className={`
          fixed
          inset-0
          bg-[#ECE6DF]
          backdrop-blur-xl
          z-40
          flex
          flex-col
          items-center
          justify-center
          gap-10
          transition-all
          duration-500
          ${
            menuOpen
              ? "opacity-100 visible"
              : "opacity-0 invisible"
          }
        `}
      >

        <Link
          to="/about"
          className="
            text-4xl
            font-light
            tracking-wide
            text-[#1E2A38]
            hover:text-[#CBA18B]
            transition-all
          "
        >
          À propos
        </Link>

        <Link
          to="/collections"
          className="
            text-4xl
            font-light
            tracking-wide
            text-[#1E2A38]
            hover:text-[#CBA18B]
            transition-all
          "
        >
          Collections
        </Link>

        <Link
          to="/contact"
          className="
            mt-4
            bg-[#1E2A38]
            text-white
            px-8
            py-4
            rounded-full
            font-medium
            transition-all
            duration-500
            hover:bg-[#CBA18B]
            hover:text-[#1E2A38]
          "
        >
          Nous contacter
        </Link>

        <div className="flex gap-4 mt-6">

          <a
            href="https://www.instagram.com/maison.hevia/"
            target="_blank"
            rel="noreferrer"
            className="
              w-11
              h-11
              rounded-full
              bg-white/70
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
              w-11
              h-11
              rounded-full
              bg-white/70
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

    </header>
  )
}