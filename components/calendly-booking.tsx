"use client"

import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { CalendarDays, Loader2 } from "lucide-react"

const CalendlyInlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div className="min-h-[680px] rounded-[28px] border border-zinc-800/70 bg-zinc-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <div className="flex h-full min-h-[680px] flex-col items-center justify-center gap-4 rounded-[24px] border border-zinc-800/60 bg-zinc-900/60 px-6 text-center">
          <div className="rounded-full border border-zinc-700/70 bg-zinc-950/60 p-3 text-purple-400">
            <CalendarDays className="h-6 w-6" />
          </div>
          <div className="space-y-2">
            <p className="text-sm font-semibold text-white">Loading your scheduler…</p>
            <p className="text-sm text-zinc-400">Preparing a polished booking experience for your call.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <Loader2 className="h-4 w-4 animate-spin" />
            One moment
          </div>
        </div>
      </div>
    ),
  }
)

type CalendlyBookingWidgetProps = {
  url: string
  className?: string
}

export function CalendlyBookingWidget({ url, className }: CalendlyBookingWidgetProps) {
  return (
    <div
      className={["w-full overflow-hidden rounded-[28px] border border-zinc-800/70 bg-zinc-950/70 p-2 shadow-2xl shadow-black/20 backdrop-blur-xl", className]
        .filter(Boolean)
        .join(" ")}
      aria-label="Calendly booking widget"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="overflow-hidden rounded-[24px]"
      >
        <CalendlyInlineWidget
          url={url}
          styles={{ minWidth: "320px", width: "100%", height: "700px" }}
          pageSettings={{
            backgroundColor: "1f2937",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "8b5cf6",
            textColor: "f5f5f5",
          }}
        />
      </motion.div>
    </div>
  )
}
