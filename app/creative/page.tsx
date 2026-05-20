export const metadata = { title: "The Creator — Zayviana" }

export default function CreativePage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-block rounded-full bg-[#f472b6] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          The Creator
        </span>
        <h1 className="text-5xl font-light uppercase tracking-tight md:text-7xl">
          Made to<br />Create.
        </h1>
        <p className="mt-6 max-w-lg text-lg text-gray-500">
          Music. Art. Movement. Expression. Creativity is a gift — and this is where I use it. The full creative world of Zayviana is getting its own home.
        </p>
        <p className="mt-4 text-sm font-medium text-[#f472b6] uppercase tracking-[0.15em]">
          creative.zayviana.xyz — coming soon
        </p>
        <div className="mt-10">
          <a href="/" className="text-sm text-gray-400 underline underline-offset-4 hover:text-black transition">
            ← Back to the mothership
          </a>
        </div>
      </div>
    </main>
  )
}
