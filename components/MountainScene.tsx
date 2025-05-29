'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MountainScene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* 背景山岳画像 */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 5}px) scale(1.1)`,
        }}
        animate={{
          scale: [1.1, 1.15, 1.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* オーバーレイグラデーション */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20" />
      
      {/* 氷のようなブルーオーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/30 via-transparent to-cyan-900/20" />

      {/* 霧エフェクト */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-slate-200/10 to-transparent"
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* 光線エフェクト */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-yellow-200/30 via-transparent to-transparent origin-top"
          style={{
            transform: `rotate(15deg) translateY(-20%)`,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            scaleY: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-yellow-100/20 via-transparent to-transparent origin-top"
          style={{
            transform: `rotate(10deg) translateY(-15%)`,
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scaleY: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* オーロラ風エフェクト */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-32 opacity-20"
          style={{
            background: `linear-gradient(90deg, 
              transparent, 
              rgba(34, 211, 238, 0.3), 
              rgba(167, 243, 208, 0.2), 
              rgba(196, 181, 253, 0.3), 
              transparent
            )`,
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* パララックス雲 */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-32 rounded-full bg-white/5 blur-xl"
          style={{
            transform: `translateX(${mousePosition.x * 30}px) translateY(${mousePosition.y * 15}px)`,
          }}
          animate={{
            x: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-0 w-80 h-28 rounded-full bg-white/3 blur-2xl"
          style={{
            transform: `translateX(${mousePosition.x * -20}px) translateY(${mousePosition.y * 10}px)`,
          }}
          animate={{
            x: [0, -80, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  )
}
