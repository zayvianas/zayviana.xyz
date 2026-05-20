import Link from "next/link"

export const metadata = { title: "Notes — Zayviana" }

const tags = ["Faith", "AI", "Crypto", "Learning", "PM", "Life", "Business", "Tech"]

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="sticky top-0 z-50 w-full bg-[#e11d48] px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <img src="/favicon-z.png" alt="Zayviana" className="h-9 w-9 rounded-lg" />
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-white">Zayviana</span>
          </Link>
          <Link href="/" className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70 hover:text-white transition">
            ← Back Home
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 py-24">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">
          Thoughts & Reflections
        </p>
        <h1 className="text-5xl font-light uppercase tracking-tight">Notes</h1>
        <p className="mt-4 text-lg text-gray-500">
          Faith, AI, life, learning — unfiltered. Tagged so you can find what resonates.
        </p>

        {/* Tags */}
        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag}
              className="rounded-full border border-[#e11d48]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#e11d48] cursor-pointer hover:bg-[#e11d48] hover:text-white transition">
              {tag}
            </span>
          ))}
        </div>

        {/* Empty state */}
        <div className="mt-20 flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-dashed border-gray-200">
          <p className="text-4xl">✍️</p>
          <p className="mt-4 text-lg font-medium">First note dropping soon.</p>
          <p className="mt-2 text-sm text-gray-400">Check back — there's a lot on my mind.</p>
        </div>
      </div>
    </main>
  )
}
