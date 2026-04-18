<!-- trigger deploy -->
  
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
  Building2,
  Users,
  BarChart3,
  CheckCircle,
  Star,
  ArrowRight,
  Wallet,
  PiggyBank,
  CreditCard,
  Target,
  Layers,
  Zap,
  Globe,
  ChevronDown,
  LayoutDashboard,
  UserCheck,
  Activity,
  ShoppingBag,
  Lock,
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

// ─── Mock Data ────────────────────────────────────────────────────────────────

const creditScoreData = [
  { label: "Savings Consistency", value: 82, color: "#10b981" },
  { label: "Income Patterns", value: 74, color: "#3b82f6" },
  { label: "Financial Discipline", value: 69, color: "#8b5cf6" },
  { label: "Transaction History", value: 88, color: "#f59e0b" },
  { label: "Behaviour Score", value: 77, color: "#E9521C" },
]

const smeStages = [
  {
    label: "Informal Traders",
    count: "12,480",
    icon: Store,
    color: "from-orange-500 to-orange-600",
    desc: "Street vendors & micro-traders onboarded",
  },
  {
    label: "Qualified SMEs",
    count: "3,240",
    icon: Building2,
    color: "from-blue-500 to-blue-600",
    desc: "Assessed & eligible for business banking",
  },
  {
    label: "Business Banking",
    count: "864",
    icon: CreditCard,
    color: "from-purple-500 to-purple-600",
    desc: "Active Stanbic business accounts",
  },
  {
    label: "Enterprise Pipeline",
    count: "218",
    icon: TrendingUp,
    color: "from-green-500 to-green-600",
    desc: "Growing into enterprise-level clients",
  },
]

const dashboardStats = [
  { label: "Total Users", value: "24,891", change: "+12%", icon: Users, color: "bg-blue-500" },
  { label: "Active Traders (iPatchi)", value: "8,342", change: "+8%", icon: Store, color: "bg-orange-500" },
  { label: "Credit Profiles", value: "6,120", change: "+21%", icon: CreditCard, color: "bg-purple-500" },
  { label: "Avg. Credit Score", value: "712", change: "+4pts", icon: BarChart3, color: "bg-green-500" },
]

const iPatchiUsers = [
  { name: "Mpho Kgosi", trade: "Food Vendor", score: 78, status: "Qualified", months: 6 },
  { name: "Dineo Seretse", trade: "Hair Salon", score: 84, status: "Pipeline", months: 9 },
  { name: "Tshepho Maribe", trade: "Clothing", score: 61, status: "Building", months: 3 },
  { name: "Kagiso Tau", trade: "Electronics", score: 91, status: "Banking", months: 14 },
  { name: "Naledi Sithole", trade: "Crafts", score: 55, status: "Building", months: 2 },
]

const merchantAccounts = [
  { name: "Kgosi Grocers", type: "Retail", revenue: "P 48,200", transactions: 312, status: "Active" },
  { name: "Seretse Beauty", type: "Services", revenue: "P 22,400", transactions: 186, status: "Active" },
  { name: "Tau Tech", type: "Electronics", revenue: "P 91,700", transactions: 423, status: "Active" },
  { name: "Naledi Crafts", type: "Artisan", revenue: "P 8,900", transactions: 67, status: "Pending" },
]

const navLinks = [
  { label: "Offerings", id: "offerings" },
  { label: "Partners", id: "partners" },
  { label: "Banking", id: "banking" },
  { label: "Credit", id: "credit" },
  { label: "SME Pipeline", id: "sme" },
  { label: "Incubator", id: "incubator" },
  { label: "Dashboard", id: "dashboard" },
]

// ─── Utility ──────────────────────────────────────────────────────────────────

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionBadge({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-[#E9521C]/10 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold text-sm">
      <Icon className="w-4 h-4" />
      {label}
    </div>
  )
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-700">
      <div className="w-6 h-6 rounded-full bg-[#E9521C] flex items-center justify-center flex-shrink-0">
        <CheckCircle className="w-4 h-4 text-white" />
      </div>
      <span className="text-base">{text}</span>
    </div>
  )
}

function RadialBar({ label, value, color }: { label: string; value: number; color: string }) {
  const radius = 28
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (value / 100) * circumference
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r={radius} fill="none" stroke="#f3f4f6" strokeWidth="8" />
          <circle
            cx="36"
            cy="36"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-gray-800">{value}</span>
      </div>
      <span className="text-xs text-gray-600 text-center leading-tight max-w-[72px]">{label}</span>
    </div>
  )
}

// ─── Page Component ───────────────────────────────────────────────────────────

export default function LandingPage() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [isFloatingCardVisible, setIsFloatingCardVisible] = useState(true)
  const [activeTab, setActiveTab] = useState<"overview" | "credit" | "sme" | "merchants">("overview")

  const handleSubscribe = () => {
    console.log("Subscribing email:", email)
    setIsSubscribeOpen(false)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Navbar ─────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yJgmEhLf71bDEpve60wls9cJoQUyOp.png"
                alt="Nthoppa Logo"
                className="h-9 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#E9521C] rounded-lg hover:bg-[#E9521C]/5 transition-all"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                className="hidden sm:flex border-gray-200 text-gray-700 hover:border-[#E9521C] hover:text-[#E9521C] text-sm"
                onClick={() => setIsSubscribeOpen(true)}
              >
                Subscribe
              </Button>
              <Button
                className="bg-[#E9521C] hover:bg-black text-white text-sm font-semibold transition-colors"
                asChild
              >
                <a href="https://v0-fintech-dashboard-design-4pdrqd.vercel.app/" target="_blank" rel="noopener noreferrer">
                  Login
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-3 pb-3 border-t border-gray-100"
            >
              <div className="flex flex-col gap-1 pt-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => { scrollTo(link.id); setIsMobileMenuOpen(false) }}
                    className="text-left px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#E9521C] hover:bg-[#E9521C]/5 rounded-lg transition-all"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-white via-orange-50/30 to-gray-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#E9521C]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 -left-24 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-[#E9521C]/10 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold text-sm"
          >
            <Zap className="w-4 h-4" />
            Botswana's Financial Empowerment Platform
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 text-balance"
          >
            Financial Freedom for{" "}
            <span className="text-[#E9521C]">Everyone</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto text-pretty"
          >
            Empowering the unbanked with financial education, marketplace access, alternative credit scoring, and
            SME development — all in one platform.
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
              <a href="https://play.google.com/store/apps/details?id=com.nthoppa.fintech&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <svg className="w-7 h-7 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
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
              onClick={() => scrollTo("dashboard")}
            >
              <LayoutDashboard className="w-7 h-7 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <div className="text-xs opacity-90">VIEW</div>
                <div className="text-lg font-bold leading-tight">Partner Dashboard</div>
              </div>
            </Button>
          </motion.div>

          {/* App screenshots */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {[
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000010751-83psdkU7ulxYqWzw2kStm6kVp9qPpN.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000010774-1tZqKBwu7FtT2UiY5HKrCmBTBaae4V.jpg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1000010775-O3SV5sGL8H386LW097pwGFRuKXkRIX.jpg",
              ].map((src, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className={`bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-200 ${i === 1 ? "md:mt-8" : ""}`}
                >
                  <img src={src} alt={`Nthoppa App Screen ${i + 1}`} className="w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Financial Education ──────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <SectionBadge icon={GraduationCap} label="Learn & Grow" />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">Financial Education Made Simple</h2>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">No more confusion. No more barriers. Nthoppa breaks down complex financial concepts into bite-sized lessons anyone can understand.</p>
              <div className="space-y-3">
                {["Easy-to-understand financial courses", "Learn at your own pace, anytime", "Build confidence in money management", "From basics to advanced investing"].map((item) => (
                  <CheckItem key={item} text={item} />
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
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
                    <div className="h-full w-3/4 bg-[#E9521C] rounded-full" />
                  </div>
                  <p className="text-sm text-gray-600">75% Complete — <span className="font-semibold text-[#E9521C]">+25 coins earned</span></p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {[{ label: "Budgeting", done: true }, { label: "Saving", done: true }, { label: "Investing", done: false }].map((mod) => (
                      <div key={mod.label} className={`rounded-xl p-3 text-center text-xs font-semibold ${mod.done ? "bg-green-50 text-green-700" : "bg-gray-100 text-gray-400"}`}>
                        {mod.done && <CheckCircle className="w-4 h-4 mx-auto mb-1 text-green-500" />}
                        {mod.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sponsors / Partners / Agents ─────────────────────────────────────── */}
      <section id="partners" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionBadge icon={Globe} label="Our Ecosystem" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Trusted Partners &amp; <span className="text-[#E9521C]">Sponsors</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">We collaborate with industry leaders who share our mission of financial empowerment across Southern Africa.</p>
          </motion.div>

          {/* Strategic Partners */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 px-4">Strategic Partners</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {[
                { name: "Liberty", category: "Life & Health" },
                { name: "Old Mutual", category: "Life & Invest" },
                { name: "Hollard", category: "Multi-line" },
                { name: "Guardrisk", category: "Cell Captive" },
                { name: "Metropolitan", category: "Financial Services" },
              ].map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center justify-center gap-2 shadow-sm hover:border-[#E9521C]/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-[#E9521C]/10 group-hover:to-orange-50 flex items-center justify-center transition-all duration-300">
                    <Shield className="w-6 h-6 text-gray-400 group-hover:text-[#E9521C] transition-colors" />
                  </div>
                  <p className="font-bold text-gray-800 text-sm text-center">{p.name}</p>
                  <span className="text-xs text-gray-400">{p.category}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Agents / Channel Partners */}
          <div className="mb-14">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 px-4">Agents &amp; Channel Partners</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                { name: "CreditYame", type: "Formal Sector Credit", icon: CreditCard, color: "bg-blue-50 text-blue-600" },
                { name: "iPatchi", type: "Informal Sector Credit", icon: Store, color: "bg-orange-50 text-[#E9521C]" },
                { name: "Stanbic Bank", type: "Banking Partner", icon: Building2, color: "bg-green-50 text-green-600" },
                { name: "Accelerate", type: "Incubator Partner", icon: Zap, color: "bg-purple-50 text-purple-600" },
              ].map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group bg-white border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm hover:shadow-md hover:border-[#E9521C]/30 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${a.color.split(" ")[0]}`}>
                    <a.icon className={`w-7 h-7 ${a.color.split(" ")[1]}`} />
                  </div>
                  <p className="font-bold text-gray-900 text-center text-sm">{a.name}</p>
                  <span className="text-xs text-gray-400 text-center">{a.type}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Sponsors grid */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gray-200" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-400 px-4">Sponsors</span>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gray-200" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Platinum */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="col-span-1 sm:col-span-1 bg-gradient-to-br from-gray-900 to-black rounded-2xl p-7 flex flex-col items-center justify-center gap-3 shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#E9521C]/10 to-transparent" />
                <span className="relative text-xs font-bold uppercase tracking-widest text-[#E9521C] border border-[#E9521C]/40 rounded-full px-3 py-1">Platinum Sponsor</span>
                <div className="relative w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center">
                  <Star className="w-7 h-7 text-white/60" />
                </div>
                <p className="relative font-bold text-white text-base">Your Brand Here</p>
                <p className="relative text-xs text-gray-400 text-center">Reach thousands of users across Botswana</p>
              </motion.div>
              {/* Gold slots */}
              {["Gold Sponsor Slot", "Gold Sponsor Slot"].map((label, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border-2 border-dashed border-gray-200 rounded-2xl p-7 flex flex-col items-center justify-center gap-3 hover:border-[#E9521C]/40 transition-all duration-300 min-h-[180px]"
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-500 border border-amber-200 rounded-full px-3 py-1 bg-amber-50">Gold Sponsor</span>
                  <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center">
                    <X className="w-5 h-5 text-gray-300 rotate-45" />
                  </div>
                  <p className="text-sm font-semibold text-gray-400">{label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-[#E9521C] hover:bg-black text-white px-8 py-4 font-semibold rounded-xl transition-all duration-300 shadow-lg" asChild>
                <a href="mailto:info@nthoppa.com?subject=Partnership%20Enquiry">Become a Partner</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Customer Readiness & Entry-Level Banking ──────────────────────────── */}
      <section id="banking" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionBadge icon={Wallet} label="Entry-Level Banking" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Preparing Users for <span className="text-[#E9521C]">Real Banking</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nthoppa bridges the gap between the unbanked and formal financial services through financial literacy and behavioural tracking.</p>
          </motion.div>

          {/* Journey Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { step: "01", title: "Financial Literacy", desc: "Users complete structured courses on budgeting, saving & money management", icon: GraduationCap, color: "from-blue-500 to-blue-600" },
              { step: "02", title: "Behaviour Tracking", desc: "Platform monitors spending habits, savings consistency & financial decisions", icon: Activity, color: "from-purple-500 to-purple-600" },
              { step: "03", title: "Readiness Score", desc: "Algorithm calculates a customer readiness score based on 90-day behaviour", icon: Star, color: "from-[#E9521C] to-orange-600" },
              { step: "04", title: "Banking Products", desc: "Qualified users unlock Instant Money, Wallet & Savings accounts", icon: Wallet, color: "from-green-500 to-green-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-gray-100 z-0" style={{ width: "calc(100% - 2rem)", left: "calc(100% - 1rem)" }} />
                )}
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 shadow-md`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-xs font-bold text-gray-300 mb-1">Step {item.step}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Banking Products unlocked */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Entry-Level Banking Products</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Instant Money", desc: "Immediate cash transfer capability for users who demonstrate 60-day savings consistency.", icon: Zap, badge: "60-day readiness", color: "border-blue-200 bg-blue-50" },
                { title: "Digital Wallet", desc: "Full digital wallet access unlocked after completing financial literacy modules & behaviour verification.", icon: Wallet, badge: "Module completion", color: "border-purple-200 bg-purple-50" },
                { title: "Savings Account", desc: "Formal savings account with Stanbic for users maintaining a readiness score above 70.", icon: PiggyBank, badge: "Score 70+", color: "border-green-200 bg-green-50" },
              ].map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`border-2 ${product.color} rounded-2xl p-6 transition-all duration-300`}
                >
                  <product.icon className="w-8 h-8 text-gray-700 mb-4" />
                  <h4 className="font-bold text-gray-900 text-lg mb-2">{product.title}</h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold bg-white/80 text-gray-700 border border-gray-200 rounded-full px-3 py-1">
                    <Lock className="w-3 h-3" /> Unlocked after: {product.badge}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Alternative Data for Loans / Credit Scoring ──────────────────────── */}
      <section id="credit" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionBadge icon={CreditCard} label="Alternative Credit Scoring" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Loans Without <span className="text-[#E9521C]">Traditional Credit History</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nthoppa uses behavioural and transactional data to build credit profiles for the unbanked — enabling access to formal loans.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Score Methodology */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Credit Scoring Methodology</h3>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-wrap gap-6 justify-center mb-8">
                  {creditScoreData.map((item) => (
                    <RadialBar key={item.label} label={item.label} value={item.value} color={item.color} />
                  ))}
                </div>
                <div className="space-y-3">
                  {creditScoreData.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium text-gray-700">{item.label}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.value}/100</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          viewport={{ once: true }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Integrations */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Credit Integration Partners</h3>
              <div className="space-y-6">
                {/* CreditYame */}
                <div className="bg-white border-2 border-blue-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center">
                      <CreditCard className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">CreditYame</h4>
                      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Formal Sector</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Integrates with traditional employment records, payslips & formal banking data to build credit profiles for salaried workers.</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ label: "Payslip Verified", val: "4,200" }, { label: "Avg Score", val: "724" }, { label: "Loan Approved", val: "68%" }].map((s) => (
                      <div key={s.label} className="text-center bg-blue-50 rounded-xl p-3">
                        <p className="font-bold text-blue-700 text-lg">{s.val}</p>
                        <p className="text-xs text-gray-500">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* iPatchi */}
                <div className="bg-white border-2 border-orange-100 rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center">
                      <Store className="w-7 h-7 text-[#E9521C]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">iPatchi</h4>
                      <span className="text-xs font-semibold text-[#E9521C] bg-orange-50 px-2 py-0.5 rounded-full">Informal Sector</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">Collects transactional and behavioural data from informal traders — market vendors, tuck shops, hawkers — to generate alternative credit scores.</p>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ label: "Traders Tracked", val: "8,342" }, { label: "Avg Score", val: "671" }, { label: "Pipeline Ready", val: "42%" }].map((s) => (
                      <div key={s.label} className="text-center bg-orange-50 rounded-xl p-3">
                        <p className="font-bold text-[#E9521C] text-lg">{s.val}</p>
                        <p className="text-xs text-gray-500">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SME Pipeline Development ─────────────────────────────────────────── */}
      <section id="sme" className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionBadge icon={TrendingUp} label="SME Pipeline" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">From <span className="text-[#E9521C]">Informal Trader</span> to Enterprise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Nthoppa identifies micro-entrepreneurs and guides them through a structured pipeline into Stanbic's business banking ecosystem.</p>
          </motion.div>

          {/* Funnel */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="space-y-4">
              {smeStages.map((stage, i) => {
                const widths = ["w-full", "w-5/6", "w-3/5", "w-2/5"]
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="mx-auto flex justify-center"
                    style={{ width: "100%" }}
                  >
                    <div className={`${widths[i]} bg-gradient-to-r ${stage.color} rounded-2xl p-5 flex items-center gap-4 shadow-lg`}>
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                        <stage.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-white text-lg">{stage.label}</p>
                        <p className="text-white/80 text-sm truncate">{stage.desc}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-bold text-white text-2xl">{stage.count}</p>
                        <p className="text-white/70 text-xs">users</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
              <ChevronDown className="w-4 h-4 text-[#E9521C]" />
              <span>Funnel narrows as users meet criteria for the next stage</span>
            </div>
          </div>

          {/* How it works */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Identify", desc: "iPatchi flags traders with consistent income patterns, savings behaviour & 90+ day activity.", icon: Target, color: "text-[#E9521C]" },
              { title: "Qualify", desc: "Nthoppa assigns a business readiness score. Those scoring 65+ are earmarked for Stanbic outreach.", icon: UserCheck, color: "text-blue-600" },
              { title: "Graduate", desc: "Qualified SMEs are introduced to Stanbic's business banking suite — accounts, credit lines & merchant services.", icon: Building2, color: "text-green-600" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <item.icon className={`w-8 h-8 ${item.color} mb-4`} />
                <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accelerate Incubator Feeder ──────────────────────────────────────── */}
      <section id="incubator" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#E9521C]/20 text-[#E9521C] px-4 py-2 rounded-full mb-6 font-semibold text-sm">
              <Zap className="w-4 h-4" />
              Accelerate Incubator Feeder
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Entrepreneur <span className="text-[#E9521C]">Readiness Assessment</span></h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Nthoppa feeds pre-qualified, high-potential entrepreneurs into the Accelerate Incubator Programme through structured readiness scoring.</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Readiness Criteria */}
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-white mb-6">Readiness Assessment Criteria</h3>
              <div className="space-y-4">
                {[
                  { label: "Financial Literacy Score", weight: "25%", score: 82, color: "#10b981" },
                  { label: "Business Idea Clarity", weight: "20%", score: 74, color: "#3b82f6" },
                  { label: "Savings Discipline", weight: "20%", score: 88, color: "#E9521C" },
                  { label: "Digital Engagement", weight: "15%", score: 65, color: "#8b5cf6" },
                  { label: "Market Awareness", weight: "20%", score: 71, color: "#f59e0b" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="bg-white/5 rounded-xl p-4"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white text-sm font-medium">{item.label}</span>
                      <div className="flex gap-3 text-xs">
                        <span className="text-gray-400">Weight: {item.weight}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.score}/100</span>
                      </div>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.score}%` }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Programme Quality */}
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h3 className="text-xl font-bold text-white mb-6">Programme Quality Metrics</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Entrepreneurs Assessed", value: "2,840", icon: Users, color: "text-blue-400" },
                  { label: "Referred to Accelerate", value: "412", icon: ArrowRight, color: "text-[#E9521C]" },
                  { label: "Programme Graduates", value: "189", icon: Trophy, color: "text-yellow-400" },
                  { label: "Businesses Launched", value: "134", icon: Zap, color: "text-green-400" },
                ].map((metric, i) => (
                  <div key={i} className="bg-white/5 rounded-2xl p-5 border border-white/10">
                    <metric.icon className={`w-6 h-6 ${metric.color} mb-3`} />
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className="text-gray-400 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-[#E9521C]/20 to-[#E9521C]/5 rounded-2xl p-6 border border-[#E9521C]/20">
                <h4 className="font-bold text-white text-lg mb-4">Qualification Threshold</h4>
                <div className="space-y-3">
                  {[
                    { label: "Minimum Readiness Score", value: "70/100" },
                    { label: "Minimum Savings Streak", value: "90 days" },
                    { label: "App Engagement", value: "Weekly active" },
                    { label: "Module Completion", value: "80% minimum" },
                  ].map((req) => (
                    <div key={req.label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                      <span className="text-gray-300 text-sm">{req.label}</span>
                      <span className="font-bold text-[#E9521C] text-sm">{req.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Offerings Section ────────────────────────────────────────────────── */}
      <section id="offerings" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What Nthoppa Offers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to take control of your financial future — education, marketplace access, rewards, and smart tools all in one app.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Financial Education", desc: "Learn money management through easy-to-understand courses. Complete modules like 'Money 101' and earn 25 coins per course.", icon: GraduationCap, color: "text-blue-600", bg: "bg-blue-50" },
              { title: "Insurance Marketplace", desc: "Access life, car, and medical insurance from trusted providers like Liberty, Old Mutual, Hollard, and Guardrisk.", icon: Shield, color: "text-green-600", bg: "bg-green-50" },
              { title: "Nthoppa Coins & Rewards", desc: "Earn coins by learning and using the app. Redeem for insurance discounts, airtime, DStv subscriptions, and cash prizes.", icon: Coins, color: "text-[#E9521C]", bg: "bg-[#E9521C]/10" },
              { title: "Financial Calculators", desc: "Budget planner, investment calculator, premium estimator, and savings tools to help you make smarter financial decisions.", icon: Calculator, color: "text-purple-600", bg: "bg-purple-50" },
            ].map((o, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#E9521C]"
              >
                <div className={`w-16 h-16 ${o.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <o.icon className={`w-8 h-8 ${o.color}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{o.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{o.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Dashboard ───────────────────────────────────────────────── */}
      <section id="dashboard" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12">
            <SectionBadge icon={LayoutDashboard} label="Partner Dashboard" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Internal <span className="text-[#E9521C]">Analytics Dashboard</span></h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real-time visibility into user behaviour, credit scoring, SMME pipelines, and merchant activity for our banking partners.</p>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {dashboardStats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {(["overview", "credit", "sme", "merchants"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold capitalize whitespace-nowrap transition-all ${activeTab === tab ? "bg-[#E9521C] text-white shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:border-[#E9521C]/40"}`}
              >
                {tab === "sme" ? "SMME Pipeline" : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Overview: Behavioural Tracking */}
            {activeTab === "overview" && (
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#E9521C]" /> Behavioural Tracking Overview
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Bar chart simulation */}
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-4">Monthly Active Users (Last 6 Months)</p>
                    <div className="flex items-end gap-3 h-40">
                      {[{ m: "Nov", v: 60 }, { m: "Dec", v: 74 }, { m: "Jan", v: 68 }, { m: "Feb", v: 85 }, { m: "Mar", v: 91 }, { m: "Apr", v: 100 }].map((bar, i) => (
                        <div key={i} className="flex flex-col items-center gap-1 flex-1">
                          <span className="text-xs font-bold text-gray-500">{Math.round(bar.v * 249)}</span>
                          <motion.div
                            initial={{ height: 0 }}
                            whileInView={{ height: `${bar.v}%` }}
                            transition={{ duration: 0.8, delay: i * 0.08 }}
                            viewport={{ once: true }}
                            className="w-full rounded-t-lg bg-gradient-to-t from-[#E9521C] to-orange-400"
                            style={{ minHeight: 4 }}
                          />
                          <span className="text-xs text-gray-400">{bar.m}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Partner logos */}
                  <div>
                    <p className="text-sm font-semibold text-gray-600 mb-4">Active Partner Integrations</p>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "CreditYame", status: "Live", color: "bg-blue-50 text-blue-700 border-blue-200" },
                        { name: "iPatchi", status: "Live", color: "bg-orange-50 text-[#E9521C] border-orange-200" },
                        { name: "Stanbic Bank", status: "Live", color: "bg-green-50 text-green-700 border-green-200" },
                        { name: "Accelerate", status: "Live", color: "bg-purple-50 text-purple-700 border-purple-200" },
                        { name: "Liberty", status: "Live", color: "bg-gray-50 text-gray-700 border-gray-200" },
                        { name: "NthoppaSure", status: "Beta", color: "bg-yellow-50 text-yellow-700 border-yellow-200" },
                      ].map((p) => (
                        <div key={p.name} className={`flex items-center justify-between border rounded-xl px-3 py-2 ${p.color}`}>
                          <span className="font-semibold text-sm">{p.name}</span>
                          <span className="text-xs font-bold">{p.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Credit scoring display */}
            {activeTab === "credit" && (
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-[#E9521C]" /> Credit Scoring Data — CreditYame &amp; iPatchi
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">User</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Source</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Savings Score</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Income Score</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Overall</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: "Mpho K.", source: "iPatchi", savings: 78, income: 72, overall: 756, status: "Eligible" },
                        { name: "Dineo S.", source: "CreditYame", savings: 84, income: 88, overall: 801, status: "Approved" },
                        { name: "Tshepho M.", source: "iPatchi", savings: 61, income: 55, overall: 634, status: "Building" },
                        { name: "Kagiso T.", source: "CreditYame", savings: 91, income: 94, overall: 843, status: "Approved" },
                        { name: "Naledi S.", source: "iPatchi", savings: 55, income: 48, overall: 589, status: "Building" },
                        { name: "Boitumelo R.", source: "CreditYame", savings: 76, income: 81, overall: 774, status: "Eligible" },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3 px-4 font-medium text-gray-900">{row.name}</td>
                          <td className="py-3 px-4">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.source === "iPatchi" ? "bg-orange-50 text-[#E9521C]" : "bg-blue-50 text-blue-700"}`}>{row.source}</span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${row.savings}%` }} />
                              </div>
                              <span className="text-gray-700">{row.savings}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${row.income}%` }} />
                              </div>
                              <span className="text-gray-700">{row.income}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 font-bold text-gray-900">{row.overall}</td>
                          <td className="py-3 px-4">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.status === "Approved" ? "bg-green-50 text-green-700" : row.status === "Eligible" ? "bg-yellow-50 text-yellow-700" : "bg-gray-100 text-gray-500"}`}>{row.status}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* SMME Pipeline via iPatchi */}
            {activeTab === "sme" && (
              <div className="p-6">
                <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
                  <Store className="w-5 h-5 text-[#E9521C]" /> SMME Pipelining via iPatchi
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100">
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Trader Name</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Trade Type</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Business Score</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Months Active</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Pipeline Status</th>
                        <th className="text-left py-3 px-4 text-gray-500 font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {iPatchiUsers.map((user, i) => (
                        <tr key={i} className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors">
                          <td className="py-3 px-4 font-medium text-gray-900">{user.name}</td>
                          <td className="py-3 px-4 text-gray-600">{user.trade}</td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                  className="h-full rounded-full"
                                  style={{ width: `${user.score}%`, backgroundColor: user.score >= 80 ? "#10b981" : user.score >= 65 ? "#E9521C" : "#6b7280" }}
                                />
                              </div>
                              <span className="font-bold text-gray-800">{user.score}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{user.months} mo.</td>
                          <td className="py-3 px-4">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                              user.status === "Banking" ? "bg-green-50 text-green-700" :
                              user.status === "Pipeline" ? "bg-blue-50 text-blue-700" :
                              user.status === "Qualified" ? "bg-yellow-50 text-yellow-700" :
                              "bg-gray-100 text-gray-500"
                            }`}>{user.status}</span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-[#E9521C] text-xs font-bold hover:underline">View Profile</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Merchant Accounts + NthoppaSure */}
            {activeTab === "merchants" && (
              <div className="p-6">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Merchant Accounts */}
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
                      <ShoppingBag className="w-5 h-5 text-[#E9521C]" /> Merchant Accounts
                    </h3>
                    <div className="space-y-3">
                      {merchantAccounts.map((m, i) => (
                        <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#E9521C]/10 rounded-xl flex items-center justify-center">
                              <Store className="w-5 h-5 text-[#E9521C]" />
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900 text-sm">{m.name}</p>
                              <p className="text-xs text-gray-500">{m.type} · {m.transactions} txns</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-900 text-sm">{m.revenue}</p>
                            <span className={`text-xs font-bold ${m.status === "Active" ? "text-green-600" : "text-yellow-600"}`}>{m.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* NthoppaSure */}
                  <div>
                    <h3 className="font-bold text-gray-900 text-xl mb-6 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-purple-600" /> NthoppaSure Division
                    </h3>
                    <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl p-6 text-white mb-4">
                      <p className="text-sm text-purple-200 mb-1">Fintech Marketplace</p>
                      <h4 className="text-2xl font-bold mb-3">NthoppaSure</h4>
                      <p className="text-sm text-purple-100 leading-relaxed mb-4">An embedded fintech marketplace offering micro-insurance, digital payments, and value-added services through the Nthoppa platform.</p>
                      <div className="grid grid-cols-2 gap-3">
                        {[{ label: "Products Listed", val: "34" }, { label: "Active Policies", val: "1,842" }, { label: "Avg. Premium", val: "P 89/mo" }, { label: "Claims Settled", val: "98%" }].map((s) => (
                          <div key={s.label} className="bg-white/10 rounded-xl p-3">
                            <p className="font-bold text-xl">{s.val}</p>
                            <p className="text-purple-200 text-xs">{s.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-2">
                      {[
                        { product: "Micro Life Cover", provider: "Metropolitan", premium: "P 65/mo", policies: 412 },
                        { product: "Funeral Plan", provider: "Hollard", premium: "P 89/mo", policies: 674 },
                        { product: "Device Insurance", provider: "Guardrisk", premium: "P 120/mo", policies: 289 },
                        { product: "Travel Cover", provider: "BIC", premium: "P 45/mo", policies: 156 },
                      ].map((p, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl text-sm border border-gray-100">
                          <div>
                            <p className="font-semibold text-gray-900">{p.product}</p>
                            <p className="text-xs text-gray-500">{p.provider}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-purple-700">{p.premium}</p>
                            <p className="text-xs text-gray-400">{p.policies} policies</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Gamification & Rewards ───────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
            <SectionBadge icon={Trophy} label="Earn Rewards" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get Rewarded for Learning</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Every action you take on Nthoppa earns you coins. Redeem them for real rewards and discounts.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Insurance Discounts", desc: "Get 10-20% off on medical aid, car insurance, and life insurance using your Nthoppa Coins.", coins: "800-1500 coins", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Smartphone, title: "Airtime & Data", desc: "Redeem coins for airtime, data bundles, and DStv subscriptions at discounted rates.", coins: "500-2000 coins", color: "text-[#E9521C]", bg: "bg-[#E9521C]/10" },
              { icon: Gift, title: "Cash Prizes", desc: "Convert your coins into real cash prizes and withdraw directly to your account.", coins: "2500+ coins", color: "text-green-600", bg: "bg-green-50" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <div className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <Coins className="w-4 h-4" />{item.coins}
                </div>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-[#E9521C]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Financial Journey Today
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }} className="text-xl text-white/90 mb-8">
            Join thousands who are already building better financial futures with Nthoppa.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} viewport={{ once: true }} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black hover:bg-white hover:text-[#E9521C] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg rounded-xl" asChild>
              <a href="https://play.google.com/store/apps/details?id=com.nthoppa.fintech&hl=en" target="_blank" rel="noopener noreferrer">Download on Google Play</a>
            </Button>
            <Button size="lg" className="bg-white text-[#E9521C] hover:bg-black hover:text-white px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg rounded-xl" onClick={() => scrollTo("dashboard")}>
              View Partner Dashboard
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────────── */}
      <footer className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-yJgmEhLf71bDEpve60wls9cJoQUyOp.png" alt="Nthoppa Logo" className="h-10 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400 text-sm leading-relaxed">Empowering the unbanked with financial education, credit access, and SME development across Southern Africa.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button onClick={() => scrollTo(link.id)} className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">{link.label}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Legal</h4>
              <ul className="space-y-2">
                {["Terms & Conditions", "Privacy Policy", "Cookie Policy", "Disclaimer"].map((item) => (
                  <li key={item}><a href="#" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3"><Mail className="w-5 h-5 text-[#E9521C] flex-shrink-0 mt-0.5" /><a href="mailto:info@nthoppa.com" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">info@nthoppa.com</a></li>
                <li className="flex items-start gap-3"><Phone className="w-5 h-5 text-[#E9521C] flex-shrink-0 mt-0.5" /><a href="tel:+26771234567" className="text-gray-400 hover:text-[#E9521C] transition-colors text-sm">+267 7123 4567</a></li>
                <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-[#E9521C] flex-shrink-0 mt-0.5" /><span className="text-gray-400 text-sm">Gaborone, Botswana</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-center mb-6">
              <Button className="bg-[#E9521C] hover:bg-white hover:text-[#E9521C] text-white px-8 py-4 text-base font-semibold transition-all duration-300 rounded-xl" asChild>
                <a href="/dashboard">Nthoppa Agents Portal</a>
              </Button>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">© 2025 Nthoppa. All rights reserved.</p>
              <div className="flex gap-3">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#E9521C] flex items-center justify-center transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Floating Download CTA ────────────────────────────────────────────── */}
      {isFloatingCardVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-gradient-to-br from-[#E9521C] to-black rounded-2xl shadow-2xl p-5 max-w-xs relative">
            <button onClick={() => setIsFloatingCardVisible(false)} className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <X className="w-4 h-4 text-white" />
            </button>
            <h3 className="text-white font-bold text-lg mb-1">Download Nthoppa</h3>
            <p className="text-white/80 text-sm mb-4">Get started with financial freedom today!</p>
            <Button size="sm" className="w-full bg-white hover:bg-gray-100 text-[#E9521C] font-semibold rounded-xl" asChild>
              <a href="https://play.google.com/store/apps/details?id=com.nthoppa.fintech&hl=en" target="_blank" rel="noopener noreferrer">
                Download on Google Play
              </a>
            </Button>
          </div>
        </motion.div>
      )}

      {/* ── Subscribe Modal ─────────────────────────────────────────────────── */}
      <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Subscribe to Nthoppa</DialogTitle>
            <DialogDescription>Enter your email to subscribe to updates and exclusive offers.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
          </div>
          <DialogFooter className="flex gap-2">
            <Button variant="outline" onClick={() => setIsSubscribeOpen(false)}>Cancel</Button>
            <Button onClick={handleSubscribe} className="bg-[#E9521C] hover:bg-black text-white transition-colors">Subscribe</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
