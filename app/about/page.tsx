'use client'

import { motion } from 'framer-motion'
import NavigationMenu from '../../components/NavigationMenu'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <NavigationMenu />
      
      <div className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center space-y-12"
        >
          {/* ページタイトル */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            About Me
          </motion.h1>

          {/* プロフィール画像セクション */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative mx-auto w-48 h-48 mb-12"
          >
            <div className="w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-6xl font-bold text-white">
              KE
            </div>
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-cyan-400 opacity-50"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* 基本情報 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="grid md:grid-cols-3 gap-8 text-left"
          >
            <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">基本情報</h3>
              <div className="space-y-2 text-slate-300">
                <p><span className="text-cyan-400">名前:</span> 遠藤 叶翔</p>
                <p><span className="text-cyan-400">生年月日:</span> [あなたの生年月日]</p>
                <p><span className="text-cyan-400">職業:</span> Developer / Creator</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">スキル</h3>
              <div className="space-y-2 text-slate-300">
                <p>• React / Next.js</p>
                <p>• TypeScript</p>
                <p>• Three.js</p>
                <p>• UI/UX Design</p>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-md rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">興味分野</h3>
              <div className="space-y-2 text-slate-300">
                <p>• フロントエンド開発</p>
                <p>• 3D Web体験</p>
                <p>• 未来的UI/UX</p>
                <p>• 創造的技術</p>
              </div>
            </div>
          </motion.div>

          {/* 自己紹介文 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="bg-slate-800/30 backdrop-blur-md rounded-lg p-8 border border-slate-700"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">自己紹介</h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              テクノロジーと創造性の融合を追求するデベロッパーです。
              常に新しい技術にチャレンジし、ユーザーに感動を与える体験を創造することを目指しています。
              特に3D Web技術やモーションデザインに情熱を注いでおり、
              未来的で革新的なWebサイトの制作を得意としています。
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio を見る
            </motion.button>
            <motion.button
              className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-full hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
