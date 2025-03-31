"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
}

export default function ProjectCard({ title, category, image, description }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[250px] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
        <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
          {category}
        </div>
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{title}</h3>
        <p className="text-zinc-700 dark:text-zinc-400 text-sm line-clamp-2">{description}</p>

        <div
          className={`mt-4 flex items-center text-zinc-900 dark:text-white text-sm font-medium transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          View Project <ExternalLink className="ml-2 h-4 w-4" />
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  )
}

