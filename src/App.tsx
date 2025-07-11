import Logo from './assets/logo.png'
import { motion } from 'framer-motion'
import './App.css'
import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { Phone } from 'lucide-react'
import Prices from './pages/Gallery'
import AboutUs from './pages/AboutUs'

const Courses = lazy(() => import('./pages/Courses'))
const Contacts = lazy(() => import('./pages/Contacts'))

const SECTIONS = [
  {
    key: 'hero',
    content: (
      <motion.div
        className="page-bg"
        style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-center-text tektur-bold">
          <motion.h1
            className="text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Най-престижната автошкола във Враца
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            Научете се да шофирате с увереност в нашите коли BMW
          </motion.p>
        </div>
      </motion.div>
    ),
  },
  {
    key: 'courses',
    content: (
      <Suspense>
        <motion.div className="tektur-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: '100%' }}
        >
          <Courses />
        </motion.div>
      </Suspense>
    ),
  },
  {
    key: 'prices',
    content: (
      <motion.div className="tektur-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ height: '100%' }}
      >
        <Prices />
      </motion.div>
    ),
  },
  {
    key: 'about',
    content: (
      <motion.div className="tektur-normal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        style={{ height: '100%' }}
      >
        <AboutUs />
      </motion.div>
    ),
  },
  {
    key: 'contacts',
    content: (
      <Suspense>
        <motion.div className="tektur-normal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ height: '100%' }}
        >
          <Contacts />
        </motion.div>
      </Suspense>
    ),
  },
]

function App() {
  const [activeSection, setActiveSection] = useState(0)
  const [pendingSection, setPendingSection] = useState<number | null>(null)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState('100vh')

  useEffect(() => {
    function updateHeight() {
      const navbar = navbarRef.current
      const navHeight = navbar ? navbar.offsetHeight : 0
      setContainerHeight(`calc(100vh - ${navHeight}px)`)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isFadingOut || pendingSection !== null) return
      if (e.deltaY > 40 && activeSection < SECTIONS.length - 1) {
        setIsFadingOut(true)
        setPendingSection(activeSection + 1)
      } else if (e.deltaY < -40 && activeSection > 0) {
        setIsFadingOut(true)
        setPendingSection(activeSection - 1)
      }
    }
    const node = containerRef.current
    if (node) node.addEventListener('wheel', handleWheel, { passive: false })
    return () => {
      if (node) node.removeEventListener('wheel', handleWheel)
    }
  }, [activeSection, isFadingOut, pendingSection])

  useEffect(() => {
    if (isFadingOut && pendingSection !== null) {
      const timeout = setTimeout(() => {
        setActiveSection(pendingSection)
        setPendingSection(null)
        setIsFadingOut(false)
      }, 1200)
      return () => clearTimeout(timeout)
    }
  }, [isFadingOut, pendingSection])

  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <div ref={navbarRef} className="sticky-navbar px-4 py-6 w-full drop-shadow-md bg-white" style={{ position: 'sticky', top: 0, zIndex: 10 }}>
        <div className="flex items-center justify-center relative">
          <div className="flex items-center space-x-3">
            <button
              aria-label="Go to Home"
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
              onClick={() => {
                setActiveSection(0)
                setPendingSection(null)
                setIsFadingOut(false)
              }}
            >
              <img src={Logo} width={190} />
            </button>
          </div>
          <button
            aria-label="Contact"
            style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)' }}
            onClick={() => {
              setActiveSection(4)
              setPendingSection(null)
              setIsFadingOut(false)
            }}
          >
            <Phone size={22} color="#222" />
          </button>
        </div>
      </div>
      <div ref={containerRef} style={{ height: containerHeight, width: '100vw', overflow: 'hidden', position: 'relative' }}>
        <motion.div
          key={activeSection}
          style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          transition={{ duration: 1.2 }}
        >
          {SECTIONS[activeSection].content}
          {activeSection === 0 && !isFadingOut && (
            <div
              className="scroll-indicator"
              style={{ position: 'absolute', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default App
