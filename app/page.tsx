"use client"

import { useState, useEffect, useRef } from "react"
import { useColorMode } from "./components/ColorModeProvider"

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || visible) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [visible])
  return { ref, visible }
}
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import {
  SiPython, SiJavascript, SiReact, SiHtml5, SiCss,
  SiDjango, SiMysql, SiSqlite, SiGit, SiVercel,
  SiDatabricks, SiSnowflake,
  SiJira, SiConfluence, SiMiro, SiFigma, SiNotion, SiSlack,
} from "react-icons/si"
import { FaJava } from "react-icons/fa"

const DI = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const techCategories = [
  {
    label: "Languages",
    items: [
      { name: "Python",      Icon: SiPython,     img: null,                          color: "#3776AB" },
      { name: "JavaScript",  Icon: SiJavascript, img: null,                          color: "#F7DF1E" },
      { name: "Java",        Icon: FaJava,       img: null,                          color: "#ED8B00" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { name: "React",  Icon: SiReact,  img: null, color: "#61DAFB" },
      { name: "HTML5",  Icon: SiHtml5,  img: null, color: "#E34F26" },
      { name: "CSS3",   Icon: SiCss,    img: null, color: "#1572B6" },
    ],
  },
  {
    label: "Backend & Databases",
    items: [
      { name: "Django",  Icon: SiDjango, img: null, color: "#44B78B" },
      { name: "MySQL",   Icon: SiMysql,  img: null, color: "#4479A1" },
      { name: "SQLite",  Icon: SiSqlite, img: null, color: "#003B57" },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      { name: "AWS",    Icon: null, img: `${DI}/amazonwebservices/amazonwebservices-plain-wordmark.svg`, color: "#FF9900" },
      { name: "Azure",  Icon: null, img: `${DI}/azure/azure-original.svg`,                               color: "#0078D4" },
      { name: "Git",    Icon: SiGit,    img: null,                   color: "#F05032" },
      { name: "Vercel", Icon: SiVercel, img: null,                   color: "#888888" },
    ],
  },
  {
    label: "Data & Analytics",
    items: [
      { name: "Tableau",    Icon: null, img: null, color: "#E97627" },
      { name: "Power BI",   Icon: null, img: `${DI}/microsoftsqlserver/microsoftsqlserver-plain.svg`, color: "#F2C811" },
      { name: "Databricks", Icon: SiDatabricks, img: null,                    color: "#FF3621" },
      { name: "Snowflake",  Icon: SiSnowflake,  img: null,                    color: "#29B5E8" },
    ],
  },
  {
    label: "PM & Collaboration",
    items: [
      { name: "Jira",         Icon: SiJira,       img: null,                           color: "#0052CC" },
      { name: "Confluence",   Icon: SiConfluence, img: null,                           color: "#0052CC" },
      { name: "Azure DevOps", Icon: null, img: `${DI}/azuredevops/azuredevops-original.svg`, color: "#0078D7" },
      { name: "Miro",         Icon: SiMiro,       img: null,                           color: "#FFD02F" },
      { name: "Figma",        Icon: SiFigma,      img: null,                           color: "#F24E1E" },
      { name: "Notion",       Icon: SiNotion,     img: null,                           color: "#888888" },
      { name: "Slack",        Icon: SiSlack,      img: null,                           color: "#4A154B" },
    ],
  },
]

const clients = [
  { name: "Feastables",               domain: "feastables.com" },
  { name: "Who's Your Landlord",      domain: "wyl.co" },
  { name: "SuperCarl",                domain: "supercarl.ai" },
  { name: "Levra",                    domain: "levra.me" },
  { name: "Tampa Electric",           domain: "tampaelectric.com" },
  { name: "Miter Brands",             domain: "miterbrands.com" },
  { name: "New South Windows",        domain: "newsouthwindow.com" },
  { name: "PGT Innovations",          domain: "pgtinnovations.com" },
  { name: "Upmeals / Demi",           domain: "getdemi.co" },
  { name: "Data For Inclusion",       domain: "dataforinclusion.com" },
  { name: "Atunwa Digital",           domain: "atunwadigital.com" },
  { name: "Positronix",               domain: "uspositronix.com" },
  { name: "Band Connect",             domain: "bandconnect.net" },
  { name: "Feeding South Florida",    domain: "feedingsouthflorida.org" },
  { name: "Klerk",                    domain: "klerk.ca" },
  { name: "Word Collections",         domain: "wordcollections.com" },
  { name: "Lima Compost",             domain: "limacompost.com" },
  { name: "Sumeera",                  domain: "sumeerasolutions.com" },
  { name: "HomeCare Hub",             domain: "homecarehub.com" },
  { name: "Ready Set Surgical",       domain: "readysetsurgical.com" },
]

function ClientCard({ name, domain, cardClass, onFail }: { name: string; domain: string; cardClass: string; onFail: () => void }) {
  return (
    <div className={cardClass}>
      <img
        suppressHydrationWarning
        src={`https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${domain}&size=128`}
        alt={name}
        className="h-12 w-12 rounded-xl object-contain"
        onError={onFail}
        onLoad={(e) => { if (e.currentTarget.naturalWidth < 48) onFail() }}
      />
      <span className="text-xs font-medium leading-tight">{name}</span>
    </div>
  )
}

export default function Home() {
  const { colorMode } = useColorMode()

  // dark body = dark or dark-base modes
  const darkBody  = colorMode === "dark" || colorMode === "dark-base"
  // dark swirl = same as dark body
  const darkSwirl = darkBody

  // Footer bg/text mirrors the navbar (defined in Navbar configs)
  const footerBg   = colorMode === "dark" || colorMode === "dark-base" ? "bg-white"
                   : colorMode === "base"                              ? "bg-black"
                   :                                                     "bg-[#e11d48]"
  const footerText = colorMode === "dark"      ? "text-[#e11d48]"
                   : colorMode === "dark-base" ? "text-black"
                   :                             "text-white"
  const footerMuted = colorMode === "dark"      ? "text-[#e11d48]/60"
                    : colorMode === "dark-base" ? "text-black/50"
                    :                             "text-white/70"

  const pillars = useFadeUp()
  const tech    = useFadeUp()
  const clientsSection = useFadeUp()
  const services = useFadeUp()
  const explore  = useFadeUp()
  const [failedDomains, setFailedDomains] = useState<Set<string>>(new Set())
  const markFailed = (domain: string) =>
    setFailedDomains(prev => new Set([...prev, domain]))
  const visibleClients = clients.filter(c => !failedDomains.has(c.domain))

  return (
    <main className={darkBody ? "min-h-screen bg-black text-white transition-colors duration-300" : "min-h-screen bg-white text-black transition-colors duration-300"}>


    
    {/* HERO */}
    <section className="relative h-screen w-full overflow-hidden">

      {/* Swirl Background */}
      <img
        src={darkSwirl ? "/black-swirl.png" : "/swirl.png"}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover swirl-animate"
      />

      {/* Subtle overlay to keep text readable */}
      <div className={`absolute inset-0 ${darkBody ? "bg-black/80" : "bg-white/40"}`} />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-10">
        <div className="max-w-3xl">
          <h1 className={`text-5xl font-light uppercase tracking-tight md:text-7xl ${darkBody ? "text-white" : "text-[var(--accent-red)]"}`}>
            Zayviana Singletary
          </h1>

          <p className="mt-4 text-lg font-medium">
            <span className="text-[var(--accent-red)]">Believer</span>
            <span className={darkBody ? " text-white/50" : " text-black/40"}> • </span>
            <span className="text-[var(--accent-pink)]">Builder</span>
            <span className={darkBody ? " text-white/50" : " text-black/40"}> • </span>
            <span className="text-[var(--accent-green)]">Creator</span>
            <span className={darkBody ? " text-white/50" : " text-black/40"}> • </span>
            <span className="text-[var(--accent-red)]">Founder</span>
            <span className={darkBody ? " text-white/50" : " text-black/40"}> • </span>
            <span className="text-[var(--accent-pink)]">Learner</span>
          </p>

          <p className={darkBody ? "mt-6 max-w-xl text-lg text-gray-300" : "mt-6 max-w-xl text-lg text-gray-700"}>
            Building at the intersection of faith, technology, creativity, and vision.
          </p>

          

          

        </div>
      </div>
    </section>
    
     {/* PILLARS */}
      <section ref={pillars.ref} className={`fade-up ${pillars.visible ? "visible" : ""} px-6 pt-32 pb-24 ${colorMode === "light" ? "swirl-bg" : ""}`}>
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-pink)]">
            Who I Am
          </p>
          <h2 className={`mb-3 text-center text-3xl font-light uppercase tracking-tight ${darkBody ? "text-white" : "text-black"}`}>
            Five Things That Define Me
          </h2>
          <p className={`mb-12 text-center text-base ${darkBody ? "text-gray-400" : "text-gray-500"}`}>
 Different passions. One foundation.
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            <div
              className={
                darkBody
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium text-[var(--accent-red)]">Believer</h2>
              <p
                className={
                  darkBody
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                Faith is the foundation of my life. It shapes how I think, how I lead, and how I move through the world.
              </p>
            </div>

            <div
              className={
                darkBody
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium text-[var(--accent-pink)]">Builder</h2>
              <p
                className={
                  darkBody
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                I enjoy turning ideas into real things. I build applications, systems, and solutions that bring vision into reality.
              </p>
            </div>

            <div
              className={
                darkBody
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium text-[var(--accent-green)]">Creator</h2>
              <p
                className={
                  darkBody
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                Creativity shows up in everything I do. Music, art, movement, design, and expression are all part of how I bring ideas to life.
              </p>
            </div>

            <div
              className={
                darkBody
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium text-[var(--accent-red)]">Founder</h2>
              <p
                className={
                  darkBody
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                I build and grow ideas, brands, and ventures with the intention of creating something meaningful and lasting.
              </p>
            </div>

            <div
              className={
                darkBody
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium text-[var(--accent-pink)]">Learner</h2>
              <p
                className={
                  darkBody
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                Always curious, always growing. Learning is not just something I do — it's who I am, and it's how I help others.
              </p>
            </div>
          </div>
        </div>
      </section>

    {/* TECH STACK */}
    <section ref={tech.ref} className={`fade-up ${tech.visible ? "visible" : ""} px-6 pb-24`}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-pink)]">
          Tools & Technologies
        </p>
        <h2
          className={
            darkBody
              ? "mb-14 text-center text-3xl font-light uppercase tracking-tight text-white"
              : "mb-14 text-center text-3xl font-light uppercase tracking-tight text-black"
          }
        >
          Tech Stack
        </h2>

        <div className="flex flex-col gap-10">
          {techCategories.map((cat) => (
            <div key={cat.label}>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-red)]">
                {cat.label}
              </p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map(({ name, Icon, img, color }) => (
                  <div
                    key={name}
                    className={
                      darkBody
                        ? "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm transition duration-200 hover:border-white/20 hover:bg-white/10"
                        : "flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-sm backdrop-blur-sm transition duration-200 hover:border-black/20 hover:bg-black/[0.06]"
                    }
                  >
                    {Icon && <Icon style={{ color }} className="text-base shrink-0" />}
                    {!Icon && img && (
                      <img src={img} alt={name} className="h-4 w-4 shrink-0 object-contain" />
                    )}
                    {!Icon && !img && (
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                    )}
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CLIENTS */}
    <section ref={clientsSection.ref} className={`fade-up ${clientsSection.visible ? "visible" : ""} px-6 pb-28 pt-8`}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-pink)]">
          Work & Collaboration
        </p>
        <h2
          className={
            darkBody
              ? "mb-14 text-center text-3xl font-light uppercase tracking-tight text-white"
              : "mb-14 text-center text-3xl font-light uppercase tracking-tight text-black"
          }
        >
          Brands I've Worked With
        </h2>

        {/* Carousel track — duplicated for seamless infinite loop */}
        <div className="relative overflow-hidden">
          {/* fade edges */}
          <div className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r to-transparent ${darkBody ? "from-black" : "from-white"}`} />
          <div className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent ${darkBody ? "from-black" : "from-white"}`} />

          <div
            className="flex w-max gap-4 py-2"
            style={{ animation: "marquee 90s linear infinite" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
          >
            {[...visibleClients, ...visibleClients].map(({ name, domain }, i) => (
              <ClientCard
                key={`${name}-${i}`}
                name={name}
                domain={domain}
                onFail={() => markFailed(domain)}
                cardClass="flex w-40 shrink-0 flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-6 text-center text-black transition duration-200 hover:border-gray-300 hover:shadow-sm"
              />
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-pink)]">
          And Many More
        </p>
      </div>
    </section>

    {/* SERVICES */}
    <section ref={services.ref} className={`fade-up ${services.visible ? "visible" : ""} px-6 py-24 ${darkBody ? "bg-white/5" : "bg-black/[0.02]"}`}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-pink)]">
          What I Do
        </p>
        <h2 className={`mb-14 text-center text-3xl font-light uppercase tracking-tight ${darkBody ? "text-white" : "text-black"}`}>
          Services
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🤖", title: "AI Consulting", desc: "Strategy, implementation, and education around AI tools, workflows, and products for teams and businesses." },
            { icon: "📋", title: "Product & Project Management", desc: "End-to-end product strategy, roadmapping, sprint planning, and project delivery for startups and enterprises." },
            { icon: "🌐", title: "Web & Digital Services", desc: "Websites, branding, logos, and digital presence — built to reflect who you actually are." },
            { icon: "🚀", title: "Startup & Brand Building", desc: "From zero to launched. Helping founders and small businesses establish their foundation and identity." },
            { icon: "📣", title: "Marketing & Social Media", desc: "Content strategy, social presence, and storytelling that connects your brand to the right audience." },
            { icon: "💡", title: "Business Consulting", desc: "Operational guidance, tools setup, and strategic thinking for growing organizations and entrepreneurs." },
          ].map(({ icon, title, desc }) => (
            <div key={title} className={`rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
              darkBody
                ? "border-white/10 bg-white/5 hover:border-[var(--accent-pink)]/40 hover:bg-white/10"
                : "border-black/10 bg-white hover:border-[var(--accent-pink)]/40 hover:shadow-md"
            }`}>
              <span className="text-3xl">{icon}</span>
              <h3 className="mt-4 text-base font-semibold">{title}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${darkBody ? "text-gray-400" : "text-gray-600"}`}>{desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="/connect"
            className="inline-block rounded-full bg-[var(--accent-red)] px-8 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white transition hover:opacity-90">
            Work With Me
          </a>
        </div>
      </div>
    </section>

    {/* EXPLORE MY WORLD */}
    <section ref={explore.ref} className={`fade-up ${explore.visible ? "visible" : ""} px-6 py-24`}>
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-pink)]">
          There's More
        </p>
        <h2 className={`mb-14 text-center text-3xl font-light uppercase tracking-tight ${darkBody ? "text-white" : "text-black"}`}>
          Explore My World
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "The Believer",  href: "/believer",     tag: "Faith",         desc: "My testimony, my faith, and why God is the foundation of everything I do." },
            { label: "The Builder",   href: "/professional", tag: "Professional",  desc: "PM, AI, data, product strategy and a decade of building things that work." },
            { label: "The Creator",   href: "/creative",     tag: "Creative",      desc: "Music, art, and creative expression — made with purpose and rooted in gratitude." },
            { label: "The Educator",  href: "/learner",      tag: "Education",     desc: "Tutoring, teaching, and a lifelong love of learning rooted in personal story." },
            { label: "The Founder",   href: "/ventures",     tag: "Business",      desc: "The Good Tutor, Nest Egg, Nearby, Christians Anonymous, and more." },
            { label: "Writings",      href: "/writings",     tag: "Blog",          desc: "Faith, AI, crypto, life — unfiltered thoughts with tags you can follow." },
          ].map(({ label, href, tag, desc }) => (
            <a key={label} href={href}
              className={`group relative overflow-hidden rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                darkBody
                  ? "border-white/10 bg-white/5 hover:bg-white/10"
                  : "border-black/10 bg-white hover:shadow-md"
              }`}>
              <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-[#e11d48] via-[#f472b6] to-[#10b981] px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-white">
                {tag}
              </span>
              <h3 className="mt-2 text-xl font-semibold">{label}</h3>
              <p className={`mt-2 text-sm leading-relaxed ${darkBody ? "text-gray-400" : "text-gray-600"}`}>{desc}</p>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-[var(--accent-red)]">
                Explore →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>

     {/* FOOTER — mirrors navbar bg/text */}
      <footer className={`w-full ${footerBg} ${footerText} px-6 py-12 transition-colors duration-300`}>
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-xs font-semibold uppercase tracking-[0.25em]">
            Zayviana Singletary
          </p>

          <p className={`mt-3 text-xs uppercase tracking-[0.18em] ${footerMuted}`}>
            Believer • Builder • Creator • Founder • Learner
          </p>

          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-6 text-xl">
              <a href="https://github.com/zayvianas" target="_blank" className="hover:opacity-60 transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/zayviana" target="_blank" className="hover:opacity-60 transition">
                <FaLinkedin />
              </a>
              <a href="mailto:hello@zayviana.xyz" className="hover:opacity-60 transition">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <p className={`mt-8 text-xs ${footerMuted}`}>
            © {new Date().getFullYear()} Zayviana Singletary
          </p>

        </div>
      </footer>
    </main>
  )
}