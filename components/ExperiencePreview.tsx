"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { experiences } from "@/data/experiences";

export default function ExperiencePreview() {
  return (
    <section
      id="experiences"
      className="overflow-hidden bg-[#24382b] px-6 py-28 text-[#f4f1e8] md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            SECTION HEADER
        ========================================= */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#b9a98f]">
              Explore ALE
            </p>

            <h2 className="mt-5 max-w-3xl text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
              Choose your
              <br />
              <span className="italic">experience.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-md text-sm leading-7 text-white/60 md:justify-self-end md:text-base"
          >
            Dari mengenal proses pertanian hingga menikmati waktu bersama
            keluarga, setiap kunjungan ke ALE menghadirkan pengalaman yang
            berbeda.
          </motion.p>
        </div>

        {/* =========================================
            FEATURED EXPERIENCE
        ========================================= */}
        <div className="mt-16 md:mt-24">
          {experiences
            .filter((experience) => experience.featured)
            .map((experience) => (
              <motion.div
                key={experience.number}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={experience.href} className="group block">
                  <article className="relative aspect-[16/9] overflow-hidden rounded-[2rem] md:aspect-[2/1]">

                    {/* Image */}
                    <motion.img
                      src={experience.image}
                      alt={experience.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{
                        duration: 1.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/20 transition duration-700 group-hover:bg-black/30" />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-12">

                      <div className="flex items-end justify-between gap-8">

                        <div className="max-w-2xl">
                          <div className="mb-4 flex items-center gap-4">
                            <span className="text-xs tracking-[0.3em] text-white/60">
                              {experience.number}
                            </span>

                            <span className="h-px w-8 bg-white/40" />

                            <span className="text-xs tracking-[0.25em] text-white/60">
                              {experience.category}
                            </span>
                          </div>

                          <h3 className="text-4xl font-light leading-tight md:text-6xl">
                            {experience.title}
                          </h3>

                          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70 md:text-base">
                            {experience.description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/40 transition duration-500 group-hover:bg-white group-hover:text-[#24382b] md:flex">
                          <span className="text-xl transition-transform duration-500 group-hover:translate-x-1">
                            →
                          </span>
                        </div>

                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
        </div>

        {/* =========================================
            SECONDARY EXPERIENCES
        ========================================= */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {experiences
            .filter((experience) => !experience.featured)
            .map((experience, index) => (
              <motion.div
                key={experience.number}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link href={experience.href} className="group block">
                  <article className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">

                    {/* Image */}
                    <motion.img
                      src={experience.image}
                      alt={experience.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      whileHover={{ scale: 1.08 }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">

                      <div className="mb-3 flex items-center gap-3">
                        <span className="text-xs tracking-[0.3em] text-white/50">
                          {experience.number}
                        </span>

                        <span className="h-px w-6 bg-white/30" />

                        <span className="text-[10px] tracking-[0.25em] text-white/60">
                          {experience.category}
                        </span>
                      </div>

                      <h3 className="text-2xl font-light leading-tight md:text-3xl">
                        {experience.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                        {experience.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 transition group-hover:text-white">
                        Discover
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
        </div>

        {/* =========================================
            BOTTOM CTA
        ========================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-16 flex justify-end md:mt-20"
        >
          <Link
            href="/experiences"
            className="group flex items-center gap-4 border-b border-white/30 pb-2 text-sm text-white/80 transition hover:border-white hover:text-white"
          >
            <span>Explore all experiences</span>

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}