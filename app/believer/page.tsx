export const metadata = { title: "The Believer — Zayviana" }

export default function BelieverPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-block rounded-full bg-[#e11d48] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          The Believer
        </span>
        <h1 className="text-5xl font-light uppercase tracking-tight md:text-7xl">
          Faith<br />First.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-500">
          Everything I am starts here. My faith in God is not a background detail — it is the foundation that shapes how I think, how I build, and how I love people.
        </p>
        <p className="mt-4 max-w-xl text-base text-gray-400">
          I'm working on sharing my full testimony — the hard parts, the turning points, and what God has done in my life. It's worth telling.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="inline-block rounded-full border border-[#e11d48] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#e11d48]">
            Testimony coming soon
          </span>
          <a href="/writings" className="text-sm text-gray-400 underline underline-offset-4 hover:text-black transition">
            Read my writings on faith →
          </a>
        </div>
      </div>
    </main>
  )
}
