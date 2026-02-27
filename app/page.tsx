import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section id="home" className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">

        {/* Decorative Background Element */}
        <div className="absolute top-1/4 w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full -z-10" />

        <span className="text-indigo-400 text-xs font-bold tracking-[0.3em] uppercase mb-6 animate-pulse">
          Available for new projects
        </span>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9]">
          CRAFTING <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
            DIGITAL DEPTH
          </span>
        </h1>

        <p className="max-w-xl text-zinc-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
          I&apos;m Ravi, a Creative Developer focused on building high-performance,
          visually stunning web applications that feel like the future.
        </p>

        <div className="flex gap-4">
          <a href="#projects" className="px-8 py-4 bg-indigo-600 rounded-2xl font-bold hover:bg-indigo-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-600/20">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 border border-white/10 rounded-2xl font-bold hover:bg-white/5 transition-all hover:scale-105 active:scale-95">
            Get in Touch
          </a>
        </div>
      </section>

      {/* Section divider */}
      <div className="section-divider w-full" />

      {/* About Section */}
      <About />
      <div className="section-divider w-full" />

      {/* Skills Section */}
      <Skills />
      <div className="section-divider w-full" />

      {/* Projects Section */}
      <Projects />
      <div className="section-divider w-full" />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
