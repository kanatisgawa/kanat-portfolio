'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  return (
    <div className="text-center space-y-8 px-6 max-w-4xl mx-auto">
      {/* メインタイトル */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="space-y-4"
      >
        <motion.h1 
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-slate-200 via-slate-100 to-white bg-clip-text text-transparent mountain-text"
          animate={{ 
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          KANAT ENDO
        </motion.h1>
        
        <motion.div
          className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-slate-300 to-transparent"
          animate={{ 
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity,
            delay: 1 
          }}
        />
      </motion.div>

      {/* サブタイトル */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="space-y-6"
      >
        <h2 className="text-2xl md:text-4xl text-slate-200 font-light tracking-wide">
          Mountain-Inspired
          <span className="text-slate-100 mountain-text"> Developer</span>
        </h2>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          山岳のように壮大で美しいテクノロジーで未来を創造する。
          <br />
          <span className="text-slate-200">純粋さと革新性の融合。</span>
        </p>
      </motion.div>

      {/* CTAボタン群 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-semibold rounded-full hover:from-slate-500 hover:to-slate-600 transition-all duration-300 transform hover:scale-105 glass-effect"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 0 40px rgba(148, 163, 184, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log('Portfolio clicked')
          }}
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            View Portfolio
          </span>
        </motion.button>

        <motion.button
          className="px-8 py-4 border-2 border-slate-400 text-slate-300 font-semibold rounded-full hover:bg-slate-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 glass-effect"
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "rgba(148, 163, 184, 0.9)",
            color: "rgba(15, 23, 42, 1)",
            boxShadow: "0 0 30px rgba(148, 163, 184, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            console.log('Contact clicked')
          }}
        >
          <span className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </span>
        </motion.button>
      </motion.div>

      {/* ソーシャルリンク */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="flex justify-center space-x-6"
      >
        {[
          { name: 'GitHub', url: '#', icon: 'G' },
          { name: 'Twitter', url: '#', icon: 'T' },
          { name: 'LinkedIn', url: '#', icon: 'L' }
        ].map((social, index) => (
          <motion.a
            key={social.name}
            href={social.url}
            className="w-12 h-12 border-2 border-slate-600 rounded-full flex items-center justify-center text-slate-300 hover:border-slate-400 hover:text-slate-100 transition-all duration-300 glass-effect"
            whileHover={{ 
              scale: 1.15,
              borderColor: "rgba(148, 163, 184, 1)",
              color: "rgba(248, 250, 252, 1)",
              boxShadow: "0 0 20px rgba(148, 163, 184, 0.4)"
            }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="text-sm font-bold">{social.icon}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* オーロラエフェクト */}
      <motion.div
        className="absolute top-0 left-0 w-full h-32 opacity-20 pointer-events-none"
        animate={{
          background: [
            'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)',
            'linear-gradient(90deg, transparent, rgba(203, 213, 225, 0.3), transparent)',
            'linear-gradient(90deg, transparent, rgba(226, 232, 240, 0.3), transparent)',
            'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.3), transparent)',
          ]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
