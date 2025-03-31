import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  quote: string
  avatar: string
}

export default function TestimonialCard({ name, role, quote, avatar }: TestimonialCardProps) {
  return (
    <div className="p-6 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center mb-6">
        <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-zinc-200 dark:border-zinc-800">
          <Image src={avatar || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{name}</h4>
          <p className="text-sm text-zinc-700 dark:text-zinc-400">{role}</p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -top-4 -left-2 text-5xl text-zinc-200 dark:text-zinc-800 font-serif">"</div>
        <p className="relative text-zinc-700 dark:text-zinc-400 italic z-10">{quote}</p>
        <div className="absolute -bottom-10 -right-2 text-5xl text-zinc-200 dark:text-zinc-800 font-serif">"</div>
      </div>

      <div className="mt-6 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg key={star} className="h-5 w-5 text-zinc-900 dark:text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  )
}

