"use client"

import { Code, Fingerprint, Layers, MessageCircle, Palette, TrendingUp } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: "Code" | "Palette" | "Layers" | "Fingerprint" | "TrendingUp" | "MessageCircle"
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-10 w-10" />
      case "Palette":
        return <Palette className="h-10 w-10" />
      case "Layers":
        return <Layers className="h-10 w-10" />
      case "Fingerprint":
        return <Fingerprint className="h-10 w-10" />
      case "TrendingUp":
        return <TrendingUp className="h-10 w-10" />
      case "MessageCircle":
        return <MessageCircle className="h-10 w-10" />
      default:
        return <Code className="h-10 w-10" />
    }
  }

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-700 transition-colors">
      <div className="mb-4 text-zinc-900 dark:text-white">{getIcon()}</div>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
      <p className="text-zinc-700 dark:text-zinc-400">{description}</p>

      <div className="mt-4 h-1 w-12 bg-zinc-900 dark:bg-white"></div>
    </div>
  )
}

