"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Hook up to your backend / email service
        console.log("Form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="contact" className="w-full py-32 px-6 flex justify-center relative overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/5 blur-[160px] rounded-full" />

            <div className="max-w-7xl w-full">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-indigo-500 font-mono text-xs tracking-[0.3em] uppercase">
                        04 / Contact
                    </span>
                    <div className="h-[1px] flex-1 bg-zinc-800" />
                </div>

                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-tight mb-4">
                        Let&apos;s Work Together
                    </h2>
                    <p className="text-zinc-500 text-lg max-w-lg">
                        Have a project in mind or just want to chat? Drop me a message and I&apos;ll get back to you soon.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 space-y-6"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, name: e.target.value }))
                                    }
                                    placeholder="Your name"
                                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, email: e.target.value }))
                                    }
                                    placeholder="you@example.com"
                                    className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500">
                                Message
                            </label>
                            <textarea
                                required
                                rows={6}
                                value={formData.message}
                                onChange={(e) =>
                                    setFormData((prev) => ({ ...prev, message: e.target.value }))
                                }
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3.5 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder:text-zinc-700 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="group flex items-center gap-3 px-8 py-4 bg-indigo-600 rounded-xl font-bold text-sm tracking-wide hover:bg-indigo-500 transition-all hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98]"
                        >
                            <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            {submitted ? "Message Sent!" : "Send Message"}
                        </button>
                    </motion.form>

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 space-y-5"
                    >
                        {[
                            {
                                icon: Mail,
                                label: "Email",
                                value: "ravi@example.com",
                                href: "mailto:ravi@example.com",
                            },
                            {
                                icon: MapPin,
                                label: "Location",
                                value: "India",
                                href: null,
                            },
                            {
                                icon: Clock,
                                label: "Timezone",
                                value: "GMT +5:30 (IST)",
                                href: null,
                            },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <div
                                key={label}
                                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/20 transition-all flex items-center gap-4"
                            >
                                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-indigo-400" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-0.5">
                                        {label}
                                    </p>
                                    {href ? (
                                        <a
                                            href={href}
                                            className="text-sm font-medium text-zinc-300 hover:text-indigo-400 transition-colors"
                                        >
                                            {value}
                                        </a>
                                    ) : (
                                        <p className="text-sm font-medium text-zinc-300">{value}</p>
                                    )}
                                </div>
                            </div>
                        ))}

                        {/* Social Links */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600 mb-4">
                                Connect
                            </p>
                            <div className="flex gap-3">
                                {[
                                    { name: "GitHub", url: "#" },
                                    { name: "LinkedIn", url: "#" },
                                    { name: "Twitter", url: "#" },
                                ].map(({ name, url }) => (
                                    <a
                                        key={name}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 text-xs font-bold text-zinc-400 bg-white/5 rounded-lg border border-white/5 hover:border-indigo-500/30 hover:text-indigo-400 transition-all"
                                    >
                                        {name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
