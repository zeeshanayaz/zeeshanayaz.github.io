"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Globe,
  Star,
  Calendar,
  Building,
  GraduationCap,
  Menu,
  X,
  Eye,
  Code,
  Smartphone,
  Database,
  Flame,
  Zap,
  GitBranch,
  Palette,
  Monitor,
  Upload,
  Trophy,
  Users,
  Shield,
  Award,
  ArrowRight,
  Sparkles,
  ZapIcon,
  Target,
  Rocket,
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
  type Project,
} from "@/data/portfolio-data"

const getSkillIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    Code,
    Smartphone,
    Database,
    Flame,
    Zap,
    GitBranch,
    Globe,
    Palette,
    Monitor,
    Upload,
  }
  return icons[iconName] || Code
}

const getAchievementIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    Trophy,
    Star,
    Users,
    Shield,
    GitBranch,
    Award,
  }
  return icons[iconName] || Trophy
}

const getServiceIcon = (iconName: string) => {
  const icons: { [key: string]: any } = {
    Smartphone,
    Palette,
    Upload,
  }
  return icons[iconName] || Smartphone
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const featuredProjects = projects.filter((project) => project.featured)

  const [showAllProjects, setShowAllProjects] = useState(false)
  const projectsToShow = showAllProjects ? featuredProjects : featuredProjects.slice(0, 6)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "experience", "projects", "contact"]
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

      if (window.scrollY > 200) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl z-50 border-b border-slate-200/50 dark:border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* text-2xl font-agustina font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent */}
              <div className="text-xl md:text-3xl font-agustina font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text cursor-pointer" onClick={() => scrollToSection("home")}>
                {`< ${personalInfo.name} />`}
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {["home", "about", "services", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeSection === item
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200/50 dark:border-slate-800/50">
              {["home", "about", "services", "experience", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors ${activeSection === item
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-8">
              {/* Profile Image with Glow Effect */}
              <div className="relative w-40 h-40 mx-auto mb-8">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-lg opacity-75 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
                  <Image
                    src={personalInfo.profileImage || "/placeholder.svg"}
                    alt={personalInfo.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for new opportunities
                </div>

                <h1 className="text-5xl sm:text-7xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-100 dark:to-white bg-clip-text text-transparent">
                    {personalInfo.name.split(" ")[0]}
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                    {personalInfo.name.split(" ")[1]}
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 font-medium mb-6">
                  {personalInfo.title}
                </p>

                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
                  {/* 5+ years of experience crafting exceptional mobile experiences with{" "}
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">Flutter</span>,{" "}
                  <span className="text-green-600 dark:text-green-400 font-semibold">Kotlin</span>, and{" "}
                  <span className="text-purple-600 dark:text-purple-400 font-semibold">Java</span>. Passionate about
                  creating innovative solutions that drive success. */}
                  {personalInfo.summary}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 rounded-full border-2 border-slate-300 dark:border-slate-600 hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 group bg-transparent"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download CV
              </Button> */}
            </div>

            <div className="flex justify-center space-x-6">
              {[
                { href: `mailto:${personalInfo.email}`, icon: Mail, color: "hover:text-red-500" },
                { href: personalInfo.linkedin, icon: Linkedin, color: "hover:text-blue-600" },
                { href: personalInfo.github, icon: Github, color: "hover:text-slate-800 dark:hover:text-white" },
              ].map(({ href, icon: Icon, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  className={`p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 text-slate-600 dark:text-slate-300 ${color} hover:scale-110`}
                >
                  <Icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              <Target className="w-4 h-4 mr-2" />
              About Me
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Crafting Digital Excellence
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Innovative software developer with a passion for mobile application development
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Rocket className="w-6 h-6 mr-3 text-blue-500" />
                  Professional Summary
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{personalInfo.about}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-3 text-green-500" />
                    Education
                  </h4>
                  {education.slice(0, 1).map((edu, index) => (
                    <div key={index}>
                      <h5 className="font-medium text-slate-900 dark:text-white text-sm">{edu.degree}</h5>
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {edu.institution} • {edu.year}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-red-500" />
                    Contact Info
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-slate-600 dark:text-slate-300">{personalInfo.email}</p>
                    <p className="text-slate-600 dark:text-slate-300">{personalInfo.phone}</p>
                    <p className="text-slate-600 dark:text-slate-300">{personalInfo.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <Trophy className="w-5 h-5 mr-3 text-yellow-500" />
                  Key Achievements
                </h4>
                <div className="space-y-4">
                  {achievementsData.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                      <span className="text-slate-600 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>


            </div>

            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50">
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center">
                  <ZapIcon className="w-6 h-6 mr-3 text-purple-500" />
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {skills.map((skill, index) => {
                    const IconComponent = getSkillIcon(skill.icon)
                    return (
                      <div
                        key={index}
                        className="group relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-800 rounded-xl p-4 hover:shadow-lg transition-all duration-300 border border-slate-200/50 dark:border-slate-600/50 hover:border-blue-300 dark:hover:border-blue-500"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative flex items-center space-x-3">
                          <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white group-hover:scale-110 transition-transform">
                            <IconComponent className="h-4 w-4" />
                          </div>
                          <span className="font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-sm">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Services
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              What I Offer
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Comprehensive mobile development services to bring your ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = getServiceIcon(service.icon)
              return (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                  <CardHeader className="text-center relative z-10">
                    <div className="relative w-20 h-20 mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-300">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-slate-600 dark:text-slate-300 group/item"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                          <span className="text-sm group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              <Building className="w-4 h-4 mr-2" />
              Experience
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Professional Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A timeline of my professional growth and achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-cyan-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.position}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building className="h-4 w-4" />
                        {exp.company} • {exp.location}
                      </CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 w-fit bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400"
                    >
                      <Calendar className="h-3 w-3" />
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-3 text-slate-600 dark:text-slate-300 group/item"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                        <span className="group-hover/item:text-slate-900 dark:group-hover/item:text-white transition-colors">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              <Code className="w-4 h-4 mr-2" />
              Projects
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Featured Work
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              A showcase of successful mobile applications and open-source contributions
            </p>
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
              Published Applications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsToShow.map((project, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Project Banner */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500"></div>
                    <Image
                      src={project.bannerImage || "/placeholder.svg?height=200&width=400"}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {project.platforms.includes("Android") && (
                        <Badge className="bg-green-500/90 text-white border-0">Android</Badge>
                      )}
                      {project.platforms.includes("iOS") && (
                        <Badge className="bg-blue-500/90 text-white border-0">iOS</Badge>
                      )}
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20"
                      >
                        {project.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-xs bg-slate-50 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                      >
                        {project.company}
                      </Badge>
                    </div>
                    <Link href={`/projects/${project.id}`}>

                      <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      >
                        {project.name}
                      </CardTitle>
                    </Link>
                    <CardDescription className="text-sm line-clamp-2">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 3).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 3 && (
                            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                              +{project.tech.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="flex-1 mr-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white"
                        >
                          <Link href={`/projects/${project.id}`}>
                            <Eye className="h-3 w-3 mr-1" />
                            View Details
                          </Link>
                        </Button>

                        {/* Store Icons */}
                        <div className="flex gap-1">
                          {project.storeLinks.map((storeLink, linkIndex) => (
                            <Button
                              key={linkIndex}
                              size="sm"
                              variant="outline"
                              asChild
                              className={`w-8 h-8 p-0 ${storeLink.store === "Google Play"
                                ? "bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white"
                                : storeLink.store === "App Store" ? "bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500 hover:text-white"
                                  : "bg-gray-500/10 border-gray-500/20 text-gray-600 dark:text-gray-400 hover:bg-gray-500 hover:text-white"
                                }`}
                              title={`View on ${storeLink.store}`}
                            >
                              <Link href={storeLink.url} target="_blank">
                                {storeLink.store === "Google Play" ? (
                                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                                  </svg>
                                ) : storeLink.store === "App Store" ? (
                                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                                  </svg>
                                ) : storeLink.store === "Web" ? (
                                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12 19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
                                  </svg>
                                ) : null}
                              </Link>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {featuredProjects.length > 6 && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => {
                    if (showAllProjects) {
                      setShowAllProjects(false)
                      setTimeout(() => {
                        scrollToSection("projects")
                      }, 100)
                    } else {
                      setShowAllProjects(true)
                    }
                  }}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition-all"
                >
                  {showAllProjects ? "Show Less" : "Show More"}
                </Button>
              </div>
            )}
          </div>

          {/* Open Source Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
              Open Source Contributions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openSourceProjects.map((project, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-gradient-to-r from-slate-500/10 to-slate-600/10 text-slate-600 dark:text-slate-400 border-slate-500/20"
                      >
                        {project.type}
                      </Badge>
                      <Github className="h-5 w-5 text-slate-500 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors">
                      {project.name}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="bg-slate-500/10 border-slate-500/20 text-slate-600 dark:text-slate-400 hover:bg-slate-500 hover:text-white"
                    >
                      <Link href={project.url} target="_blank" className="flex items-center gap-1">
                        <ExternalLink className="h-3 w-3" />
                        View Project
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Certifications Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full text-sm font-medium text-yellow-600 dark:text-yellow-400 mb-4">
              <Trophy className="w-4 h-4 mr-2" />
              Recognition
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Achievements & Certifications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Recognition and milestones in my professional journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
                <Trophy className="w-6 h-6 mr-3 text-yellow-500" />
                Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = getAchievementIcon(achievement.icon)
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative w-full h-full bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                            {achievement.title}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-blue-500" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => {
                  const IconComponent = getAchievementIcon(cert.icon)
                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-500"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="flex items-start gap-4 relative z-10">
                        <div className="relative w-12 h-12 flex-shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-slate-600 dark:text-slate-300 text-sm mb-1 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">
                            {cert.issuer}
                          </p>
                          <p className="text-slate-500 dark:text-slate-400 text-xs">{cert.date}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Ready to bring your mobile app ideas to life? Let's discuss your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  Email Me
                </CardTitle>
                <CardDescription>Send me an email and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`mailto:${personalInfo.email}`}>{personalInfo.email}</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="flex items-center gap-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  <div className="p-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  Call Me
                </CardTitle>
                <CardDescription>Give me a call to discuss your project requirements.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`tel:${personalInfo.phone.replace(/[^\d+]/g, "")}`}>{personalInfo.phone}</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <div className="flex justify-center space-x-6">
              {[
                { href: personalInfo.linkedin, icon: Linkedin, label: "LinkedIn", color: "from-blue-600 to-blue-700" },
                { href: personalInfo.github, icon: Github, label: "GitHub", color: "from-slate-800 to-slate-900" },
                // { href: personalInfo.website, icon: Globe, label: "Portfolio", color: "from-purple-600 to-purple-700" },
              ].map(({ href, icon: Icon, label, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  target="_blank"
                  className={`group flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                >
                  <Icon className="h-5 w-5 group-hover:animate-pulse" />
                  <span className="hidden sm:inline">{label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-200/50 dark:border-slate-800/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-600 dark:text-slate-300">
            © 2025{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold cursor-pointer" onClick={() => scrollToSection("home")}>
              {personalInfo.name}
            </span>
            . All rights reserved.
          </p>
        </div>
      </footer>

      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-110 transition-all"
          aria-label="Scroll to top"
        >
          <ArrowRight className="rotate-[-90deg] w-6 h-6" />
        </button>
      )}
    </div>
  )
}
