"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full relative overflow-hidden bg-[#09090b] pt-16 pb-12 border-t border-zinc-900 mt-20">
            <div className="max-w-[1200px] mx-auto px-8 sm:px-16">
                <div className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
                    
                    {/* Left: Minimal Copyright */}
                    <div className="text-zinc-500 text-[14px] font-medium tracking-wide flex-1 text-center md:text-left order-3 md:order-1">
                        © {currentYear} Crafted with passion.
                    </div>

                    {/* Center: Avatar + Name */}
                    <div className="flex items-center justify-center gap-3 flex-1 order-1 md:order-2 group cursor-default">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-zinc-700/50 bg-zinc-900/50 group-hover:border-sky-400/40 transition-colors duration-300">
                            <Image
                                src="/bitmoji.png"
                                alt="Ravi Ladumor"
                                fill
                                className="object-cover p-0.5 rounded-full"
                            />
                        </div>
                        <span className="text-zinc-200 group-hover:text-sky-400 font-semibold tracking-wide text-[16px] transition-colors duration-300">
                            Ravi Ladumor
                        </span>
                    </div>

                    {/* Right: Clean Back to top */}
                    <div className="flex justify-center md:justify-end flex-1 order-2 md:order-3">
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="flex items-center gap-3 text-[13px] font-semibold text-zinc-400 hover:text-sky-400 group transition-colors uppercase tracking-wider"
                        >
                            Top
                            <div className="w-9 h-9 rounded-full bg-zinc-900/60 border border-zinc-800 flex items-center justify-center group-hover:bg-zinc-800 group-hover:border-sky-400/40 transition-all duration-300 shadow-sm">
                                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
                            </div>
                        </button>
                    </div>

                </div>
            </div>
            
            {/* Subtle base glow */}
            <div className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[100px] bg-sky-500/[0.03] rounded-[100%] blur-3xl pointer-events-none" />
        </footer>
    );
}
