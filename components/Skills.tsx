"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Server, Smartphone, Database, GitBranch } from "lucide-react";

const skillCategories = [
    {
        title: "Frontend",
        icon: Code2,
        color: "from-indigo-500/20 to-indigo-600/5",
        border: "group-hover:border-indigo-500/40",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "UI / Design",
        icon: Palette,
        color: "from-purple-500/20 to-purple-600/5",
        border: "group-hover:border-purple-500/40",
        skills: ["Figma", "Responsive Design", "Design Systems", "Prototyping"],
    },
    {
        title: "Backend",
        icon: Server,
        color: "from-emerald-500/20 to-emerald-600/5",
        border: "group-hover:border-emerald-500/40",
        skills: ["Node.js", "Express", "REST APIs", "GraphQL"],
    },
    {
        title: "Mobile",
        icon: Smartphone,
        color: "from-sky-500/20 to-sky-600/5",
        border: "group-hover:border-sky-500/40",
        skills: ["React Native", "Expo", "Cross-Platform"],
    },
    {
        title: "Database",
        icon: Database,
        color: "from-amber-500/20 to-amber-600/5",
        border: "group-hover:border-amber-500/40",
        skills: ["PostgreSQL", "MongoDB", "Prisma", "Redis"],
    },
    {
        title: "DevOps & Tools",
        icon: GitBranch,
        color: "from-rose-500/20 to-rose-600/5",
        border: "group-hover:border-rose-500/40",
        skills: ["Git", "Docker", "Vercel", "CI/CD"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="w-full py-32 px-6 flex justify-center relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/5 blur-[150px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl w-full">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase">
                        02 / Skills
                    </span>
                    <div className="h-[1px] flex-1 bg-zinc-800" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                        Tools & Technologies
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-sm text-right">
                        Constantly evolving my stack to build faster, better, and more beautiful products.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 ${category.border} transition-all duration-500 hover:bg-white/[0.04]`}
                        >
                            {/* Gradient glow on hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Icon + Title row */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                                        <category.icon className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="text-lg font-bold tracking-tight">{category.title}</h3>
                                </div>

                                {/* Skill pills */}
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-white/5 rounded-lg border border-white/5 group-hover:text-zinc-200 group-hover:border-white/10 transition-all"
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
};

export default Skills;
