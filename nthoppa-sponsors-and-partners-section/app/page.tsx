"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Menu,
  X,
  GraduationCap,
  Store,
  Trophy,
  Calculator,
  Coins,
  Gift,
  TrendingUp,
  Shield,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const MotionButton = motion(Button)

export default function LandingPage() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isFloatingCardVisible, setIsFloatingCardVisible] = useState(true)

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log("Subscribing email:", email)
    setIsSubscribeOpen(false)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yJgmEhLf71bDEpve60wls9cJoQUyOp.png"
                alt="Nthoppa Logo"
                className="h-10 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <MotionButton
                variant="outline"
                className="relative px-8 py-2 rounded-full bg-[#E9521C] text-white border-0 font-bold text-sm tracking-wider overflow-hidden shadow-lg hover:bg-black"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById("offerings")?.scrollIntoView({ behavior: "smooth" })}
              >
                <span className="relative z-10">Our Offerings</span>
              </MotionButton>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
              <Button
                variant="default"
                className="bg-black text-white hover:bg-[#E9521C] font-bold text-sm transition-colors"
                onClick={() => setIsSubscribeOpen(true)}
              >
                Subscribe
              </Button>
              <Button
                variant="default"
                className="bg-black text-white hover:bg-[#E9521C] font-bold text-sm transition-colors"
                asChild
              >
                <a
                  href="https://v0-fintech-dashboard-design-4pdrqd.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login
                </a>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <div className="flex flex-col space-y-4 pt-4">
                <Button
                  variant="outline"
                  className="w-full bg-[#E9521C] hover:bg-black text-white border-0 font-bold shadow-lg transition-colors"
                  onClick={() => {
                    document.getElementById("offerings")?.scrollIntoView({ behavior: "smooth" })
                    setIsMobileMenuOpen(false)
                  }}
                >
                  Our Offerings
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance"
          >
            Financial Freedom for <span className="text-[#E9521C]">Everyone</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-pretty"
          >
            Empowering the unbanked with financial education, marketplace access, and smart tools to make better money
            decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button
              size="lg"
              className="bg-black hover:bg-[#E9521C] text-white px-8 py-6 text-lg font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg rounded-xl flex items-center gap-3 group"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nthoppa.fintech&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg
                  className="w-8 h-8 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">GET IT ON</div>
                  <div className="text-lg font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-[#E9521C] hover:bg-black text-white px-8 py-6 text-lg font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg rounded-xl flex items-center gap-3 group"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">DOWNLOAD</div>
                  <div className="text-lg font-bold leading-tight">APK File</div>
                </div>
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000010751-83psdkU7ulxYqWzw2kStm6kVp9qPpN.jpg"
                  alt="Nthoppa Home Screen"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200 md:mt-8"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000010774-1tZqKBwu7FtT2UiY5HKrCmBTBaae4V.jpg"
                  alt="Nthoppa Rewards Screen"
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000010775-O3SV5sGL8H386LW097pwGFRuKXkRIX.jpg"
                  alt="Nthoppa Redemption Screen"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Education Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#E9521C]/10 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold">
                <GraduationCap className="w-5 h-5" />
                Learn & Grow
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Financial Education Made Simple
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                No more confusion. No more barriers. Nthoppa breaks down complex financial concepts into bite-sized
                lessons anyone can understand.
              </p>
              <ul className="space-y-4">
                {[
                  "Easy-to-understand financial courses",
                  "Learn at your own pace, anytime",
                  "Build confidence in money management",
                  "From basics to advanced investing",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E9521C] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#E9521C] to-black rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#E9521C]/10 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-[#E9521C]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">Today's Lesson</h4>
                      <p className="text-sm text-gray-600">Understanding Savings</p>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-[#E9521C] rounded-full"></div>
                  </div>
                  <p className="text-sm text-gray-600">75% Complete</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Financial Marketplace Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <div className="bg-gradient-to-br from-black to-[#E9521C] rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Shield, label: "Insurance", color: "bg-blue-500" },
                    { icon: TrendingUp, label: "Investments", color: "bg-green-500" },
                    { icon: Smartphone, label: "Airtime", color: "bg-purple-500" },
                    { icon: Store, label: "More Products", color: "bg-[#E9521C]" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-xl p-6 text-center"
                    >
                      <div
                        className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-1 md:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-[#E9521C]/10 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold">
                <Store className="w-5 h-5" />
                Marketplace
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Access Financial Products You Need
              </h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                From insurance to investments, get access to a curated marketplace of financial products designed for
                you.
              </p>
              <ul className="space-y-4">
                {[
                  "Affordable insurance products",
                  "Investment opportunities for everyone",
                  "Buy airtime and data bundles",
                  "Exclusive deals and discounts",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#E9521C] flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gamification & Rewards Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#E9521C]/10 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold">
              <Trophy className="w-5 h-5" />
              Earn Rewards
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Rewarded for Learning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every action you take on Nthoppa earns you points. Redeem them for real rewards and discounts.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="bg-gradient-to-br from-[#E9521C] to-orange-600 rounded-3xl p-8 shadow-2xl text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border-2 border-white/20">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                    <Coins className="w-7 h-7 text-yellow-300" />
                  </div>
                </div>
                <h3 className="text-white text-2xl font-bold mb-2">Your Nthoppa Coins</h3>
                <div className="text-7xl font-bold text-white mb-2">71</div>
                <p className="text-white/90 text-sm">Redeem for amazing rewards below</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <p className="text-white font-semibold mb-3">How to Earn Coins</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-3 text-white">
                    <GraduationCap className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">
                      Complete education modules: <strong>25 coins</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Trophy className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">
                      Complete quizzes: <strong>10 coins</strong>
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-white">
                    <Smartphone className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm">
                      Complete profile: <strong>10 coins</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Insurance Discounts",
                description:
                  "Get 10-20% off on medical aid, car insurance, and life insurance using your Nthoppa Coins.",
                coins: "800-1500 coins",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                icon: Smartphone,
                title: "Airtime & Data",
                description: "Redeem coins for airtime, data bundles, and DStv subscriptions at discounted rates.",
                coins: "500-2000 coins",
                color: "text-[#E9521C]",
                bgColor: "bg-[#E9521C]/10",
              },
              {
                icon: Gift,
                title: "Cash Prizes",
                description: "Convert your coins into real cash prizes and withdraw directly to your account.",
                coins: "2500+ coins",
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <Coins className="w-4 h-4" />
                  {item.coins}
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Tools Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-[#E9521C]/10 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold">
                <Calculator className="w-5 h-5" />
                Smart Tools
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
                Make Smarter Financial Decisions
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Access powerful calculators and tools that help you budget, invest, and plan your financial future with
                confidence.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Budget Calculator", desc: "Track income and expenses effortlessly" },
                  { title: "Investment Calculator", desc: "See your money grow over time" },
                  { title: "Premium Calculator", desc: "Find the best insurance rates" },
                  { title: "Savings Planner", desc: "Set and achieve your financial goals" },
                ].map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E9521C] flex items-center justify-center flex-shrink-0">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{tool.title}</h4>
                      <p className="text-sm text-gray-600">{tool.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#E9521C] to-black rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6">
                  <h4 className="font-bold text-gray-900 mb-4 text-lg">Budget Calculator</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Income</span>
                        <span className="font-semibold text-gray-900">P 15,000</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Expenses</span>
                        <span className="font-semibold text-gray-900">P 9,500</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-2/3 bg-[#E9521C] rounded-full"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Savings</span>
                        <span className="font-semibold text-green-600">P 5,500</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-green-50 rounded-xl">
                    <p className="text-sm text-green-800 font-semibold">You're saving 37% of your income!</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Nthoppa Offers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to take control of your financial future - education, marketplace access, rewards, and
              smart tools all in one app.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Financial Education",
                description:
                  "Learn money management through easy-to-understand courses. Complete modules like 'Money 101' and earn 25 coins per course.",
                icon: GraduationCap,
                color: "text-blue-600",
                bgColor: "bg-blue-50",
              },
              {
                title: "Insurance Marketplace",
                description:
                  "Access life, car, and medical insurance from trusted providers like Liberty, Old Mutual, Hollard, and Guardrisk.",
                icon: Shield,
                color: "text-green-600",
                bgColor: "bg-green-50",
              },
              {
                title: "Nthoppa Coins & Rewards",
                description:
                  "Earn coins by learning and using the app. Redeem for insurance discounts, airtime, DStv subscriptions, and cash prizes.",
                icon: Coins,
                color: "text-[#E9521C]",
                bgColor: "bg-[#E9521C]/10",
              },
              {
                title: "Financial Calculators",
                description:
                  "Budget planner, investment calculator, premium estimator, and savings tools to help you make smarter financial decisions.",
                icon: Calculator,
                color: "text-purple-600",
                bgColor: "bg-purple-50",
              },
            ].map((offering, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#E9521C]"
              >
                <div
                  className={`w-16 h-16 ${offering.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <offering.icon className={`w-8 h-8 ${offering.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{offering.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Trusted Insurance Partners</h3>
            <p className="text-gray-500 text-sm text-center mb-6">Products powered by leading insurers in Southern Africa</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center justify-items-center">
              {[
                { name: "Liberty", tag: "Life & Health" },
                { name: "Old Mutual", tag: "Life & Invest" },
                { name: "BIC", tag: "General" },
                { name: "Hollard", tag: "Multi-line" },
                { name: "Guardrisk", tag: "Cell Captive" },
                { name: "Metropolitan", tag: "Life & Funeral" },
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white px-4 py-4 rounded-2xl shadow-sm hover:shadow-md hover:border-[#E9521C]/20 transition-all duration-300 border border-gray-100 w-full text-center"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#E9521C]/10 to-orange-50 flex items-center justify-center mx-auto mb-2">
                    <svg className="w-5 h-5 text-[#E9521C]/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <p className="font-bold text-gray-800 text-sm leading-tight">{partner.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{partner.tag}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners & Sponsors Section */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#E9521C]/10 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Our Ecosystem
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted Partners & <span className="text-[#E9521C]">Sponsors</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with industry leaders and sponsors who share our mission of financial empowerment across Southern Africa.
            </p>
          </motion.div>

          {/* Strategic Partners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 px-4">Strategic Partners</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
              {[
                { name: "Liberty", category: "Insurance" },
                { name: "Old Mutual", category: "Insurance" },
                { name: "Hollard", category: "Insurance" },
                { name: "Guardrisk", category: "Insurance" },
                { name: "Metropolitan", category: "Financial Services" },
              ].map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(233,82,28,0.12)" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-sm hover:border-[#E9521C]/30 transition-all duration-300 cursor-pointer"
                >
                  {/* Logo placeholder — replace src with actual partner logo */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-[#E9521C]/10 group-hover:to-orange-50 transition-all duration-300">
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-[#E9521C] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <p className="font-bold text-gray-800 text-sm text-center leading-tight">{partner.name}</p>
                  <span className="text-xs text-gray-400 font-medium">{partner.category}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 px-4">Sponsors</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Platinum Sponsor */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="group col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-br from-gray-900 to-black border border-gray-700 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-lg cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E9521C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#E9521C] border border-[#E9521C]/40 rounded-full px-3 py-1">Platinum Sponsor</span>
                  {/* Replace with actual sponsor logo */}
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-bold text-white text-base text-center">Your Brand Here</p>
                  <p className="text-xs text-gray-400 text-center">Partner with Nthoppa to reach<br/>thousands of users across Botswana</p>
                </div>
              </motion.div>
              {/* Gold Sponsors */}
              {[
                { tier: "Gold Sponsor", label: "Sponsor Slot" },
                { tier: "Gold Sponsor", label: "Sponsor Slot" },
              ].map((sponsor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(233,82,28,0.1)" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white border-2 border-dashed border-gray-200 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 hover:border-[#E9521C]/40 transition-all duration-300 cursor-pointer min-h-[160px]"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-500 border border-amber-200 rounded-full px-3 py-1 bg-amber-50">{sponsor.tier}</span>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-[#E9521C]/5 flex items-center justify-center transition-colors duration-300">
                    <svg className="w-6 h-6 text-gray-300 group-hover:text-[#E9521C]/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold text-gray-400 group-hover:text-gray-600 transition-colors">{sponsor.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Become a Partner CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-8 md:p-12 text-center shadow-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Interested in Partnering with Nthoppa?</h3>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Join our growing ecosystem and connect your brand with financially empowered users across Botswana and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#E9521C] hover:bg-black text-white px-8 py-5 text-base font-semibold transition-all duration-300 shadow-lg rounded-xl"
                asChild
              >
                <a href="mailto:info@nthoppa.com?subject=Partnership%20Enquiry">Become a Partner</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-200 hover:border-[#E9521C] text-gray-700 hover:text-[#E9521C] px-8 py-5 text-base font-semibold transition-all duration-300 rounded-xl"
                asChild
              >
                <a href="mailto:info@nthoppa.com?subject=Sponsorship%20Enquiry">Sponsorship Packages</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#E9521C]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Start Your Financial Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/90 mb-8"
          >
            Join thousands who are already building better financial futures with Nthoppa. Download the app and get
            started in minutes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-black hover:bg-[#E9521C] text-white px-8 py-6 text-lg font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg rounded-xl flex items-center gap-3 group"
              asChild
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.nthoppa.fintech&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <svg
                  className="w-8 h-8 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">GET IT ON</div>
                  <div className="text-lg font-bold leading-tight">Google Play</div>
                </div>
              </a>
            </Button>

            <Button
              size="lg"
              className="bg-white hover:bg-black text-[#E9521C] hover:text-white px-8 py-6 text-lg font-semibold hover:shadow-2xl transition-all duration-300 shadow-lg rounded-xl flex items-center gap-3 group"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <svg
                  className="w-8 h-8 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-90">DOWNLOAD</div>
                  <div className="text-lg font-bold leading-tight">APK File</div>
                </div>
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* About Section */}
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yJgmEhLf71bDEpve60wls9cJoQUyOp.png"
                alt="Nthoppa Logo"
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering the unbanked with financial education and access to the marketplace.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#offerings" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    Our Offerings
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#E9521C] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@nthoppa.com"
                    className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm"
                  >
                    info@nthoppa.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E9521C] flex-shrink-0 mt-0.5" />
                  <a href="tel:+27123456789" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">
                    +27 12 345 6789
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#E9521C] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400 text-sm">Johannesburg, South Africa</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-center mb-6">
              <Button
                className="bg-[#E9521C] hover:bg-[#E9521C]/90 text-white px-8 py-6 text-base font-semibold transition-all duration-300 shadow-lg rounded-xl"
                asChild
              >
                <a href="/dashboard">Nthoppa Agents</a>
              </Button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2025 Nthoppa. All rights reserved.</p>
              <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E9521C] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E9521C] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E9521C] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E9521C] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        </div>
      </footer>

      {isFloatingCardVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-gradient-to-br from-[#E9521C] to-black rounded-2xl shadow-2xl p-6 max-w-sm relative">
            <button
              onClick={() => setIsFloatingCardVisible(false)}
              className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <h3 className="text-white font-bold text-xl mb-2">Download Nthoppa</h3>
            <p className="text-white/90 text-sm mb-4">Get started with financial freedom today!</p>
            <div className="flex flex-col gap-3">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#E9521C] px-6 py-5 text-base font-semibold transition-all duration-300 shadow-lg rounded-xl flex items-center gap-3 group w-full justify-start"
                asChild
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.nthoppa.fintech&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <svg
                    className="w-7 h-7 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">GET IT ON</div>
                    <div className="text-base font-bold leading-tight">Google Play</div>
                  </div>
                </a>
              </Button>

              <Button
                size="lg"
                className="bg-black hover:bg-gray-900 text-white px-6 py-5 text-base font-semibold transition-all duration-300 shadow-lg rounded-xl flex items-center gap-3 group w-full justify-start"
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <svg
                    className="w-7 h-7 group-hover:scale-110 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-70">DOWNLOAD</div>
                    <div className="text-base font-bold leading-tight">APK File</div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Subscribe Modal */}
      <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Subscribe to Nthoppa</DialogTitle>
            <DialogDescription>Enter your email to subscribe to updates and exclusive offers.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setIsSubscribeOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleSubscribe} className="bg-[#E9521C] hover:bg-black text-white transition-colors">
              Subscribe
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
