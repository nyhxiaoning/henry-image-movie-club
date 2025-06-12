"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function VisionStudioHomePage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
            {/* 背景动态粒子效果 */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-gray-900 to-black" />

            {/* 顶部导航栏 */}
            <header className="flex justify-between items-center px-10 py-6 border-b border-gray-700 bg-opacity-30 backdrop-blur-md">
                <div className="flex items-center gap-4">
                    <Image src="/vision-logo.png" alt="Vision Studio" width={50} height={50} />
                    <div className="text-2xl font-bold tracking-wide">Vision Studio</div>
                </div>
                <nav className="flex gap-6 text-sm uppercase text-gray-300">
                    <a href="#gallery" className="hover:text-white transition">影像集</a>
                    <a href="#projects" className="hover:text-white transition">项目</a>
                    <a href="#contact" className="hover:text-white transition">联系</a>
                </nav>
            </header>

            {/* 横幅介绍 */}
            <section className="flex flex-col items-center justify-center text-center h-[80vh] px-6">
                <motion.h1
                    className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    用影像点亮灵感
                </motion.h1>
                <p className="mt-6 text-lg text-gray-400 max-w-xl">
                    我们捕捉瞬间，创造永恒。从概念到现实，为你定格最震撼的视觉体验。
                </p>
                <button className="mt-10 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full font-semibold hover:scale-105 transition shadow-lg">
                    探索更多
                </button>
            </section>

            {/* 影像画廊 */}
            <section id="gallery" className="py-20 px-10 bg-black">
                <h2 className="text-3xl font-bold text-center mb-12">精选影像</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <motion.div
                            key={i}
                            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transition"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Image
                                src={`/gallery/img${i}.jpg`}
                                alt={`影像${i}`}
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 页脚 */}
            <footer className="text-center text-sm text-gray-500 py-6 border-t border-gray-800 bg-black">
                © 2025 Vision Studio · All Rights Reserved
            </footer>
        </div>
    );
}
