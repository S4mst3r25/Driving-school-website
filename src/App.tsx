import Logo from './assets/logo.png'
import { motion } from 'framer-motion'
import './App.css'

function App() {
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
          <h1 className="text-6xl">Най-престижната автошкола във Враца</h1>
          <p>Научете се да шофирате с увереност в нашите коли BMW</p>
        </div>
      </motion.div>
    </>
  )
}

export default App
