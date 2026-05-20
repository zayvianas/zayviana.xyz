export const metadata = { title: "Writings — Zayviana" }

const tags = ["Faith", "AI", "Crypto", "Learning", "PM", "Life", "Business", "Tech"]

export default function WritingsPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">
          Thoughts & Reflections
        </p>
        <h1 className="text-5xl font-light uppercase tracking-tight">Memos</h1>
        <p className="mt-4 text-lg text-gray-500">
          Faith, AI, life, learning — unfiltered. Tagged so you can find what resonates.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag}
              className="rounded-full border border-[#e11d48]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#e11d48] cursor-pointer hover:bg-[#e11d48] hover:text-white transition">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-center text-center py-20 rounded-2xl border border-dashed border-gray-200">
          <p className="text-4xl">✍️</p>
          <p className="mt-4 text-lg font-medium">First piece dropping soon.</p>
          <p className="mt-2 text-sm text-gray-400">Check back — there's a lot on my mind.</p>
        </div>
      </div>
    </main>
  )
}
