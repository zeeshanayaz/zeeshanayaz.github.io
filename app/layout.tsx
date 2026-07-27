import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FirebaseAnalytics from "@/components/firebase-analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://zeeshanayaz.github.io"),
  title: {
    default: "Muhammad Zeeshan | Software Engineer & Mobile App Specialist",
    template: "%s | Muhammad Zeeshan",
  },
  description:
    "Muhammad Zeeshan is a software engineer and mobile app specialist building Flutter, Android, iOS, and React Native applications for startups and businesses.",
  keywords: [
    "Muhammad Zeeshan",
    "Zeeshan Ayaz",
    "software engineer",
    "mobile app developer",
    "Flutter developer",
    "Android developer",
    "iOS developer",
    "React Native developer",
    "Karachi software engineer",
  ],
  alternates: {
    canonical: "https://zeeshanayaz.github.io",
  },
  openGraph: {
    title: "Muhammad Zeeshan | Software Engineer & Mobile App Specialist",
    description:
      "Software engineer and mobile app specialist focused on Flutter, Android, iOS, and React Native development.",
    url: "https://zeeshanayaz.github.io",
    siteName: "Muhammad Zeeshan",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Zeeshan | Software Engineer & Mobile App Specialist",
    description:
      "Software engineer and mobile app specialist focused on Flutter, Android, iOS, and React Native development.",
  },
  authors: [{ name: "Muhammad Zeeshan", url: "https://zeeshanayaz.github.io" }],
  category: "technology",
  generator: "Next.js",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <FirebaseAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muhammad Zeeshan",
              alternateName: ["Zeeshan Ayaz", "Muhammad Zeeshan Ayaz"],
              url: "https://zeeshanayaz.github.io",
              jobTitle: "Software Engineer & Mobile App Specialist",
              description:
                "Software engineer specializing in Flutter, Android, iOS, and React Native application development.",
              sameAs: [
                "https://www.linkedin.com/in/zeeshanayaz/",
                "https://github.com/zeeshanayaz",
                "https://stackoverflow.com/users/6761436/zeeshan-ayaz",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Karachi",
                addressCountry: "PK",
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
