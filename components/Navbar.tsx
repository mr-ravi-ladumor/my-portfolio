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
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav
                className={`flex items-center justify-between px-6 py-3 w-full max-w-2xl rounded-full transition-all duration-300 ${scrolled
                        ? "bg-zinc-900/80 backdrop-blur-md border border-zinc-800 shadow-xl"
                        : "bg-transparent border border-transparent"
                    }`}
            >
                <Link
                    href="/"
                    className="font-bold text-lg text-zinc-100 hover:text-sky-400 transition-colors"
                >
                    Ravi<span className="text-sky-400">.</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
                    {["About", "Skills", "Projects"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="hover:text-zinc-100 transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </div>

                <Link
                    href="#contact"
                    className="text-sm font-semibold text-zinc-900 bg-sky-400 hover:bg-sky-300 px-5 py-2 rounded-full transition-colors"
                >
                    Contact
                </Link>
            </nav>
        </motion.header>
    );
}
