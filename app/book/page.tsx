"use client"

import Link from "next/link"
import { ArrowLeft, CalendarDays, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { personalInfo } from "@/data/portfolio-data"
import { CalendlyBookingWidget } from "@/components/calendly-booking"

export default function BookPage() {
  return (
    <main className="min-h-screen bg-background text-foreground bg-dot-pattern">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <section className="relative z-10 px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex items-center justify-between gap-3"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-800/80 bg-zinc-950/70 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-zinc-700 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to portfolio
            </Link>
            <div className="hidden rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400 sm:inline-flex sm:items-center sm:gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              Booking
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
            className="rounded-[32px] border border-zinc-800/70 bg-zinc-950/70 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8 lg:p-10"
          >
            <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                  <CalendarDays className="h-3.5 w-3.5" />
                  Schedule a call
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Let&apos;s discuss your next mobile app or product idea.
                  </h1>
                  <p className="max-w-xl text-sm leading-7 text-zinc-400 sm:text-base">
                    Choose a time that works for you and book a discovery call with {personalInfo.name}. Whether you need architecture guidance, product delivery, or launch support, this is the fastest way to start the conversation.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/60 px-4 py-3 text-sm text-zinc-400">
                <p className="font-semibold text-white">Typical availability</p>
                <p className="mt-1">30-minute discovery calls • Remote • Flexible scheduling</p>
              </div>
            </div>

            <CalendlyBookingWidget url={personalInfo.calendly} />
          </motion.div>
        </div>
      </section>
    </main>
  )
}
