"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Project Name One",
        description:
            "A brief description of the project. What problem it solves and what makes it unique. Replace this with your actual project details.",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        image: null, // Replace with your project screenshot path
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 2,
        title: "Project Name Two",
        description:
            "Another project description. Highlight the key features, tech decisions, and impact of the work.",
        tags: ["React", "Node.js", "MongoDB"],
        image: null,
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
    },
    {
        id: 3,
        title: "Project Name Three",
        description:
            "Short summary of this project's purpose. Focus on the outcome and your specific contributions.",
        tags: ["React Native", "Expo", "Firebase"],
        image: null,
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 4,
        title: "Project Name Four",
        description:
            "One more project to showcase your range. Describe the architecture or design decisions you made.",
        tags: ["Next.js", "Prisma", "PostgreSQL"],
        image: null,
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="w-full py-32 px-6 flex justify-center relative overflow-hidden">
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-600/5 blur-[140px] rounded-full" />

            <div className="max-w-7xl w-full">
                {/* Section header */}
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase">
                        03 / Projects
                    </span>
                    <div className="h-[1px] flex-1 bg-zinc-800" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight">
                        Selected Work
                    </h2>
                    <p className="text-zinc-500 text-sm max-w-sm text-right">
                        A curated list of projects I&apos;ve built. Each one pushed me to learn something new.
                    </p>
                </div>

                {/* Featured Projects */}
                <div className="space-y-8 mb-12">
                    {projects
                        .filter((p) => p.featured)
                        .map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all duration-500"
                            >
                                {/* Image placeholder */}
                                <div className="aspect-video rounded-xl bg-zinc-900 border border-white/5 overflow-hidden relative">
                                    {project.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-zinc-800 text-xs uppercase tracking-widest font-bold">
                                                Project Screenshot
                                            </span>
                                        </div>
                                    )}
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>

                                {/* Details */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 rounded-xl text-sm font-bold hover:bg-indigo-500 transition-colors"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            className="flex items-center gap-2 px-5 py-2.5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors"
                                        >
                                            <Github className="w-4 h-4" />
                                            Source
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                </div>

                {/* Other Projects — compact grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {projects
                        .filter((p) => !p.featured)
                        .map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all duration-500"
                            >
                                <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-500 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-[10px] font-medium text-zinc-400 bg-white/5 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-3">
                                    <a
                                        href={project.liveUrl}
                                        className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                                    >
                                        <ExternalLink className="w-3 h-3" /> Live
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        className="text-xs font-bold text-zinc-500 hover:text-zinc-300 flex items-center gap-1 transition-colors"
                                    >
                                        <Github className="w-3 h-3" /> Code
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
