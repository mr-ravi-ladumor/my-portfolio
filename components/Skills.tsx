"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Server, GitBranch } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        color: "from-indigo-500/20 to-indigo-600/5",
        border: "group-hover:border-indigo-500/40",
        skills: ["C++", "JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
    },
    {
        title: "Frontend Stack",
        icon: Palette,
        color: "from-sky-500/20 to-sky-600/5",
        border: "group-hover:border-sky-500/40",
        skills: ["React.js", "Next.js", "Tailwind CSS"],
    },
    {
        title: "Backend & DB",
        icon: Server,
        color: "from-emerald-500/20 to-emerald-600/5",
        border: "group-hover:border-emerald-500/40",
        skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
        title: "Dev Tools",
        icon: GitBranch,
        color: "from-amber-500/20 to-amber-600/5",
        border: "group-hover:border-amber-500/40",
        skills: ["Git", "GitHub", "Postman", "Vercel", "Render"],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="w-full py-32 px-6 flex justify-center relative overflow-hidden bg-[#09090b]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl w-full">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-sky-400 font-mono text-[11px] tracking-[0.3em] uppercase font-semibold">
                        02 / Skills
                    </span>
                    <div className="h-[1px] flex-1 bg-zinc-800" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter leading-tight text-zinc-100">
                        Tools & Technologies
                    </h2>
                    <p className="text-zinc-500 text-[15px] font-medium max-w-sm text-left md:text-right">
                        Constantly evolving my stack to build faster, better, and more efficient applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 ${category.border} transition-all duration-500`}
                        >
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                                        <category.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                                    </div>
                                    <h3 className="text-[17px] font-bold tracking-tight text-zinc-100">{category.title}</h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-[13px] font-medium text-zinc-400 bg-zinc-900/50 rounded-lg border border-zinc-800 group-hover:text-sky-400 group-hover:border-sky-500/20 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
