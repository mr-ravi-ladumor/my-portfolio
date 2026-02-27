"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[92%] max-w-4xl rounded-2xl px-8 py-3.5 flex items-center justify-between ${scrolled ? "glass border border-white/[0.06]" : "bg-transparent"
                }`}
        >
            <Link
                href="/"
                className="text-base font-bold tracking-[0.15em] uppercase text-white/90 hover:text-[#FF6B2C] transition-colors"
            >
                Ravi<span className="text-[#FF6B2C]">.</span>
            </Link>

            <div className="hidden md:flex items-center gap-10">
                {["About", "Skills", "Projects"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            <Link
                href="#contact"
                className="px-5 py-2 bg-[#FF6B2C] rounded-lg text-[11px] uppercase tracking-[0.12em] font-bold text-black hover:bg-[#FF8A50] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B2C]/20"
            >
                Let&apos;s Talk
            </Link>
        </motion.nav>
    );
};

export default Navbar;
