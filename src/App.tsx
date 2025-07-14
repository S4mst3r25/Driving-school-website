import Logo from './assets/logo.png'
import FadeInImage from './components/FadeInImage'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'
import { useEffect, useRef, useState, lazy, Suspense } from 'react'
import { Phone, ChevronDown, ChevronUp } from 'lucide-react'
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
        <div className="hero-center-text tektur-bold px-4 text-center">
          <motion.h1
            className="text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ maxWidth: '100%', wordWrap: 'break-word', margin: '0 auto' }}
          >
            Най-престижната автошкола във Враца
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mt-14 md:mt-18"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            style={{ maxWidth: '100%', wordWrap: 'break-word', margin: '0 auto', paddingTop: '1.5rem' }}
          >
            Научете се да шофирате уверено с нашите коли BMW
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
  const [showUpButton, setShowUpButton] = useState(false)
  const [showDownButton, setShowDownButton] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState('100vh')
  const [navbarHeight, setNavbarHeight] = useState(0)

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
  }, [])

  useEffect(() => {
    function updateHeight() {
      const navbar = navbarRef.current
      const navHeight = navbar ? navbar.offsetHeight : 0
      setNavbarHeight(navHeight)
      setContainerHeight(`calc(100vh - ${navHeight}px)`)
    }
    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

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
    if (node) {
      node.addEventListener('wheel', handleWheel, { passive: false })
    }
    return () => {
      if (node) {
        node.removeEventListener('wheel', handleWheel)
      }
    }
  }, [activeSection, isFadingOut, pendingSection, isTouchDevice])

  const handleScroll = () => {
    if (!isTouchDevice || !contentRef.current) return

    const { scrollTop, scrollHeight, clientHeight } = contentRef.current
    const isAtTop = scrollTop <= 1
    const isAtBottom = scrollHeight - scrollTop - clientHeight <= 1

    setShowUpButton(isAtTop && activeSection > 0)
    setShowDownButton(isAtBottom && activeSection < SECTIONS.length - 1)
  }

  useEffect(() => {
    const element = contentRef.current
    if (element && isTouchDevice) {
      element.addEventListener('scroll', handleScroll, { passive: true })

      if (activeSection === 0) setShowDownButton(true)

      handleScroll()
    }
    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll)
      }
    }
  }, [isTouchDevice, activeSection])

  useEffect(() => {
    if (isFadingOut && pendingSection !== null) {
      const timeout = setTimeout(() => {
        setActiveSection(pendingSection)
        setPendingSection(null)
        setIsFadingOut(false)
      }, 700)
      return () => clearTimeout(timeout)
    }
  }, [isFadingOut, pendingSection])

  const handleSectionChange = (newSection: number) => {
    if (isFadingOut) return
    setIsFadingOut(true)
    setPendingSection(newSection)
  }

  const MobileNavigationButton = ({ direction }: { direction: 'up' | 'down' }) => {
    const isUp = direction === 'up'
    const show = isUp ? showUpButton : (showDownButton || (activeSection === 0 && direction === 'down'))
    const Icon = isUp ? ChevronUp : ChevronDown

    if (!isTouchDevice || !show) return null

    return (
      <AnimatePresence>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => handleSectionChange(isUp ? activeSection - 1 : activeSection + 1)}
          className="absolute left-1/2 transform -translate-x-1/2 z-20 bg-black/50 hover:bg-black/70 transition-colors flex items-center justify-center"
          style={{
            [isUp ? 'top' : 'bottom']: 0,
            width: '160px',
            height: '48px'
          }}
          aria-label={`Go to ${isUp ? 'previous' : 'next'} section`}
        >
          <Icon size={36} color="white" strokeWidth={2.5} />
        </motion.button>
      </AnimatePresence>
    )
  }

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
              <FadeInImage src={Logo} alt="Logo" style={{ width: 190, height: 'auto' }} />
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
      <div ref={containerRef} style={{ height: containerHeight, width: '100vw', position: 'relative' }}>
        <motion.div
          key={activeSection}
          ref={contentRef}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflowY: isTouchDevice ? 'auto' : 'hidden',
            overflowX: 'hidden',
            WebkitOverflowScrolling: 'touch'
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: isFadingOut ? 0 : 1 }}
          transition={{ duration: 0.7 }}
        >
          {SECTIONS[activeSection].content}
          {activeSection === 0 && !isFadingOut && !isTouchDevice && (
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
        {isTouchDevice && (
          <>
            <MobileNavigationButton direction="up" />
            <MobileNavigationButton direction="down" />
          </>
        )}
      </div>
    </div>
  )
}

export default App
