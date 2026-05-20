export const metadata = { title: "Connect — Zayviana" }

const ways = [
  {
    label: "LinkedIn",
    desc: "Professional connection, collabs, or consulting inquiries.",
    href: "https://linkedin.com/in/zayviana",
    cta: "Connect on LinkedIn",
    color: "#e11d48",
    external: true,
  },
  {
    label: "Email",
    desc: "For detailed inquiries, partnerships, or anything that needs a real conversation.",
    href: "mailto:hello@zayviana.xyz",
    cta: "Send an Email",
    color: "#f472b6",
    external: false,
  },
  {
    label: "The Good Tutor",
    desc: "Looking for tutoring or educational support? This is the place.",
    href: "https://thegoodtutor.co",
    cta: "Book a Session",
    color: "#10b981",
    external: true,
  },
]

export default function ConnectPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#f472b6]">
          Let's Talk
        </p>
        <h1 className="text-5xl font-light uppercase tracking-tight">Connect</h1>
        <p className="mt-4 max-w-xl text-lg text-gray-500">
          Whether it's a project, a question, or just a conversation — I'm here for it.
        </p>

        <div className="mt-16 flex flex-col gap-6">
          {ways.map(({ label, desc, href, cta, color, external }) => (
            <div key={label} className="rounded-2xl border border-black/10 p-8 transition hover:-translate-y-1 hover:shadow-md duration-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color }}>{label}</p>
              <p className="mt-3 text-base text-gray-500 leading-relaxed">{desc}</p>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="mt-5 inline-block rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:opacity-90"
                style={{ backgroundColor: color }}
              >
                {cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-dashed border-gray-200 p-10 text-center">
          <p className="text-2xl font-light uppercase tracking-tight">Got a big idea?</p>
          <p className="mt-3 text-sm text-gray-400 max-w-md mx-auto">
            I work with founders, brands, and teams at the intersection of AI, product, and impact. If something's brewing — let's build it.
          </p>
          <a
            href="mailto:hello@zayviana.xyz"
            className="mt-6 inline-block rounded-full bg-[#e11d48] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:opacity-90"
          >
            Start the Conversation
          </a>
        </div>
      </div>
    </main>
  )
}
