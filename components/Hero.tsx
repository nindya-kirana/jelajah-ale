"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-[#24382b] pt-32 text-white md:pt-36">
      {/* Background */}
      <motion.div
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 md:px-10 md:pb-20 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-white/80">
            Agrowisata Linggan Education
          </p>

          <h1 className="text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Tumbuh Bersama Alam,
            <br />
            <span className="italic">Hangat Bersama Keluarga.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            Discover agriculture, nature, education and meaningful moments
            in Linggan.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/experiences"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-[#24382b] transition hover:scale-105"
            >
              Explore ALE
            </Link>

            <Link
              href="/visit"
              className="rounded-full border border-white/50 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white hover:text-[#24382b]"
            >
              Plan Your Visit
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-8 z-10 hidden items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
          Scroll
        </span>

        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
          className="h-10 w-px bg-white/60"
        />
      </motion.div>
    </section>
  );
}