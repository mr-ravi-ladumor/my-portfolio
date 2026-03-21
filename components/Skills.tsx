"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Server, GitBranch } from "lucide-react";
import {
    SiCplusplus,
    SiJavascript,
    SiTypescript,
    SiPython,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiHtml5,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiGit,
    SiGithub,
    SiPostman,
    SiVercel,
    SiRender
} from "react-icons/si";

const skillCategories = [
    {
        title: "Languages",
        icon: Code2,
        color: "from-indigo-500/20 to-indigo-600/5",
        border: "group-hover:border-indigo-500/40",
        skills: [
            { name: "C++", icon: SiCplusplus, color: "text-blue-500 group-hover:text-blue-400" },
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400 group-hover:text-yellow-300" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-600 group-hover:text-blue-400" },
            { name: "Python", icon: SiPython, color: "text-yellow-500 group-hover:text-yellow-400" },
        ],
    },
    {
        title: "Frontend",
        icon: Palette,
        color: "from-sky-500/20 to-sky-600/5",
        border: "group-hover:border-sky-500/40",
        skills: [
            { name: "React.js", icon: SiReact, color: "text-sky-400 group-hover:text-sky-300" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-100 group-hover:text-white" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-teal-400 group-hover:text-teal-300" },
            { name: "HTML/CSS", icon: SiHtml5, color: "text-orange-500 group-hover:text-orange-400" },
        ],
    },
    {
        title: "Backend & DB",
        icon: Server,
        color: "from-emerald-500/20 to-emerald-600/5",
        border: "group-hover:border-emerald-500/40",
        skills: [
            { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-500 group-hover:text-emerald-400" },
            { name: "Express.js", icon: SiExpress, color: "text-zinc-400 group-hover:text-zinc-200" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500 group-hover:text-green-400" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-400 group-hover:text-blue-300" },
        ],
    },
    {
        title: "Tools & Cloud",
        icon: GitBranch,
        color: "from-amber-500/20 to-amber-600/5",
        border: "group-hover:border-amber-500/40",
        skills: [
            { name: "Git", icon: SiGit, color: "text-orange-600 group-hover:text-orange-500" },
            { name: "GitHub", icon: SiGithub, color: "text-zinc-300 group-hover:text-white" },
            { name: "Postman", icon: SiPostman, color: "text-orange-500 group-hover:text-orange-400" },
            { name: "Vercel", icon: SiVercel, color: "text-zinc-100 group-hover:text-white" },
            { name: "Render", icon: SiRender, color: "text-zinc-100 group-hover:text-white" },
        ],
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

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 hover:bg-zinc-900/80 ${category.border} transition-all duration-500 shadow-lg`}
                        >
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-center gap-3 mb-8 border-b border-zinc-800/80 pb-4">
                                    <div className="w-10 h-10 rounded-xl bg-zinc-800/50 border border-zinc-700/50 flex items-center justify-center group-hover:bg-zinc-800 transition-colors">
                                        <category.icon className="w-5 h-5 text-zinc-400 group-hover:text-zinc-100 transition-colors" />
                                    </div>
                                    <h3 className="text-[18px] font-bold tracking-tight text-zinc-100">{category.title}</h3>
                                </div>

                                <div className="flex flex-col gap-3">
                                    {category.skills.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-zinc-900/50 border border-zinc-800 group-hover:bg-zinc-900 group-hover:border-zinc-700/50 transition-all duration-300 transform group-hover:-translate-y-0.5"
                                        >
                                            <skill.icon className={`w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity ${skill.color}`} />
                                            <span className="text-[14px] font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
                                                {skill.name}
                                            </span>
                                        </div>
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
