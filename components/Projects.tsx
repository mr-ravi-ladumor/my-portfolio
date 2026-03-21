"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "StudySync",
        description:
            "An all-in-one productivity hub designed specifically for students to seamlessly track tasks, organize events, and manage resources. Built on the MERN stack, it delivers a lightning-fast dashboard experience by heavily optimizing data requests, wrapped in a clean, highly responsive interface.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
        image: "/project1.png",
        liveUrl: "https://studysync-0ygm.onrender.com/",
        githubUrl: "https://github.com/mr-ravi-ladumor/studysync",
        featured: true,
    },
    {
        id: 2,
        title: "GitPeek",
        description:
            "A powerful discovery tool for exploring and bookmarking top open-source projects. To bypass strict API rate limits, I engineered a highly resilient background caching service using GitHub Actions to reliably sync and instantly serve 13,000+ top repositories to users.",
        tags: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "CSS3"],
        image: "/project2.png",
        liveUrl: "https://gitpeek-app.vercel.app/",
        githubUrl: "https://github.com/mr-ravi-ladumor/gitpeek",
        featured: true,
    },
    {
        id: 3,
        title: "BlogifyX",
        description:
            "A modern publishing platform where users can write, edit, and interact with articles. It handles secure token authentication, seamless image uploads natively via Multer, and nested comment threads for an engaging reading experience.",
        tags: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
        image: null,
        liveUrl: "",
        githubUrl: "https://github.com/mr-ravi-ladumor/blogifyX",
        featured: false,
    },
    {
        id: 4,
        title: "IBuiltThis",
        description:
            "A streamlined, server-rendered web application built to master modern React features. By utilizing the newest Next.js App Router and Server Components, it achieves extremely fast loading speeds and an incredibly smooth user experience.",
        tags: ["Next.js", "React", "Server Components", "Tailwind"],
        image: null,
        liveUrl: "",
        githubUrl: "https://github.com/mr-ravi-ladumor/ibuiltthis-app",
        featured: false,
    },
];

const Projects = () => {
    return (
        <section id="projects" className="w-full py-32 px-6 flex justify-center relative overflow-hidden">
            <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-indigo-600/5 blur-[140px] rounded-full pointer-events-none" />

            <div className="max-w-7xl w-full">
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
                                <div className="aspect-video rounded-xl bg-[#09090b] border border-white/5 overflow-hidden relative flex items-center justify-center shadow-inner">
                                    {project.image ? (
                                        // eslint-disable-next-line @next/next/no-img-element
                                        <img
                                            src={project.image}
                                            alt={`Screenshot of the ${project.title} project interface`}
                                            className="w-[95%] h-[95%] object-contain rounded-lg group-hover:scale-[1.02] transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-zinc-800 text-xs uppercase tracking-widest font-bold">
                                                Project Screenshot
                                            </span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-bold tracking-tight mb-3 group-hover:text-indigo-400 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-[14px] text-zinc-400 leading-relaxed mb-6">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="px-3 py-1 text-xs font-semibold text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 rounded-xl text-sm font-bold hover:bg-indigo-500 transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                                Live Demo
                                            </a>
                                        )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
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
                                            className="px-2 py-1 text-[11px] font-medium text-zinc-400 bg-white/5 rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-[13px] font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                                        >
                                            <ExternalLink className="w-3.5 h-3.5" /> Live
                                        </a>
                                    )}
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-[13px] font-bold text-zinc-400 hover:text-zinc-200 flex items-center gap-1 transition-colors"
                                    >
                                        <Github className="w-3.5 h-3.5" /> Code
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
