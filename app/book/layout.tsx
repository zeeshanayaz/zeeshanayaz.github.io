import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Book a Meeting | Muhammad Zeeshan",
  description: "Schedule a consultation or discovery call with Muhammad Zeeshan for mobile app and software engineering projects.",
  alternates: {
    canonical: "https://zeeshanayaz.github.io/book",
  },
  openGraph: {
    title: "Book a Meeting | Muhammad Zeeshan",
    description: "Schedule a consultation or discovery call with Muhammad Zeeshan for mobile app and software engineering projects.",
    url: "https://zeeshanayaz.github.io/book",
    type: "website",
  },
}

export default function BookLayout({ children }: { children: React.ReactNode }) {
  return children
}
