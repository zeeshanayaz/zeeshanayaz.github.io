"use client"

import { motion } from "framer-motion"
import { Code, Database, Flame, GitBranch, Globe, Monitor, Palette, Smartphone, Upload, Zap } from "lucide-react"

interface AnimatedTechIconProps {
  name: string
  className?: string
  size?: number
}

export function AnimatedTechIcon({ name, className = "", size = 24 }: AnimatedTechIconProps) {
  const normName = name.toLowerCase().trim()

  // Custom high-quality SVG renders for key tech stacks to make the site look premium
  if (normName.includes("flutter") || normName.includes("dart")) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <path d="M14.33 2.25L4.5 12.08l6.32 6.32 9.43-9.43-5.92-6.72z" fill="#02569B" />
        <path d="M14.33 2.25L9.61 7l4.72 4.72h5.92L14.33 2.25z" fill="#0175C2" />
        <path d="M9.61 7L4.5 12.08l5.11 5.11L14.33 12 9.61 7z" fill="#13B9FD" />
        <path d="M10.82 18.4L14.33 12H9.61l1.21 6.4z" fill="#02569B" />
        <path d="M14.33 12l4.72 4.72h-5.92L10.82 18.4l3.51-6.4z" fill="#0175C2" />
        <path d="M14.33 12l-3.51 6.4 3.51 3.35h5.92l-5.92-9.75z" fill="#13B9FD" />
      </motion.svg>
    )
  }

  if (normName.includes("kotlin")) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        whileHover={{ scale: 1.15, rotate: -5 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <path d="M24 24H0V0h24L12 12z" fill="url(#kotlin-grad)" />
        <defs>
          <linearGradient id="kotlin-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#E24429" />
            <stop offset="0.3" stopColor="#B32486" />
            <stop offset="0.7" stopColor="#8026B1" />
            <stop offset="1" stopColor="#306EE8" />
          </linearGradient>
        </defs>
      </motion.svg>
    )
  }

  if (normName.includes("react native") || normName.includes("react")) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        animate={{ rotate: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.2 }}
      >
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="3.5" ry="9" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="#61DAFB" />
      </motion.svg>
    )
  }

  if (normName.includes("android")) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#3DDC84"
        className={className}
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <path d="M17.5 11c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-11 0c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm11.41-6.12l1.62-2.8a.434.434 0 00-.16-.59.434.434 0 00-.59.16l-1.65 2.86C15.7 3.73 13.92 3.25 12 3.25c-1.92 0-3.7.48-5.13 1.26L5.22 1.65a.434.434 0 00-.59-.16.434.434 0 00-.16.59l1.62 2.8C3.12 6.5 1.09 9.87 1 13.75h22c-.09-3.88-2.12-7.25-5.09-8.87z" />
      </motion.svg>
    )
  }

  if (normName.includes("ios") || normName.includes("apple") || normName.includes("swift")) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        whileHover={{ scale: 1.15 }}
      >
        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
      </motion.svg>
    )
  }

  if (normName.includes("firebase") || normName.includes("flame")) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        whileHover={{ scale: 1.15, rotate: 3 }}
      >
        <path d="M3.89 19.12L2.01 7.21a.48.48 0 01.81-.46L7 11.08l-3.11 8.04z" fill="#FFA611" />
        <path d="M12 2.07a.5.5 0 00-.77.06l-4 6.78-3.34 10.21L12 2.07z" fill="#F58220" />
        <path d="M20.12 19.12l-1.89-11.9a.48.48 0 00-.81-.46L3.89 19.12l8.11 4.54a1.86 1.86 0 002 0l6.12-4.54z" fill="#F2C12E" />
        <path d="M12.01 23.66a1.86 1.86 0 01-1 0l-7.12-4.54 7.02-6.52a.49.49 0 01.76.01l1.12 6.51 6.34-6.51-7.12 11.05z" fill="#FFA611" />
      </motion.svg>
    )
  }

  if (normName.includes("supabase")) {
    return (
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        whileHover={{ scale: 1.15, skewX: -5 }}
      >
        <path d="M13.62 1L4 12.46h8.21L10.38 23 20 11.54h-8.21L13.62 1z" fill="url(#suba-grad)" />
        <defs>
          <linearGradient id="suba-grad" x1="4" y1="1" x2="20" y2="23" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3ECF8E" />
            <stop offset="1" stopColor="#30B579" />
          </linearGradient>
        </defs>
      </motion.svg>
    )
  }

  // Icons matching general category fallbacks
  const icons: Record<string, any> = {
    code: Code,
    smartphone: Smartphone,
    database: Database,
    flame: Flame,
    zap: Zap,
    gitbranch: GitBranch,
    globe: Globe,
    palette: Palette,
    monitor: Monitor,
    upload: Upload,
  }

  const IconComp = icons[normName] || Code

  return (
    <motion.div
      whileHover={{ scale: 1.15 }}
      className={`flex items-center justify-center ${className}`}
    >
      <IconComp size={size} />
    </motion.div>
  )
}
