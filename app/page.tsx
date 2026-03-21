"use client";

import About from "@/components/About";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import Image from "next/image";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id='home' className="flex flex-col min-h-screen bg-[#09090b]">

      {/* HERO SECTION */}
      <section className="relative w-full min-h-screen flex items-center overflow-hidden">

        {/* Animated Background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-sky-500/[0.06] rounded-full blur-[140px] animate-pulse-glow" />
          <div className="absolute bottom-20 -left-20 w-[350px] h-[350px] bg-indigo-500/[0.04] rounded-full blur-[120px] animate-drift" />

          <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-sky-400/30 rounded-full animate-float" />
          <div className="absolute top-[55%] left-[70%] w-1 h-1 bg-sky-400/20 rounded-full animate-float-reverse" />
          <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-indigo-400/15 rounded-full animate-float delay-[2s]" />

          {/* Grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-[1] max-w-[1200px] mx-auto w-full px-16 pt-[140px] pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT — Text */}
          <div className="flex flex-col items-start">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700/40 text-zinc-300 text-[13px] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
              Lorem ipsum dolor sit.
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold tracking-tight leading-[1.1] text-zinc-100 mb-6"
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">
                Ravi Ladumor
              </span>
              .
              <br />
              <span className="text-zinc-400 text-[clamp(2.5rem,3vw,3.5rem)]">
                Lorem ipsum dolor sit amet consectetur.
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-[17px] text-zinc-500 leading-relaxed max-w-[480px] mb-10"
            >
              I&apos;m a student developer passionate about full-stack engineering.
              I love learning new technologies, crafting clean user interfaces,
              and turning ideas into real projects.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-zinc-100 text-zinc-900 hover:bg-white hover:scale-[1.03] active:scale-[0.97] transition-all shadow-lg shadow-white/10"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>

              {/* Dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 hidden sm:block" />

              {/* Socials */}
              <div className="flex items-center gap-2.5">
                {[
                  { icon: Github, href: "https://github.com", label: "GitHub" },
                  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { icon: Mail, href: "#contact", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    aria-label={label}
                    className="flex items-center justify-center w-[42px] h-[42px] rounded-xl border border-zinc-800 bg-zinc-900/60 text-zinc-400 hover:text-sky-400 hover:border-sky-400/30 hover:bg-zinc-800 transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    <Icon className="w-[18px] h-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Bitmoji */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Glow */}
            <div className="absolute w-[380px] h-[380px] bg-sky-500/[0.07] rounded-full blur-[80px] animate-pulse-glow" />

            {/* Float container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px]">
                <div className="absolute inset-0 rounded-full border border-zinc-800/50" />
                <div className="absolute -inset-3 rounded-full border border-sky-400/10" />

                <Image
                  src="/bitmoji.png"
                  alt="Ravi Ladumor — Developer"
                  fill
                  className="object-contain rounded-full p-2"
                  priority
                />
              </div>

              {/* Tech badges */}
              <motion.div
                animate={{ y: [0, -6, 0], x: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-2 -right-4 px-3.5 py-1.5 rounded-[10px] bg-zinc-800/85 border border-zinc-700/50 text-xs font-semibold text-sky-400 backdrop-blur-sm shadow-lg shadow-black/30"
              >
                ⚛️ React.js
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0], x: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 -left-6 px-3.5 py-1.5 rounded-[10px] bg-zinc-800/85 border border-zinc-700/50 text-xs font-semibold text-indigo-400 backdrop-blur-sm shadow-lg shadow-black/30"
              >
                🚀 Next.js
              </motion.div>

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute top-1/2 -right-8 px-3.5 py-1.5 rounded-[10px] bg-zinc-800/85 border border-zinc-700/50 text-xs font-semibold text-emerald-400 backdrop-blur-sm shadow-lg shadow-black/30"
              >
                🟢 Node.js
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-600"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1.5px] h-5 bg-gradient-to-b from-sky-400/50 to-transparent"
          />
        </motion.div>
      </section>

      <div id="about" className="min-h-screen">
        <About />
      </div>

      <div id="skills" className="min-h-screen">
        <Skills />
      </div>

      <div id="projects" className="min-h-screen">
        <Projects />
      </div>

      <div id="contact" className="min-h-screen">
        <Contact />
      </div>

      <Footer />
    </main>
  );
}
