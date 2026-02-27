"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Code2, ArrowDownRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#09090b]">

      {/* ── HERO SECTION ── */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center items-center px-6 overflow-hidden">

        {/* Subtle background glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-3xl w-full flex flex-col items-center mt-20 text-center">

          {/* Badge: Student Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/40 border border-zinc-700/50 text-zinc-300 text-xs sm:text-sm mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
            Lorem ipsum dolor sit.
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100 mb-6"
          >
            Hi, I&apos;m <span className="text-sky-400">Ravi Ladumor</span>.<br />
            Lorem ipsum dolor sit amet consectetur.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I&apos;m a student developer passionate about full-stack engineering.
            I love learning new technologies, crafting clean user interfaces,
            and turning ideas into real projects.
          </motion.p>

          {/* Call to Actions & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row p-4 items-center gap-4 sm:gap-6"
          >
            {/* Primary Action */}
            {/* Social Icons inside pill */}
            <div className="flex items-center gap-4 p-4 bg-zinc-800/40 border border-zinc-700/50 rounded-full">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full text-zinc-400 hover:text-sky-400 hover:bg-zinc-700/50 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full text-zinc-400 hover:text-sky-400 hover:bg-zinc-700/50 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                className="p-2.5 rounded-full text-zinc-400 hover:text-sky-400 hover:bg-zinc-700/50 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold">Scroll down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDownRight className="w-4 h-4 rotate-45 opacity-50" />
          </motion.div>
        </motion.div>

      </section>

      {/* 
         <About />
         <Skills />
         <Projects />
         <Contact />
         <Footer />
      */}
      <div id="about" className="h-screen w-full" />
    </main>
  );
}
function ArrowDown(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
  );
}
