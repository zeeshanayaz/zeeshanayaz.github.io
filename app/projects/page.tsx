"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { AnimatedTechIcon } from "@/components/animated-tech-icon"
import {
  Github,
  ExternalLink,
  Eye,
  Search,
  Filter,
  X,
  Smartphone,
  ChevronRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react"
import Link from "next/link"
import { projects, openSourceProjects, type Project } from "@/data/portfolio-data"

const fadeInUp = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects.filter(p => p.featured))
  const [filteredOpenSource, setFilteredOpenSource] = useState(openSourceProjects)

  // Get unique project types and platforms for filters
  const projectTypes = Array.from(new Set(projects.map(project => project.type)))
  const platforms = Array.from(new Set(projects.flatMap(project => project.platforms)))

  // Filter projects based on search term and selected filters
  useEffect(() => {
    let result = projects.filter(project => project.featured)
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(project =>
        project.featured && 
        (project.name.toLowerCase().includes(term) || 
         project.description.toLowerCase().includes(term) ||
         project.company.toLowerCase().includes(term) ||
         project.tech.some(tech => tech.toLowerCase().includes(term)))
      )
    }
    
    if (selectedType) {
      result = result.filter(project => project.featured && project.type === selectedType)
    }
    
    if (selectedPlatform) {
      result = result.filter(project => project.featured && project.platforms.includes(selectedPlatform))
    }
    
    setFilteredProjects(result)
  }, [searchTerm, selectedType, selectedPlatform])

  // Filter open source projects based on search term
  useEffect(() => {
    let result = openSourceProjects
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(project => 
        project.name.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term)
      )
    }
    
    setFilteredOpenSource(result)
  }, [searchTerm])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedType(null)
    setSelectedPlatform(null)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans relative selection:bg-purple-500/30 selection:text-purple-200 bg-dot-pattern">
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header / Sub-navigation */}
      <div className="sticky top-0 z-30 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-900/60 py-4 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="flex items-center text-xs sm:text-sm">
            <Link 
              href="/" 
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-zinc-650" />
            <span className="font-semibold text-white">Projects Archive</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-64 bg-zinc-900/60 border-zinc-800 text-zinc-200 placeholder-zinc-500 rounded-xl focus:border-zinc-700"
              />
            </div>
            
            <div className="flex gap-2">
              {/* Type Select */}
              <div className="relative">
                <select
                  value={selectedType || ""}
                  onChange={(e) => setSelectedType(e.target.value || null)}
                  className="appearance-none bg-zinc-900/60 border border-zinc-800 rounded-xl pl-3 pr-9 py-2 text-xs text-zinc-300 focus:outline-none focus:border-zinc-700 h-10 min-w-[100px] cursor-pointer"
                >
                  <option value="">All Types</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-zinc-500 pointer-events-none" />
              </div>
              
              {/* Platform Select */}
              <div className="relative">
                <select
                  value={selectedPlatform || ""}
                  onChange={(e) => setSelectedPlatform(e.target.value || null)}
                  className="appearance-none bg-zinc-900/60 border border-zinc-800 rounded-xl pl-3 pr-9 py-2 text-xs text-zinc-300 focus:outline-none focus:border-zinc-700 h-10 min-w-[120px] cursor-pointer"
                >
                  <option value="">All Platforms</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
                <Smartphone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-zinc-500 pointer-events-none" />
              </div>
              
              {/* Reset filter shortcut */}
              {(searchTerm || selectedType || selectedPlatform) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="p-2.5 h-10 border-zinc-800 hover:bg-zinc-900/60 text-zinc-400 hover:text-white rounded-xl"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

        </div>
      </div>

      <main className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm text-zinc-400">
                Showing <span className="font-semibold text-white">{filteredProjects.length}</span> of <span className="font-semibold text-white">{projects.length}</span> flagship projects
              </p>
              {(selectedType || selectedPlatform) && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {selectedType && (
                    <Badge variant="secondary" className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] flex items-center gap-1.5 uppercase tracking-wider py-1 px-2.5">
                      Type: {selectedType}
                      <X className="h-3 w-3 cursor-pointer hover:text-white" onClick={() => setSelectedType(null)} />
                    </Badge>
                  )}
                  {selectedPlatform && (
                    <Badge variant="secondary" className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-[10px] flex items-center gap-1.5 uppercase tracking-wider py-1 px-2.5">
                      Platform: {selectedPlatform}
                      <X className="h-3 w-3 cursor-pointer hover:text-white" onClick={() => setSelectedPlatform(null)} />
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Grid of Projects */}
          <motion.div
            layout
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.id}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-3xl overflow-hidden flex flex-col justify-between group hover:border-zinc-800 transition-all duration-500"
                >
                  {/* Banner image wrapper */}
                  <div className="relative h-48 overflow-hidden bg-zinc-900">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/25 to-blue-500/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-xs">
                        <Badge variant="outline" className="border-zinc-800 text-zinc-400">
                          {project.type}
                        </Badge>
                        <span className="text-zinc-500">{project.company}</span>
                      </div>
                      
                      <Link href={`/projects/${project.id}`}>
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                          {project.name}
                        </h3>
                      </Link>
                      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-0.5 bg-zinc-900 border border-zinc-850 rounded text-zinc-400">
                            {t}
                          </span>
                        ))}
                      </div>

                      {/* Bottom actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-850">
                        <Button
                          size="sm"
                          variant="outline"
                          asChild
                          className="bg-zinc-900 border-zinc-800 text-zinc-300 hover:bg-zinc-800 hover:text-white"
                        >
                          <Link href={`/projects/${project.id}`}>
                            <Eye className="w-3.5 h-3.5 mr-1.5" />
                            View Details
                          </Link>
                        </Button>

                        {/* Store links shortcuts */}
                        <div className="flex gap-1">
                          {project.storeLinks.map((link, idx) => (
                            <Button
                              key={idx}
                              size="sm"
                              variant="outline"
                              asChild
                              className="w-7 h-7 p-0 bg-zinc-900 border-zinc-850 hover:bg-zinc-800 hover:text-white"
                              title={`View on ${link.store}`}
                            >
                              <Link href={link.url} target="_blank">
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
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20 bg-zinc-900/20 border border-zinc-900 rounded-3xl mb-16">
              <Search className="h-10 w-10 text-zinc-650 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-1">No Projects Found</h3>
              <p className="text-zinc-550 text-sm mb-4">Try clearing filters or search parameter.</p>
              <Button onClick={clearFilters} className="bg-white text-black hover:bg-zinc-250">
                Clear Filters
              </Button>
            </div>
          )}

          {/* Open Source Projects Section */}
          <div className="border-t border-zinc-900 pt-20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10 flex items-center gap-2">
              <Github className="w-6 h-6" />
              Open Source Contributions
            </h2>
            
            {filteredOpenSource.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredOpenSource.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="glass-card rounded-2xl p-6 space-y-4 hover:border-zinc-800 transition-all duration-300"
                  >
                    <div className="flex justify-between items-center">
                      <Badge variant="outline" className="border-zinc-850 text-zinc-400 uppercase tracking-widest text-[9px] py-0.5 px-2">
                        {project.type}
                      </Badge>
                      <Github className="h-5 w-5 text-zinc-600" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-bold text-white text-base leading-snug">{project.name}</h4>
                      <p className="text-xs text-zinc-405 leading-relaxed">{project.description}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="link"
                      asChild
                      className="p-0 h-auto text-purple-400 hover:text-purple-300 hover:no-underline text-xs flex items-center gap-1 w-fit"
                    >
                      <Link href={project.url} target="_blank">
                        View Repository
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Github className="h-8 w-8 text-zinc-600 mx-auto mb-3" />
                <h3 className="text-base font-bold text-white mb-1">No Repositories Match</h3>
                <p className="text-zinc-500 text-xs">Try adjusting your search criteria</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  )
}