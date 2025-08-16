"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Github,
  ExternalLink,
  Eye,
  Code,
  Search,
  Filter,
  X,
  ArrowLeft,
  Smartphone,
  Globe,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects, openSourceProjects, type Project } from "@/data/portfolio-data"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects)
  const [filteredOpenSource, setFilteredOpenSource] = useState(openSourceProjects)

  // Get unique project types and platforms for filters
  const projectTypes = Array.from(new Set(projects.map(project => project.type)))
  const platforms = Array.from(new Set(projects.flatMap(project => project.platforms)))

  // Filter projects based on search term and selected filters
  useEffect(() => {
    let result = projects
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      result = result.filter(project => 
        project.name.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        project.company.toLowerCase().includes(term) ||
        project.tech.some(tech => tech.toLowerCase().includes(term))
      )
    }
    
    if (selectedType) {
      result = result.filter(project => project.type === selectedType)
    }
    
    if (selectedPlatform) {
      result = result.filter(project => project.platforms.includes(selectedPlatform))
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

  const getStoreIcon = (store: string) => {
    switch (store) {
      case "Google Play":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
          </svg>
        )
      case "App Store":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
          </svg>
        )
      case "Web":
        return (
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.83824 18.4467C10.0103 18.7692 10.1826 19.0598 10.3473 19.3173C8.59745 18.9238 7.07906 17.9187 6.02838 16.5383C6.72181 16.1478 7.60995 15.743 8.67766 15.4468C8.98112 16.637 9.40924 17.6423 9.83824 18.4467ZM11.1618 17.7408C10.7891 17.0421 10.4156 16.1695 10.1465 15.1356C10.7258 15.0496 11.3442 15 12.0001 15C12.6559 15 13.2743 15.0496 13.8535 15.1355C13.5844 16.1695 13.2109 17.0421 12.8382 17.7408C12.5394 18.3011 12.2417 18.7484 12,19.0757C11.7583 18.7484 11.4606 18.3011 11.1618 17.7408ZM9.75 12C9.75 12.5841 9.7893 13.1385 9.8586 13.6619C10.5269 13.5594 11.2414 13.5 12.0001 13.5C12.7587 13.5 13.4732 13.5593 14.1414 13.6619C14.2107 13.1384 14.25 12.5841 14.25 12C14.25 11.4159 14.2107 10.8616 14.1414 10.3381C13.4732 10.4406 12.7587 10.5 12.0001 10.5C11.2414 10.5 10.5269 10.4406 9.8586 10.3381C9.7893 10.8615 9.75 11.4159 9.75 12ZM8.38688 10.0288C8.29977 10.6478 8.25 11.3054 8.25 12C8.25 12.6946 8.29977 13.3522 8.38688 13.9712C7.11338 14.3131 6.05882 14.7952 5.24324 15.2591C4.76698 14.2736 4.5 13.168 4.5 12C4.5 10.832 4.76698 9.72644 5.24323 8.74088C6.05872 9.20472 7.1133 9.68686 8.38688 10.0288ZM10.1465 8.86445C10.7258 8.95042 11.3442 9 12.0001 9C12.6559 9 13.2743 8.95043 13.8535 8.86447C13.5844 7.83055 13.2109 6.95793 12.8382 6.2592C12.5394 5.69894 12.2417 5.25156 12 4.92432C11.7583 5.25156 11.4606 5.69894 11.1618 6.25918C10.7891 6.95791 10.4156 7.83053 10.1465 8.86445ZM15.6131 10.0289C15.7002 10.6479 15.75 11.3055 15.75 12C15.75 12.6946 15.7002 13.3521 15.6131 13.9711C16.8866 14.3131 17.9412 14.7952 18.7568 15.2591C19.233 14.2735 19.5 13.1679 19.5 12C19.5 10.8321 19.233 9.72647 18.7568 8.74093C17.9413 9.20477 16.8867 9.6869 15.6131 10.0289ZM17.9716 7.46178C17.2781 7.85231 16.39 8.25705 15.3224 8.55328C15.0189 7.36304 14.5908 6.35769 14.1618 5.55332C13.9897 5.23077 13.8174 4.94025 13.6527 4.6827C15.4026 5.07623 16.921 6.08136 17.9716 7.46178ZM8.67765 8.55325C7.61001 8.25701 6.7219 7.85227 6.02839 7.46173C7.07906 6.08134 8.59745 5.07623 10.3472 4.6827C10.1826 4.94025 10.0103 5.23076 9.83823 5.5533C9.40924 6.35767 8.98112 7.36301 8.67765 8.55325ZM15.3224 15.4467C15.0189 16.637 14.5908 17.6423 14.1618 18.4467C13.9897 18.7692 13.8174 19.0598 13.6527 19.3173C15.4026 18.9238 16.921 17.9186 17.9717 16.5382C17.2782 16.1477 16.3901 15.743 15.3224 15.4467ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" />
          </svg>
        )
      default:
        return <ExternalLink className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800/50 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center">
           <Link 
              href="/" 
              className="flex items-center text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
            >
              <span className="font-medium">Home</span>
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-400" />
            <span className="font-medium text-slate-900 dark:text-white">Projects</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full sm:w-64 bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="relative">
                <select
                  value={selectedType || ""}
                  onChange={(e) => setSelectedType(e.target.value || null)}
                  className="appearance-none bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Types</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
              
              <div className="relative">
                <select
                  value={selectedPlatform || ""}
                  onChange={(e) => setSelectedPlatform(e.target.value || null)}
                  className="appearance-none bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700 rounded-lg pl-3 pr-8 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Platforms</option>
                  {platforms.map((platform) => (
                    <option key={platform} value={platform}>
                      {platform}
                    </option>
                  ))}
                </select>
                <Smartphone className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
              </div>
              
              {(searchTerm || selectedType || selectedPlatform) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="p-2 h-auto"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Projects Count and Active Filters */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-slate-600 dark:text-slate-300">
                Showing <span className="font-semibold">{filteredProjects.length}</span> of <span className="font-semibold">{projects.length}</span> projects
              </p>
              {(selectedType || selectedPlatform) && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedType && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Type: {selectedType}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSelectedType(null)} 
                      />
                    </Badge>
                  )}
                  {selectedPlatform && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      Platform: {selectedPlatform}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => setSelectedPlatform(null)} 
                      />
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredProjects.map((project, index) => (
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
                      <CardTitle className="text-xl group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </CardTitle>
                    </Link>
                    <CardDescription className="text-sm line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {project.tech.slice(0, 4).map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                              {tech}
                            </Badge>
                          ))}
                          {project.tech.length > 4 && (
                            <Badge variant="outline" className="text-xs bg-slate-50 dark:bg-slate-700">
                              +{project.tech.length - 4} more
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
                                {getStoreIcon(storeLink.store)}
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
          ) : (
            <div className="text-center py-12 mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No projects found</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}

          {/* Open Source Projects Section */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 flex items-center">
              <Github className="h-6 w-6 mr-3" />
              Open Source Contributions
            </h2>
            
            {filteredOpenSource.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredOpenSource.map((project, index) => (
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
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                  <Github className="h-8 w-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">No open source projects found</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Try adjusting your search criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}