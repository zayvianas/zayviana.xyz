"use client"

import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

export default function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <main
      className={
        darkMode
          ? "min-h-screen bg-black text-white transition-colors duration-300"
          : "min-h-screen bg-white text-black transition-colors duration-300"
      }
    >
      {/* NAVBAR */}
    <nav
        className={
          darkMode
            ? "w-full flex justify-between items-center px-10 py-5 bg-white text-black shadow-sm transition-colors duration-300"
            : "w-full flex justify-between items-center px-10 py-5 bg-black text-white shadow-sm transition-colors duration-300"
        }
      >
        <a href="/">
          <img
            src={darkMode ? "/logo.svg" : "/logo-light.svg"}
            alt="Logo"
            className="h-8"
          />
        </a>

        <div className="flex items-center gap-8 text-sm">
         <div className="flex items-center gap-6 text-xl">

  <a
    href="https://github.com/zayvianas"
    target="_blank"
    className="hover:opacity-60 transition"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/zayviana"
    target="_blank"
    className="hover:opacity-60 transition"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:hello@zayviana.xyz"
    className="hover:opacity-60 transition"
  >
    <FaEnvelope />
  </a>

</div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={
              darkMode
                ? "rounded-full border border-black px-3 py-1 text-xs uppercase tracking-wider transition hover:bg-black hover:text-white"
                : "rounded-full border border-white px-3 py-1 text-xs uppercase tracking-wider transition hover:bg-white hover:text-black"
            }
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>
      </nav>

    
    {/* HERO */}
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Image */}
      <img
        src="/hero.jpg"
        alt="Zayviana"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dynamic Overlay */}
      <div
        className={
          darkMode
            ? "absolute inset-0 bg-black/60"
            : "absolute inset-0 bg-white/70"
        }
      />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-10">
        <div className="max-w-3xl">
          <h1
            className={
              darkMode
                ? "text-5xl font-light uppercase tracking-tight text-white md:text-7xl"
                : "text-5xl font-light uppercase tracking-tight text-black md:text-7xl"
            }
          >
            Zayviana Singletary
          </h1>

          <p
            className={
              darkMode
                ? "mt-4 text-lg text-gray-300"
                : "mt-4 text-lg text-gray-700"
            }
          >
            Believer • Builder • Creator • Founder
          </p>

          <p
            className={
              darkMode
                ? "mt-6 max-w-xl text-lg text-gray-400"
                : "mt-6 max-w-xl text-lg text-gray-800"
            }
          >
            Building at the intersection of faith, technology, creativity, and vision.
          </p>

          

          

        </div>
      </div>
    </section>
    
     {/* PILLARS */}
      <section className="px-6 pt-32 pb-24">
        <div className="mx-auto max-w-6xl">
          <p
            className={
              darkMode
                ? "mb-12 text-center text-xl-large font-semibold uppercase tracking-[0.25em] text-gray-400"
                : "mb-12 text-center text-xl-large font-semibold uppercase tracking-[0.25em] text-gray-700"
            }
          >
            Who I Am
          </p>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div
              className={
                darkMode
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium">Believer</h2>
              <p
                className={
                  darkMode
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                Faith is the foundation of my life. It shapes how I think, how I lead, and how I move through the world.
              </p>
            </div>

            <div
              className={
                darkMode
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium">Builder</h2>
              <p
                className={
                  darkMode
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                I enjoy turning ideas into real things. I build applications, systems, and solutions that bring vision into reality.
              </p>
            </div>

            <div
              className={
                darkMode
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium">Creator</h2>
              <p
                className={
                  darkMode
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                Creativity shows up in everything I do. Music, art, movement, design, and expression are all part of how I bring ideas to life.
              </p>
            </div>

            <div
              className={
                darkMode
                  ? "rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                  : "rounded-3xl border border-black/10 bg-black/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-black/20 hover:bg-black/[0.05]"
              }
            >
              <h2 className="text-xl font-medium">Founder</h2>
              <p
                className={
                  darkMode
                    ? "mt-4 text-sm leading-relaxed text-gray-400"
                    : "mt-4 text-sm leading-relaxed text-gray-600"
                }
              >
                I build and grow ideas, brands, and ventures with the intention of creating something meaningful and lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

     {/* FOOTER */}
      <footer
        className={
          darkMode
            ? "w-full bg-white text-black px-6 py-12 transition-colors duration-300"
            : "w-full bg-black text-white px-6 py-12 transition-colors duration-300"
        }
      >
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm font-medium">
            Zayviana Singletary
          </p>

          <p
            className={
              darkMode
                ? "mt-3 text-xs uppercase tracking-[0.18em] text-gray-600"
                : "mt-3 text-xs uppercase tracking-[0.18em] text-gray-400"
            }
          >
            Believer • Builder • Creator • Founder
          </p>

          <div
            className={
              darkMode
                ? "mt-6 flex justify-center gap-6 text-sm text-gray-700"
                : "mt-6 flex justify-center gap-6 text-sm text-gray-300"
            }
          >
           <div className="flex items-center gap-6 text-xl">

              <a
                href="https://github.com/zayvianas"
                target="_blank"
                className="hover:opacity-60 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/zayviana"
                target="_blank"
                className="hover:opacity-60 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:hello@zayviana.xyz"
                className="hover:opacity-60 transition"
              >
                <FaEnvelope />
              </a>

            </div>
          </div>

          <p
            className={
              darkMode
                ? "mt-8 text-xs text-gray-500"
                : "mt-8 text-xs text-gray-500"
            }
          >
            © {new Date().getFullYear()} Zayviana Singletary
          </p>

        </div>
      </footer>
    </main>
  )
}