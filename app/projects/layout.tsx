import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects by Muhammad Zeeshan",
  description: "Explore software and mobile app projects built by Muhammad Zeeshan, including Flutter, Android, iOS, and React Native work.",
  alternates: {
    canonical: "https://zeeshanayaz.github.io/projects",
  },
  openGraph: {
    title: "Projects by Muhammad Zeeshan",
    description: "Explore software and mobile app projects built by Muhammad Zeeshan.",
    url: "https://zeeshanayaz.github.io/projects",
    type: "website",
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
