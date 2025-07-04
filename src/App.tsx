import Logo from './assets/logo.png'
import { motion } from 'framer-motion'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <div className="sticky-navbar px-4 py-6 w-full drop-shadow-md bg-white">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <img src={Logo} width={190} />
          </div>
        </div>
      </div>
      <motion.div
        className="page-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="hero-center-text tektur-bold">
          <motion.h1
            className="text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            Най-престижната автошкола във Враца
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Научете се да шофирате с увереност в нашите коли BMW
          </motion.p>
        </div>
      </motion.div>
      {/* Scroll Indicator Icon */}
      <div
        className={`scroll-indicator${showScrollIndicator ? '' : ' scroll-indicator--hidden'}`}
        style={{ position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </>
  )
}

export default App
