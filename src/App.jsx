import { useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom"

import { AnimatePresence } from "framer-motion"
import Lenis from "lenis"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import About from "./pages/About"
import Collections from "./pages/Collections"
import Contact from "./pages/Contact"

import Legal from "./pages/legal/Legal"
import Terms from "./pages/legal/Terms"
import Privacy from "./pages/legal/Privacy"

import PageTransition from "./components/PageTransition"

export let lenisInstance = null

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">

      <Routes
        location={location}
        key={location.pathname}
      >

        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />

        <Route
          path="/collections"
          element={
            <PageTransition>
              <Collections />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />

        <Route
          path="/legal"
          element={
            <PageTransition>
              <Legal />
            </PageTransition>
          }
        />

        <Route
          path="/terms"
          element={
            <PageTransition>
              <Terms />
            </PageTransition>
          }
        />

        <Route
          path="/privacy"
          element={
            <PageTransition>
              <Privacy />
            </PageTransition>
          }
        />

      </Routes>

    </AnimatePresence>
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      syncTouch: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 0.9,
      infinite: false,
    })

    lenisInstance = lenis

    let rafId

    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  return (
    <BrowserRouter>

      <ScrollToTop />

      <div className="gradient-hevia min-h-screen">

        <Navbar />

        <main>
          <AnimatedRoutes />
        </main>

        <Footer />

      </div>

    </BrowserRouter>
  )
}