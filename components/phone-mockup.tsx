"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Smartphone, Sparkles, Wifi, Battery } from "lucide-react"

interface PhoneMockupProps {
  screenshots?: string[]
  appName: string
  platform?: "Android" | "iOS" | string
}

export function PhoneMockup({ screenshots = [], appName, platform = "iOS" }: PhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (screenshots.length > 0) {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length)
    }
  }

  const handlePrev = () => {
    if (screenshots.length > 0) {
      setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
    }
  }

  const hasScreenshots = screenshots && screenshots.length > 0

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] h-[560px] sm:h-[600px]">
      {/* Outer Phone Case with subtle bevels and dropshadow */}
      <div className="absolute inset-0 bg-[#16161a] rounded-[50px] p-[10px] border-4 border-[#333338] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] dark:shadow-[0_25px_60px_-10px_rgba(0,0,0,0.8)] before:absolute before:inset-[-2px] before:rounded-[52px] before:border-2 before:border-[#4c4c52] overflow-hidden">
        
        {/* Buttons on the sides */}
        <div className="absolute left-[-4px] top-[110px] w-[4px] h-[40px] bg-[#2d2d30] rounded-l-md" />
        <div className="absolute left-[-4px] top-[160px] w-[4px] h-[40px] bg-[#2d2d30] rounded-l-md" />
        <div className="absolute right-[-4px] top-[130px] w-[4px] h-[65px] bg-[#2d2d30] rounded-r-md" />

        {/* Inner Glass Screen boundary */}
        <div className="relative w-full h-full rounded-[40px] bg-zinc-950 overflow-hidden flex flex-col border border-zinc-800">
          
          {/* Status Bar */}
          <div className="h-9 px-6 pt-2 w-full flex items-center justify-between z-30 text-[11px] font-medium text-white/90 select-none">
            <span>9:41</span>
            {/* Dynamic Island / Notch */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2.5 w-[85px] h-[22px] bg-black rounded-full flex items-center justify-between px-2.5 z-40 shadow-inner group">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-950/40 border border-blue-900/60" />
              <div className="w-8 h-1 bg-zinc-900 rounded-full" />
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-900" />
            </div>
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5" />
              <Battery className="w-4 h-4" />
            </div>
          </div>

          {/* Screen Gloss/Reflection overlay (gives premium look) */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />

          {/* Interactive Screen Content */}
          <div className="flex-1 w-full relative z-10 bg-zinc-900">
            {hasScreenshots ? (
              <div className="w-full h-full relative group/screen">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentIndex}
                    src={screenshots[currentIndex]}
                    alt={`${appName} Screenshot ${currentIndex + 1}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="w-full h-full object-cover select-none"
                  />
                </AnimatePresence>

                {/* Arrow Controls (Fades in on hover) */}
                {screenshots.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 hover:bg-black/80"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover/screen:opacity-100 transition-opacity duration-300 hover:bg-black/80"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
            ) : (
              /* High-Quality Fallback Interface when no screenshots exist */
              <div className="w-full h-full flex flex-col items-center justify-between p-6 text-center bg-gradient-to-b from-zinc-900 via-purple-950/20 to-zinc-950">
                <div className="w-full flex justify-between items-center text-xs text-zinc-500 mt-2">
                  <span>Developer Build</span>
                  <BadgePulse />
                </div>

                <div className="my-auto space-y-4">
                  <div className="relative w-16 h-16 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-blue-500 rounded-2xl blur-md opacity-65 animate-pulse" />
                    <div className="relative w-full h-full bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-white text-base tracking-wide">{appName}</h4>
                    <p className="text-xs text-zinc-400">Mobile Solution Prototype</p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-300 font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3 h-3" />
                    Active Deployment
                  </div>
                </div>

                <div className="w-full space-y-3 mb-4">
                  <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: "30%" }}
                      animate={{ width: "90%" }}
                      transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                      className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-zinc-500">
                    <span>Performance: 98%</span>
                    <span>FPS: 60</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Home Bar */}
          <div className="h-6 w-full flex items-center justify-center relative z-30 select-none pb-2">
            <div className="w-[110px] h-[4px] bg-white/40 rounded-full hover:bg-white/60 transition-colors" />
          </div>

        </div>
      </div>

      {/* Pagination Indicators below mockup */}
      {hasScreenshots && screenshots.length > 1 && (
        <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-1.5">
          {screenshots.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "bg-purple-500 w-4" : "bg-zinc-600 hover:bg-zinc-400"
              }`}
              aria-label={`Go to screenshot ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function BadgePulse() {
  return (
    <div className="flex items-center gap-1.5">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-[10px] text-zinc-400">Live</span>
    </div>
  )
}
