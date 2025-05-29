'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <nav className="relative z-50 p-6">
      <div className="flex justify-between items-center">
        {/* ロゴ */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold text-cyan-400"
        >
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">KE</span>
            </div>
            <span>KANAT</span>
          </motion.div>
        </motion.div>

        {/* デスクトップメニュー */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden md:flex space-x-8"
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {item.name}
              <motion.div
                className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                layoutId="underline"
              />
            </motion.a>
          ))}
        </motion.div>

        {/* モバイルメニューボタン */}
        <motion.button
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:hidden text-cyan-400 z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-cyan-400 mb-1.5 origin-center"
          />
          <motion.div
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-cyan-400 mb-1.5"
          />
          <motion.div
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-cyan-400 origin-center"
          />
        </motion.button>
      </div>

      {/* モバイルメニュー */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          height: isOpen ? 'auto' : 0 
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden mt-4"
      >
        <motion.div
          className="bg-slate-900/95 backdrop-blur-md rounded-lg p-6 space-y-4 border border-slate-700"
          initial={{ y: -20 }}
          animate={{ y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {menuItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              className="block text-slate-300 hover:text-cyan-400 transition-colors duration-300 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: isOpen ? 1 : 0, 
                x: isOpen ? 0 : -20 
              }}
              transition={{ 
                duration: 0.3, 
                delay: isOpen ? 0.1 * index : 0 
              }}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 10 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </nav>
  )
}
