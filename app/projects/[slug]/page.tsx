import { notFound } from "next/navigation"
import { ProjectDetailClient } from "@/app/projects/[slug]/project-detail-client"
import { projects } from "@/data/portfolio-data"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projects.find((p) => p.id === resolvedParams.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.name} - Muhammad Zeeshan Portfolio`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projects.find((p) => p.id === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
