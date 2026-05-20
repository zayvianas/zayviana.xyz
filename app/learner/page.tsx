export const metadata = { title: "The Educator — Zayviana" }

export default function LearnerPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="flex min-h-[90vh] flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 inline-block rounded-full bg-[#10b981] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
          The Educator
        </span>
        <h1 className="text-5xl font-light uppercase tracking-tight md:text-7xl">
          Still<br />Learning.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-500">
          Tutoring since 19. Teaching for 3 years. Living with ADHD and dyslexia — and turning that struggle into a superpower for others.
        </p>
        <p className="mt-4 max-w-xl text-base text-gray-400">
          The Educator is powered by <span className="font-semibold text-[#10b981]">The Good Tutor</span> — a tutoring and education brand rooted in empathy, creativity, and the belief that everyone can learn.
        </p>
        <div className="mt-10 flex flex-col items-center gap-3">
          <span className="inline-block rounded-full border border-[#10b981] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-[#10b981]">
            Full page coming soon
          </span>
          <a href="/connect" className="text-sm text-gray-400 underline underline-offset-4 hover:text-black transition">
            Interested in tutoring? Let's connect →
          </a>
        </div>
      </div>
    </main>
  )
}
