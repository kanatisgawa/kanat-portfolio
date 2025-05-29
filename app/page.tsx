'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import LoadingScreen from '../components/LoadingScreen'
import NavigationMenu from '../components/NavigationMenu'
import HeroSection from '../components/HeroSection'
import MountainScene from '../components/MountainScene'

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* CSS背景の山岳シーン */}
      <div className="absolute inset-0 z-0">
        <MountainScene />
      </div>

      {/* オーバーレイグラデーション */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-slate-900/70 via-transparent to-slate-700/30" />

      {/* ナビゲーションメニュー */}
      <div className="absolute top-0 left-0 right-0 z-30">
        <NavigationMenu />
      </div>

      {/* メインコンテンツ */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <HeroSection />
      </div>

      {/* スクロールインジケーター */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center glass-effect">
          <motion.div
            className="w-1 h-3 bg-slate-300 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </main>
  )
}
