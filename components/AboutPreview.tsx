"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#f4f1e8] px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-[#8b7355]">
            More Than A Destination
          </p>

          <h2 className="text-4xl font-light leading-tight text-[#24382b] md:text-6xl">
            A place to learn,
            <br />
            explore & connect.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#536052]">
            Agrowisata Linggan Education menghadirkan ruang di mana
            pertanian, edukasi, alam, keluarga, dan masyarakat bertemu dalam
            satu pengalaman.
          </p>

          <Link
            href="/about"
            className="mt-8 inline-block border-b border-[#24382b] pb-1 text-sm text-[#24382b]"
          >
            Discover ALE →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#d8cdb9]"
        >
          <img
            src="/about.png"
            alt="Agrowisata Linggan Education"
            className="h-full w-full object-cover transition duration-700 hover:scale-105"
          />
        </motion.div>
      </div>
    </section>
  );
}