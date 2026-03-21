"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="w-full py-32 px-6 flex justify-center bg-[#09090b] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-sky-500/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -30 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true, margin: "-100px" }} 
          transition={{ duration: 0.6 }} 
          className="lg:col-span-4 space-y-6"
        >
          <div className="flex items-center gap-4">
             <span className="text-sky-400 font-mono text-[11px] tracking-[0.3em] uppercase font-semibold">01 / About</span>
             <div className="h-[1px] w-12 bg-zinc-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-[1.1] text-zinc-100">
            I don't just write code. <br />
            <span className="text-zinc-600">I build digital experiences.</span>
          </h2>
        </motion.div>

        
        <div className="lg:col-span-8 flex flex-col md:flex-row gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 0.6, delay: 0.2 }} 
            className="flex-1 space-y-8"
          >
            <p className="text-[17px] text-zinc-400 leading-relaxed font-medium max-w-lg">
              I am a 3rd-year Computer Science student based in India, with a deep passion for 
              full-stack development. I enjoy learning modern frameworks and focus on 
              building clean, responsive, and performance-driven applications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
               <div className="space-y-4 group p-7 bg-zinc-900/40 rounded-2xl border border-zinc-800/50 hover:border-sky-500/30 hover:bg-zinc-900/80 transition-all duration-300">
                  <h4 className="text-sky-400 text-xs font-bold uppercase tracking-widest">Philosophy</h4>
                  <p className="text-zinc-400 text-[14px] leading-relaxed">
                    Always stay curious. I dive deep into documentation and try out new tools to 
                    ensure I can pick the best technology for the problem.
                  </p>
               </div>
               <div className="space-y-4 group p-7 bg-zinc-900/40 rounded-2xl border border-zinc-800/50 hover:border-sky-500/30 hover:bg-zinc-900/80 transition-all duration-300">
                  <h4 className="text-sky-400 text-xs font-bold uppercase tracking-widest">Strategy</h4>
                  <p className="text-zinc-400 text-[14px] leading-relaxed">
                    Plan first, code later. I believe in writing modular, maintainable code rather than 
                    rushing to a quick fix that breaks at scale.
                  </p>
               </div>
            </div>

            <div className="pt-8 mt-10 border-t border-zinc-800/60">
                <h4 className="text-sky-400 text-xs font-bold uppercase tracking-widest mb-4">Current Focus</h4>
                <p className="text-zinc-400 text-[15px] leading-relaxed max-w-lg">
                  Beyond full-stack web development, I am actively exploring Artificial Intelligence and Machine Learning. 
                  I am fascinated by how data-driven models and LLMs can integrate with modern web applications to 
                  create smarter, more intuitive user experiences.
                </p>
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9, y: 30 }} 
             whileInView={{ opacity: 1, scale: 1, y: 0 }} 
             viewport={{ once: true, margin: "-100px" }} 
             transition={{ duration: 0.6, delay: 0.4 }} 
             className="w-full md:w-[280px] shrink-0"
          >
             <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-zinc-800 relative overflow-hidden group">
                
                <Image
                   src="/your_photo.png"
                   alt="Portrait photo of Ravi Ladumor, Full Stack Developer"
                   fill
                   className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-sky-400/80 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <div className="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
             </div>
             
             <div className="mt-5 flex justify-between items-center px-2">
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold pb-1 border-b border-zinc-800">Based in India</span>
                <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-semibold pb-1 border-b border-zinc-800">GMT +5:30</span>
             </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default About;
