'use client'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-3xl w-full items-center justify-between text-sm lg:flex lg:flex-col"      >
        <div className="rounded-3xl pt-12 pt-[4.2rem] pb-[4.2rem] shadow-xl bg-[#0f0f0f]/70 w-full mb-8">
          <h1 className="text-6xl font-bold mb-8 text-center">
            <span className="text-white">dscrd</span>
            <span className="text-blue-500">.es</span>
          </h1>
          <p className="text-xl text-center mb-6 text-gray-300">
            Una nueva experiencia para la comunidad de Discord está en camino.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mt-">
            <a
              href="https://x.com/Polo_1245Ofi"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-all duration-300 text-center w-full sm:w-auto font-semibold tracking-wide text-sm hover:scale-105 active:bg-blue-500/75"
            >
              Mantente informado
            </a>
            <a
              href="https://discord.gg/kEpzUFRKsc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5865F2] text-white px-6 py-2 rounded-full hover:bg-[#4752C4] transition-all duration-300 text-center w-full sm:w-auto font-semibold tracking-wide text-sm hover:scale-105 active:bg-[#5865F2]/75"
            >
              Únete al Discord
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 text-center text-gray-500 z-10"
      >
        <p>&copy; 2024 dscrd.es</p>
      </motion.div>
    </main>
  )
}
