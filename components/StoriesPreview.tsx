"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { stories } from "@/data/stories";

export default function StoriesPreview() {
  return (
    <section
      id="stories"
      className="overflow-hidden bg-[#f4f1e8] px-6 py-28 text-[#24382b] md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            HEADER
        ========================================= */}
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#8b7355]">
              Stories from ALE
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
              Every visit
              <br />
              <span className="italic">has a story.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            <p className="max-w-md text-sm leading-7 text-[#536052] md:text-base">
              Dari proses belajar hingga waktu bersantai bersama keluarga,
              setiap sudut ALE menyimpan cerita dan pengalaman yang berbeda.
            </p>
          </motion.div>

        </div>

        {/* =========================================
            FEATURED STORY
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-16 md:mt-24"
        >
          <Link
            href={stories[0].href}
            className="group block"
          >
            <article className="relative aspect-[16/10] overflow-hidden rounded-[2rem] md:aspect-[2/1]">

              <motion.img
                src={stories[0].image}
                alt={stories[0].title}
                className="absolute inset-0 h-full w-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 1.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <div className="absolute inset-0 bg-black/15 transition duration-700 group-hover:bg-black/25" />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 max-w-3xl p-7 text-white md:p-12">

                <div className="flex items-center gap-4">
                  <span className="text-xs tracking-[0.3em] text-white/50">
                    {stories[0].number}
                  </span>

                  <span className="h-px w-8 bg-white/40" />

                  <span className="text-xs tracking-[0.3em] text-white/60">
                    {stories[0].category}
                  </span>
                </div>

                <h3 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
                  {stories[0].title}
                </h3>

                <p className="mt-5 max-w-xl text-sm leading-7 text-white/65 md:text-base">
                  {stories[0].description}
                </p>

                <div className="mt-7 flex items-center gap-3 text-sm">
                  <span>Read story</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>

              </div>
            </article>
          </Link>
        </motion.div>

        {/* =========================================
            OTHER STORIES
        ========================================= */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">

          {stories.slice(1).map((story, index) => (
            <motion.div
              key={story.number}
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
              <Link
                href={story.href}
                className="group block"
              >
                <article>

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">

                    <motion.img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover"
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <div className="absolute inset-0 bg-black/5 transition duration-500 group-hover:bg-black/15" />

                  </div>

                  <div className="mt-5">

                    <div className="flex items-center gap-3 text-xs text-[#8b7355]">
                      <span>
                        {story.number}
                      </span>

                      <span className="h-px w-6 bg-[#8b7355]/40" />

                      <span className="tracking-[0.25em]">
                        {story.category}
                      </span>
                    </div>

                    <h3 className="mt-3 text-2xl font-light md:text-3xl">
                      {story.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#536052]">
                      {story.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm">
                      Read story

                      <span className="transition-transform duration-300 group-hover:translate-x-2">
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
            CTA
        ========================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 flex justify-end"
        >
          <Link
            href="/stories"
            className="group flex items-center gap-4 border-b border-[#24382b]/30 pb-2 text-sm"
          >
            Explore all stories

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}