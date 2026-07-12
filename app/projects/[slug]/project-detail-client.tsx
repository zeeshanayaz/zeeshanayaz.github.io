"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhoneMockup } from "@/components/phone-mockup"
import { AnimatedTechIcon } from "@/components/animated-tech-icon"
import {
  Github,
  Calendar,
  Smartphone,
  Download,
  Star,
  Users,
  TrendingUp,
  Award,
  ChevronRight,
  ArrowLeft,
  Building,
} from "lucide-react"
import Link from "next/link"
import type { Project } from "@/data/portfolio-data"
import { logCustomEvent } from "@/lib/firebase"

interface ProjectDetailClientProps {
  project: Project
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(project.platforms[0] || "")

  useEffect(() => {
    logCustomEvent("project_view", {
      project_id: project.id,
      project_name: project.name,
      project_type: project.type,
    })
  }, [project.id, project.name, project.type])

  // Get screenshots for selected platform
  const currentScreenshots = project.screenshots
    ? project.screenshots[selectedPlatform] || project.screenshots[Object.keys(project.screenshots)[0]] || []
    : []

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans relative selection:bg-purple-500/30 selection:text-purple-200 bg-dot-pattern">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header / Sub-navigation */}
      <div className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/60 py-4 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center text-xs sm:text-sm">
            <Link
              href="/"
              className="flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <span>Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-zinc-700" />
            <Link
              href="/projects"
              className="flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <span>Projects</span>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-zinc-700" />
            <span className="font-semibold text-white truncate max-w-[150px] sm:max-w-xs">
              {project.name}
            </span>
          </div>
        </div>
      </div>

      <main className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Bento Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
              
              {/* App Icon & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="relative w-24 h-24 flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-[28px] blur-md opacity-40"></div>
                  <div className="relative w-full h-full bg-zinc-900 border border-zinc-800 rounded-[28px] overflow-hidden flex items-center justify-center shadow-2xl">
                    {project.projectIcon ? (
                      <img
                        src={project.projectIcon}
                        alt={project.name}
                        className="object-contain w-full h-full p-1"
                      />
                    ) : (
                      <span className="text-3xl font-extrabold text-white">{project.name.charAt(0)}</span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                    <Badge variant="outline" className="border-zinc-800 text-zinc-400 py-0.5 px-2.5">
                      {project.type}
                    </Badge>
                    {project.platforms.map((plat) => (
                      <Badge
                        key={plat}
                        variant="secondary"
                        className={`text-[10px] uppercase tracking-wider py-0.5 px-2.5 border-0 ${
                          plat === "Android"
                            ? "bg-green-600/10 border border-green-500/20 text-green-400"
                            : plat === "iOS" ? "bg-blue-600/10 border border-blue-500/20 text-blue-400"
                              : "bg-zinc-800 border border-zinc-700 text-zinc-300"
                        }`}
                      >
                        {plat}
                      </Badge>
                    ))}
                  </div>

                  <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                    {project.name}
                  </h1>
                  <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl font-normal">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-3 self-center lg:self-start w-full lg:w-auto border-t lg:border-t-0 border-zinc-900 pt-6 lg:pt-0">
                {project.storeLinks.map((link, index) => (
                  <Button
                    key={index}
                    asChild
                    className={`px-5 py-5 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 border-0 ${
                      link.store === "Google Play"
                        ? "bg-gradient-to-r from-green-600 to-emerald-700 text-white hover:from-green-700 hover:to-emerald-800"
                        : link.store === "App Store" ? "bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-850"
                          : "bg-gradient-to-r from-zinc-800 to-zinc-900 text-white hover:from-zinc-700 hover:to-zinc-850"
                    } shadow-md`}
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
                        })
                      }}
                    >
                      <AnimatedTechIcon name={link.platform} size={16} />
                      <span>{link.store}</span>
                    </Link>
                  </Button>
                ))}

                {project.github && (
                  <Button
                    variant="outline"
                    asChild
                    className="px-5 py-5 rounded-2xl border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900/50 hover:border-zinc-750 transition-all duration-350 bg-transparent flex items-center gap-2"
                  >
                    <Link
                      href={project.github}
                      target="_blank"
                      onClick={() => {
                        logCustomEvent("project_external_link_click", {
                          project_id: project.id,
                          project_name: project.name,
                          link_type: "github",
                          url: project.github,
                        })
                      }}
                    >
                      <Github className="h-4.5 w-4.5" />
                      <span>GitHub</span>
                    </Link>
                  </Button>
                )}
              </div>

            </div>
          </div>

          {/* Stats Bar */}
          {project.stats && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              {[
                { label: "Downloads", icon: Download, val: project.stats.downloads, bg: "from-green-500 to-emerald-600" },
                { label: "Rating", icon: Star, val: project.stats.rating, extraIcon: true, bg: "from-yellow-500 to-orange-650" },
                { label: "Reviews", icon: Users, val: project.stats.reviews, bg: "from-purple-500 to-pink-650" },
              ].map((s, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-5 flex items-center justify-between border border-zinc-900/50">
                  <div className="space-y-1">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">{s.label}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-2xl font-extrabold text-white">{s.val}</span>
                      {s.extraIcon && <Star className="h-4.5 w-4.5 text-yellow-500 fill-current" />}
                    </div>
                  </div>
                  <div className={`p-3 bg-zinc-900 border border-zinc-800 text-white rounded-xl`}>
                    <s.icon className="h-5 w-5" />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Description & Screenshots */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Long Description Biography */}
              <Card className="glass-card border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-400" />
                    Product Overview
                  </h2>
                  <div className="text-zinc-300 leading-relaxed font-normal text-sm sm:text-base space-y-4">
                    {project.longDescription.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tech Stack */}
              <Card className="glass-card border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    Tech Stack & Architecture
                  </h2>
                  <div className="flex flex-wrap gap-2.5">
                    {project.tech.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900/60 border border-zinc-850 hover:border-zinc-750 text-sm text-zinc-300 transition-colors"
                      >
                        <AnimatedTechIcon name={tech} size={16} />
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Showcase & Screenshots Preview */}
              {(currentScreenshots.length > 0 || project.screenshots) && (
                <Card className="glass-card border-0 rounded-3xl overflow-hidden">
                  <CardContent className="p-8 space-y-8">
                    <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-cyan-400" />
                      Visual Interface Preview
                    </h2>

                    {/* Platform switcher (if both platforms exist) */}
                    {project.platforms.length > 1 &&
                      project.platforms.some(
                        (platform) =>
                          project.screenshots &&
                          Array.isArray(project.screenshots[platform]) &&
                          project.screenshots[platform].length > 0
                      ) && (
                        <div className="flex gap-2">
                          {project.platforms.map((platform) =>
                            project.screenshots &&
                            Array.isArray(project.screenshots[platform]) &&
                            project.screenshots[platform].length > 0 ? (
                              <Button
                                key={platform}
                                variant={selectedPlatform === platform ? "default" : "outline"}
                                onClick={() => setSelectedPlatform(platform)}
                                className={`flex items-center gap-2 rounded-xl text-xs font-semibold uppercase tracking-wider py-1.5 px-4.5 border transition-all duration-300 ${
                                  selectedPlatform === platform
                                    ? "bg-purple-600 border-purple-500 text-white shadow-md shadow-purple-500/10"
                                    : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                                }`}
                              >
                                <Smartphone className="h-4 w-4" />
                                {platform}
                              </Button>
                            ) : null
                          )}
                        </div>
                      )}

                    {/* Horizontal scroll layout */}
                    {currentScreenshots.length > 0 ? (
                      <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-zinc-800">
                        <div className="flex gap-6 snap-x snap-mandatory">
                          {currentScreenshots.map((screenshot, index) => (
                            <div
                              key={index}
                              className="group relative min-w-[200px] sm:min-w-[260px] h-[400px] sm:h-[520px] rounded-2xl overflow-hidden bg-zinc-900/40 border border-zinc-850 hover:border-zinc-750 snap-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-102 flex-shrink-0"
                            >
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
                              <Image
                                src={screenshot}
                                alt={`${project.name} screen ${index + 1}`}
                                width={260}
                                height={520}
                                className="w-full h-full object-contain select-none"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-10 bg-zinc-900/20 border border-zinc-900 rounded-2xl">
                        <Smartphone className="h-8 w-8 text-zinc-750 mx-auto mb-3" />
                        <p className="text-zinc-500 text-sm">Preview screens pending store release.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}

            </div>

            {/* Right Column: Meta Info & Mockup Integration */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Interactive Phone Mockup Integration */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center">
                <h3 className="font-bold text-white mb-6 text-sm uppercase tracking-wider text-zinc-550 w-full text-left">
                  Device Preview
                </h3>
                <PhoneMockup
                  screenshots={currentScreenshots}
                  appName={project.name}
                  platform={selectedPlatform}
                />
              </div>

              {/* Client Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider text-zinc-550">
                  Client & Association
                </h3>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-purple-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Associated Company</p>
                    <p className="font-bold text-white">{project.company}</p>
                  </div>
                </div>
              </div>

              {/* Timeline Info */}
              {(project.createdDate || project.releasedDate) && (
                <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-6">
                  <h3 className="font-bold text-white text-sm uppercase tracking-wider text-zinc-550">
                    Project Timeline
                  </h3>
                  <div className="relative border-l border-zinc-800 pl-4 space-y-6">
                    {project.createdDate && (
                      <div className="relative">
                        <div className="absolute left-[-21px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-purple-500 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        </div>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Initiated</p>
                        <p className="font-bold text-white text-sm mt-0.5">{project.createdDate}</p>
                      </div>
                    )}
                    
                    {project.releasedDate && (
                      <div className="relative">
                        <div className="absolute left-[-21px] top-1 w-2.5 h-2.5 rounded-full bg-zinc-950 border border-green-500 flex items-center justify-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        </div>
                        <p className="text-xs text-zinc-500 uppercase tracking-widest font-semibold">Released</p>
                        <p className="font-bold text-white text-sm mt-0.5">{project.releasedDate}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Associated Platforms list */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider text-zinc-550">
                  Platforms Support
                </h3>
                <div className="space-y-3">
                  {project.platforms.map((plat) => (
                    <div
                      key={plat}
                      className="flex items-center gap-3 p-2 rounded-xl bg-zinc-900/40 border border-zinc-850 hover:bg-zinc-900/60 transition-colors"
                    >
                      <div
                        className={`p-2 rounded-lg text-white ${
                          plat === "Android"
                            ? "bg-green-600"
                            : plat === "iOS" ? "bg-blue-600" : "bg-zinc-700"
                        }`}
                      >
                        <AnimatedTechIcon name={plat} size={14} />
                      </div>
                      <span className="text-sm font-semibold text-zinc-300">{plat} Support</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </main>
    </div>
  )
}
