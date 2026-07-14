"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { PhoneMockup } from "@/components/phone-mockup"
import { AnimatedTechIcon } from "@/components/animated-tech-icon"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Star,
  Calendar,
  Building,
  GraduationCap,
  Menu,
  X,
  Eye,
  Code,
  Smartphone,
  Trophy,
  Users,
  Shield,
  Award,
  ArrowRight,
  Sparkles,
  Zap as ZapIcon,
  Target,
  Rocket,
  ChevronRight,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import {
  personalInfo,
  skills,
  experiences,
  projects,
  openSourceProjects,
  education,
  achievementsData,
  achievements,
  services,
  certifications,
} from "@/data/portfolio-data"
import { useRouter } from "next/navigation"
import { logCustomEvent } from "@/lib/firebase"

// Framer motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [selectedSkillCategory, setSelectedSkillCategory] = useState<string>("all")

  const featuredProjects = projects.filter((project) => project.featured)
  const router = useRouter()

  const parseDownloadString = (downloadString?: string) => {
    if (!downloadString) return 0
    const normalized = downloadString.trim().replace(/\+/g, "").replace(/,/g, "").toLowerCase()
    const match = normalized.match(/^([0-9]+(?:\.[0-9]+)?)([km]?)$/)

    if (!match) return 0

    const value = parseFloat(match[1])
    const suffix = match[2]

    if (suffix === "k") return Math.round(value * 1000)
    if (suffix === "m") return Math.round(value * 1000000)

    return Math.round(value)
  }

  const formatDownloadTotal = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1).replace(/\.0$/, "")}M+`
    }

    if (count >= 1000) {
      return `${(count / 1000).toFixed(1).replace(/\.0$/, "")}K+`
    }

    return `${count}+`
  }

  const totalDownloads = projects.reduce((sum, project) => sum + parseDownloadString(project.stats?.downloads), 0)
  const totalDownloadsLabel = formatDownloadTotal(totalDownloads)

  // Collect some screenshot highlights for the Hero mockup
  const heroScreenshots = [
    "/images/projects/portfolio_app/about.png",
    "/images/projects/hey_smarty/mockups/android/04.jpg",
    "/images/projects/padzee/mockups/android/02.png",
    "/images/projects/multi_timer_stopwatch/mockups/android/01.jpg",
    "/images/projects/serpent_tales/mockups/android/01.png",
  ].filter(Boolean)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "experience", "portfolio", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setShowScrollTop(window.scrollY > 200)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // Filter skills by category
  const categories = ["all", "programming", "framework", "platform", "database", "tool"]
  const filteredSkills = selectedSkillCategory === "all" 
    ? skills 
    : skills.filter(s => s.category === selectedSkillCategory)

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative selection:bg-purple-500/30 selection:text-purple-200 bg-dot-pattern">
      {/* Background radial glowing circles (Linear-style) */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-[130px] pointer-events-none z-0" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-xl z-50 border-b border-border/60 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl font-agustina font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                onClick={() => scrollToSection("home")}
              >
                {`< ${personalInfo.name} />`}
              </motion.div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {["home", "about", "services", "experience", "portfolio", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                    activeSection === item
                      ? "bg-zinc-800 text-white shadow-inner border border-zinc-700/60"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="pl-4 flex items-center border-l border-zinc-800/80 ml-2">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card/50 border border-border/50"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-zinc-800/60"
            >
              <div className="px-3 pt-2 pb-3 space-y-1 bg-zinc-950/95 backdrop-blur-xl">
                {["home", "about", "services", "experience", "portfolio", "contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-semibold tracking-wider uppercase w-full text-left transition-colors ${
                      activeSection === item
                        ? "bg-zinc-800 text-white border border-zinc-700"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  Available for Senior Roles
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none text-white">
                  Crafting Premium <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Mobile Experiences
                  </span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl text-zinc-300 font-semibold tracking-wide">
                  {personalInfo.title}
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
              >
                {personalInfo.summary}
              </motion.p>

              {/* Floating Tech Badges for Hero */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-2.5 justify-center lg:justify-start"
              >
                {["Flutter", "Kotlin", "iOS", "Android", "Firebase"].map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/60 border border-border/80 text-xs text-muted-foreground">
                    <AnimatedTechIcon name={tech} size={14} />
                    <span>{tech}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
              >
                <Button
                  size="lg"
                  onClick={() => {
                    scrollToSection("portfolio")
                    logCustomEvent("cta_view_work_click")
                  }}
                  className="w-full sm:w-auto bg-white text-black dark:bg-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-800 px-8 py-6 rounded-full font-semibold shadow-lg shadow-white/5 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                  className="w-full sm:w-auto px-8 py-6 rounded-full border-border text-muted-foreground hover:text-foreground hover:bg-card/50 hover:border-border transition-all duration-300 font-semibold bg-transparent"
                >
                  Let's Connect
                </Button>
              </motion.div>

              {/* Social Channels */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center lg:justify-start gap-4 pt-4"
              >
                {[
                  { href: `mailto:${personalInfo.email}`, icon: Mail, label: "Email" },
                  { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn" },
                  { href: personalInfo.github, icon: Github, label: "GitHub" },
                ].map(({ href, icon: Icon, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    className="p-3.5 rounded-full bg-zinc-900/60 border border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-white transition-all duration-300 shadow-md hover:scale-105"
                    onClick={() => {
                      logCustomEvent("contact_button_click", {
                        contact_type: label.toLowerCase(),
                        url: href,
                      })
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                ))}
              </motion.div>
            </div>

            {/* Smartphone Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center perspective-[1000px]"
            >
              <PhoneMockup screenshots={heroScreenshots} appName="Featured Apps" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Bento Section */}
      <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Target className="w-3.5 h-3.5" />
              About Me
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Senior Mobile Engineer
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Bringing ideas to life on Android & iOS screens with robust engineering
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Big Card: Summary & Biography */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 glass-card rounded-3xl p-8 sm:p-10 flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-purple-400">
                  <Rocket className="w-6 h-6" />
                  <h3 className="text-xl font-bold text-white">Professional Biography</h3>
                </div>
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base font-normal">
                  {personalInfo.about}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-zinc-800/60 text-center sm:text-left">
                <div>
                  <h4 className="text-3xl font-extrabold text-white">6+ Years</h4>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Experience</p>
                </div>
                <div>
                  <h4 className="text-3xl font-extrabold text-white">{projects.length}+ Apps</h4>
                  <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">Published</p>
                </div>
              </div>
            </motion.div>

            {/* Right Stack: Education, Key achievements, Contact bento */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Education Bento */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-6 sm:p-8 flex gap-4 items-start"
              >
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-2xl">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Education</h4>
                  {education.slice(0, 1).map((edu, idx) => (
                    <div key={idx} className="space-y-1">
                      <h5 className="font-bold text-white text-base leading-tight">{edu.degree}</h5>
                      <p className="text-sm text-zinc-400">{edu.institution} • {edu.year}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Quick info */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-6 sm:p-8 flex gap-4 items-start"
              >
                <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">Contact Details</h4>
                  <div className="space-y-1 text-sm text-zinc-400">
                    <p className="font-medium text-white">{personalInfo.location}</p>
                    <p>{personalInfo.email}</p>
                    <p>{personalInfo.phone}</p>
                  </div>
                </div>
              </motion.div>

              {/* Key Achievements lists */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-6 sm:p-8 flex-1 flex flex-col justify-center"
              >
                <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-500 mb-4">Milestones</h4>
                <div className="space-y-3">
                  {achievementsData.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* Interactive Skills Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
              <ZapIcon className="w-3.5 h-3.5" />
              Skills
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Tech Ecosystem
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Robust set of modern tools and systems I use to deliver commercial mobile apps
            </p>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 pt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedSkillCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border transition-all duration-300 ${
                    selectedSkillCategory === cat
                      ? "bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-500/10"
                      : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                  }`}
                >
                  {cat === "all" ? "All Tech" : cat}
                </button>
              ))}
            </div>
          </div>

          {/* Staggered Skills Grid */}
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  layout
                  key={skill.name}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  className="glass-card rounded-2xl p-5 flex items-center gap-3.5 border border-zinc-850 hover:border-zinc-750 transition-all duration-300"
                >
                  <div className="p-2.5 bg-zinc-900 rounded-xl text-zinc-300">
                    <AnimatedTechIcon name={skill.name} size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{skill.name}</h4>
                    <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Sparkles className="w-3.5 h-3.5" />
              Services
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Consulting & Delivery
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              End-to-end services designed to bootstrap app ideas to market-ready deployments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 flex flex-col justify-between border-glow-blue hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="space-y-6">
                  {/* Service Icon */}
                  <div className="w-14 h-14 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform duration-300">
                    <AnimatedTechIcon name={service.icon} size={28} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="border-t border-zinc-850 mt-8 pt-6">
                  <ul className="space-y-3">
                    {service.features.map((feat, featIdx) => (
                      <li key={featIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experience" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
              <Building className="w-3.5 h-3.5" />
              Journey
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Professional Journey
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              A historical archive of my senior software development positions and contracts
            </p>
          </div>

          <div className="relative border-l border-zinc-800/80 pl-6 sm:pl-8 space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                {/* Timeline Connector node */}
                <div className="absolute left-[-35px] sm:left-[-43px] top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse" />
                </div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4 hover:border-zinc-800 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {exp.position}
                      </h3>
                      <p className="text-sm text-zinc-400 flex items-center gap-1.5 mt-0.5">
                        <Building className="w-4 h-4 text-zinc-500" />
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <Badge className="bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs py-1 px-2.5 w-fit">
                      <Calendar className="w-3.5 h-3.5 mr-1" />
                      {exp.duration}
                    </Badge>
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-zinc-850">
                    {exp.achievements.map((ach, achIdx) => (
                      <li key={achIdx} className="flex gap-2.5 items-start text-xs sm:text-sm text-zinc-400">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900 bg-zinc-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <Code className="w-3.5 h-3.5" />
              Work
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Featured Work
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              A detailed showcase of flagship products deployed to production
            </p>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-zinc-800 transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Banner wrapper */}
                <div className="relative h-44 w-full overflow-hidden bg-zinc-900">
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Image
                    src={project.bannerImage || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-1.5">
                    {project.platforms.map((p) => (
                      <Badge
                        key={p}
                        className={`border-0 text-white ${
                          p === "Android" ? "bg-green-600/90" : p === "iOS" ? "bg-blue-600/90" : "bg-zinc-700/90"
                        }`}
                      >
                        {p}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <Badge variant="outline" className="border-zinc-800 text-zinc-400">
                        {project.type}
                      </Badge>
                      <span className="text-zinc-500">{project.company}</span>
                    </div>

                    <Link
                      href={`/projects/${project.id}`}
                      onClick={() => {
                        logCustomEvent("project_click", {
                          project_id: project.id,
                          project_name: project.name,
                        })
                      }}
                    >
                      <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                        {project.name}
                      </h3>
                    </Link>
                    <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech sub list */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-zinc-900 border border-zinc-850 rounded text-zinc-400">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] px-2 py-0.5 bg-zinc-900 border border-zinc-850 rounded text-zinc-500">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Bottom Actions inside Card */}
                    <div className="flex items-center justify-between pt-4 border-t border-zinc-850">
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                      >
                        <Link
                          href={`/projects/${project.id}`}
                          onClick={() => {
                            logCustomEvent("project_click", {
                              project_id: project.id,
                              project_name: project.name,
                              source: "view_details_button",
                            })
                          }}
                        >
                          <Eye className="w-3.5 h-3.5 mr-1.5" />
                          Details
                        </Link>
                      </Button>

                      {/* Store shortcuts */}
                      <div className="flex gap-1">
                        {project.storeLinks.map((link, idx) => (
                          <Button
                            key={idx}
                            size="sm"
                            variant="outline"
                            asChild
                            className={`w-7 h-7 p-0 bg-zinc-900 border-zinc-850 hover:bg-zinc-800 hover:text-white`}
                            title={`Store link - ${link.store}`}
                          >
                            <Link
                              href={link.url}
                              target="_blank"
                              onClick={() => {
                                logCustomEvent("project_external_link_click", {
                                  project_id: project.id,
                                  project_name: project.name,
                                  link_type: link.store.toLowerCase().replace(" ", "_"),
                                  url: link.url,
                                  source: "project_card",
                                })
                              }}
                            >
                              <AnimatedTechIcon name={link.platform} size={14} />
                            </Link>
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {featuredProjects.length > 6 && (
            <div className="flex justify-center mt-12">
              <Button
                onClick={() => router.push("/projects")}
                className="px-8 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all shadow-md"
              >
                Show All Projects
              </Button>
            </div>
          )}

          {/* Open Source Contributions subgrid */}
          <div className="mt-28">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-10 text-center flex items-center justify-center gap-2">
              <Github className="w-6 h-6" />
              Open Source Contributions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openSourceProjects.map((p, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-6 space-y-4 hover:border-zinc-800 transition-all duration-300"
                >
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-zinc-850 text-zinc-400 uppercase tracking-widest text-[9px] py-0.5 px-2">
                      {p.type}
                    </Badge>
                    <Github className="w-4 h-4 text-zinc-600" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-base leading-snug">{p.name}</h4>
                    <p className="text-xs text-zinc-400 line-clamp-2">{p.description}</p>
                  </div>
                  <Button
                    size="sm"
                    variant="link"
                    asChild
                    className="p-0 h-auto text-purple-400 hover:text-purple-300 hover:no-underline text-xs flex items-center gap-1 w-fit"
                  >
                    <Link
                      href={p.url}
                      target="_blank"
                      onClick={() => {
                        logCustomEvent("project_external_link_click", {
                          project_id: p.name.toLowerCase().replace(" ", "_"),
                          project_name: p.name,
                          link_type: "github",
                          url: p.url,
                          source: "open_source_card",
                        })
                      }}
                    >
                      View Repository
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Bento */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
              <Trophy className="w-3.5 h-3.5" />
              Recognition
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Achievements & Certifications
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Milestones and credentials validated by industry publishers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Achievements Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 px-2 uppercase tracking-widest text-zinc-500">
                <Trophy className="w-5 h-5 text-purple-400" />
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-5 flex gap-4 items-start border-glow-purple hover:border-zinc-800 transition-all duration-300"
                  >
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-purple-400 flex-shrink-0">
                      <AnimatedTechIcon name={ach.icon} size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base leading-tight">{ach.title}</h4>
                      <p className="text-xs sm:text-sm text-zinc-400">{ach.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4 px-2 uppercase tracking-widest text-zinc-500">
                <Award className="w-5 h-5 text-blue-400" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-5 flex gap-4 items-start border-glow-blue hover:border-zinc-800 transition-all duration-300"
                  >
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-blue-400 flex-shrink-0">
                      <AnimatedTechIcon name={cert.icon} size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base leading-tight">{cert.name}</h4>
                      <p className="text-xs sm:text-sm text-zinc-450">{cert.issuer}</p>
                      <p className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">{cert.date}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Stats Board Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-zinc-900 bg-zinc-950/40 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center space-y-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400">
              <TrendingUp className="w-3.5 h-3.5" />
              Impact
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">Numbers That Matter</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { val: `${projects.length}+`, title: "Published Projects", desc: "Native & Flutter deployments" },
              { val: totalDownloadsLabel, title: "Total Downloads", desc: "Cumulative app downloads across projects" },
              { val: `${Array.from(new Set([...projects.map((p) => p.company), ...experiences.map((e) => e.company)])).length}+`, title: "Satisfied Clients", desc: "Corporate companies & organizations" },
              { val: "6+", title: "Years Experience", desc: "Professional software engineering" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 space-y-2 border border-zinc-850 hover:border-zinc-800 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.val}
                </div>
                <h4 className="font-bold text-white text-base pt-2">{stat.title}</h4>
                <p className="text-xs sm:text-sm text-zinc-500">{stat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative z-10 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
              <Mail className="w-3.5 h-3.5" />
              Contact
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Let's Build Something Great
            </h2>
            <p className="text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
              Ready to take your product to Google Play and Apple App Store? Hit me up.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Email Bento */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-zinc-850 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 bg-zinc-900 rounded-xl flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Email Address</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">Shoot me an email and I'll get back shortly.</p>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-850 hover:border-zinc-700 py-6 rounded-2xl font-semibold shadow-inner"
              >
                <Link
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => {
                    logCustomEvent("contact_button_click", {
                      contact_type: "mail",
                      url: `mailto:${personalInfo.email}`,
                    })
                  }}
                >
                  {personalInfo.email}
                </Link>
              </Button>
            </motion.div>

            {/* Call Bento */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-zinc-850 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="w-11 h-11 bg-zinc-900 rounded-xl flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Direct Call</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">Give me a call to discuss project details.</p>
                </div>
              </div>
              <Button
                asChild
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-850 hover:border-zinc-700 py-6 rounded-2xl font-semibold shadow-inner"
              >
                <Link
                  href={`tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`}
                  onClick={() => {
                    logCustomEvent("contact_button_click", {
                      contact_type: "phone",
                      url: `tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`,
                    })
                  }}
                >
                  {personalInfo.phone}
                </Link>
              </Button>
            </motion.div>

          </div>

          <div className="flex justify-center gap-4">
            {[
              { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", color: "from-blue-600 to-indigo-600" },
              { href: personalInfo.github, icon: Github, label: "GitHub", color: "from-zinc-800 to-zinc-900" },
            ].map(({ href, icon: Icon, label, color }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${color} border border-white/5 text-white rounded-full shadow-lg hover:scale-105 transition-all duration-300 text-xs sm:text-sm font-semibold`}
                onClick={() => {
                  logCustomEvent("contact_button_click", {
                    contact_type: label.toLowerCase(),
                    url: href,
                  })
                }}
              >
                <Icon className="h-4.5 w-4.5" />
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900/60 relative z-10 bg-zinc-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center text-xs sm:text-sm text-zinc-500 space-y-2">
          <p>© 2026 {personalInfo.name}. All rights reserved.</p>
          <p>
            Designed with precision. Deployed on Github Pages.
          </p>
        </div>
      </footer>

      {/* Scroll Top Shortcut */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-zinc-900 border border-zinc-850 hover:border-zinc-700 text-white shadow-xl hover:scale-110 transition-all cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowRight className="rotate-[-90deg] w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
