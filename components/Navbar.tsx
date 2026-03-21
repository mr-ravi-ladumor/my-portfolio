"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed top-5 left-0 right-0 z-50 flex justify-center px-6"
        >
            <nav
                className={`flex items-center justify-between w-full max-w-3xl rounded-2xl transition-all duration-500 ${scrolled
                        ? "bg-zinc-900/75 backdrop-blur-xl border border-zinc-800/40 shadow-2xl shadow-black/20 px-7 py-3.5"
                        : "bg-transparent border border-transparent px-6 py-4"
                    }`}
            >
                <Link
                    href="#home"
                    className="font-bold text-lg text-zinc-100 hover:text-sky-400 transition-colors shrink-0"
                >
                    Ravi<span className="text-sky-400">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-7 text-[13px] font-medium text-zinc-500">
                    {["About", "Skills", "Projects"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-zinc-100 transition-colors duration-200"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="text-[13px] font-semibold text-zinc-900 bg-sky-400 hover:bg-sky-300 px-5 py-2 rounded-xl transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] shadow-lg shadow-sky-400/25 shrink-0"
                >
                    Contact
                </Link>
            </nav>
        </motion.header>
    );
}
