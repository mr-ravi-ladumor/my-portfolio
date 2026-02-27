"use client";

import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full py-32 px-6 flex justify-center bg-[#030303] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-indigo-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Marking & Large Heading */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-4">
             <span className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase">01 / About</span>
             <div className="h-[1px] w-12 bg-zinc-800" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
            I don't just write code. <br />
            <span className="text-zinc-500">I design how it feels.</span>
          </h2>
        </div>

        {/* Right Side: Detailed Narrative */}
        <div className="lg:col-span-8 flex flex-col md:flex-row gap-12">
          <div className="flex-1 space-y-8">
            <p className="text-xl text-zinc-400 leading-relaxed font-medium">
              I am a Creative Developer based in India, with over 3 years of 
              experience in building high-fidelity digital products. I specialize 
              in the React ecosystem, focusing on performance, motion, and 
              uncompromising visual quality.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
               <div className="space-y-3 group p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
                  <h4 className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Philosophy</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Efficiency is just the baseline. I strive to create interfaces 
                    that evoke emotion and demand attention through subtle details.
                  </p>
               </div>
               <div className="space-y-3 group p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-indigo-500/30 transition-all">
                  <h4 className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Strategy</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    I treat every project as a unique problem to be solved with 
                    bespoke code, ensuring it stands out in a crowded digital space.
                  </p>
               </div>
            </div>

            {/* Bottom Stats Row */}
            <div className="pt-10 flex border-t border-zinc-900 mt-12">
               <div className="flex-1">
                  <p className="text-3xl font-black text-white">3+</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Years of Exp</p>
               </div>
               <div className="flex-1">
                  <p className="text-3xl font-black text-white">20+</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Projects</p>
               </div>
               <div className="flex-1">
                  <p className="text-3xl font-black text-white">100%</p>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-2">Focus</p>
               </div>
            </div>
          </div>

          {/* Right most: Portrait Placeholder */}
          <div className="w-full md:w-64 shrink-0">
             <div className="aspect-[3/4] rounded-2xl bg-zinc-900 border border-white/5 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                   <p className="text-zinc-800 font-bold uppercase text-[10px] tracking-widest">Your Image</p>
                </div>
                
                {/* Visual accents */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-indigo-500/50" />
                <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             </div>
             
             <div className="mt-4 flex justify-between items-center px-2">
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">Based in India</span>
                <div className="w-1 h-1 rounded-full bg-zinc-600" />
                <span className="text-[10px] text-zinc-600 uppercase tracking-widest">GMT +5:30</span>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
