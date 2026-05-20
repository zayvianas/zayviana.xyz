export const metadata = { title: "The Builder — Zayviana" }

export default function ProfessionalPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-block rounded-full bg-[#e11d48] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          The Builder
        </span>
        <h1 className="text-5xl font-light uppercase tracking-tight md:text-7xl">
          Something Is<br />Being Built.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-gray-500">
          PM, AI consulting, data, product strategy — the full professional story is on its way.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <a href="https://linkedin.com/in/zayviana" target="_blank" rel="noopener noreferrer"
            className="inline-block rounded-full bg-[#e11d48] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:opacity-90">
            See My LinkedIn
          </a>
          <a href="/connect" className="text-sm text-gray-400 underline underline-offset-4 hover:text-black transition">
            Or let's just talk →
          </a>
        </div>
      </div>
    </main>
  )
}
