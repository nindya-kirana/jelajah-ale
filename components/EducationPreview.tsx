"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { educationPrograms } from "@/data/education";

export default function EducationPreview() {
  return (
    <section className="overflow-hidden bg-[#f4f1e8] text-[#24382b]">
      
      {/* =========================================
          INTRO
      ========================================= */}
      <div className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr] md:items-end">

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#8b7355]">
                Learning at ALE
              </p>

              <h2 className="mt-6 max-w-4xl text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
                Learning
                <br />
                <span className="italic">
                  beyond the classroom.
                </span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
              }}
            >
              <p className="max-w-md text-sm leading-7 text-[#536052] md:text-base">
                Di ALE, proses belajar tidak berhenti di dalam ruang kelas.
                Pengunjung diajak mengenal pertanian dan lingkungan melalui
                pengalaman yang nyata, interaktif, dan menyenangkan.
              </p>

              <Link
                href="/education"
                className="mt-7 inline-flex items-center gap-3 border-b border-[#24382b] pb-2 text-sm"
              >
                Discover Education
                <span>→</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>

      {/* =========================================
          LARGE IMAGE
      ========================================= */}
      <div className="px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[65vh] min-h-[500px] overflow-hidden rounded-[2rem]"
        >
          <motion.img
            src="/images/education/main.png"
            alt="Education at Agrowisata Linggan Education"
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 1.2 }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute bottom-0 left-0 max-w-2xl p-7 text-white md:p-12">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Education by Experience
            </p>

            <h3 className="mt-4 text-4xl font-light leading-tight md:text-6xl">
              See it.
              <br />
              Understand it.
              <br />
              Experience it.
            </h3>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          PROGRAMS
      ========================================= */}
      <div className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex items-end justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
                Learning Programs
              </p>

              <h3 className="mt-4 text-3xl font-light md:text-5xl">
                Explore how learning happens.
              </h3>
            </div>

            <span className="hidden text-sm text-[#536052] md:block">
              04 Experiences
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {educationPrograms.map((program, index) => (
              <motion.article
                key={program.number}
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
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem]">

                  <motion.img
                    src={program.image}
                    alt={program.title}
                    className="h-full w-full object-cover"
                    whileHover={{ scale: 1.07 }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-8">

                    <div className="flex items-center gap-3">
                      <span className="text-xs tracking-[0.3em] text-white/50">
                        {program.number}
                      </span>

                      <span className="h-px w-7 bg-white/30" />

                      <span className="text-xs tracking-[0.2em] text-white/60">
                        {program.shortTitle}
                      </span>
                    </div>

                    <h4 className="mt-3 text-2xl font-light md:text-3xl">
                      {program.title}
                    </h4>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-white/65">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

        </div>
      </div>

      {/* =========================================
          SEED TO HARVEST
      ========================================= */}
      <div className="bg-[#24382b] px-6 py-28 text-[#f4f1e8] md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#b9a98f]">
              Agriculture Journey
            </p>

            <h3 className="mt-5 max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              From seed
              <br />
              <span className="italic">to harvest.</span>
            </h3>
          </motion.div>

          <div className="mt-20 grid gap-0 md:grid-cols-4">

            {[
              {
                number: "01",
                title: "Seed",
                text: "Memahami bagaimana proses pertumbuhan dimulai.",
              },
              {
                number: "02",
                title: "Nursery",
                text: "Mengenal proses pembibitan dan perawatan tanaman.",
              },
              {
                number: "03",
                title: "Grow",
                text: "Mengamati bagaimana tanaman tumbuh dan dirawat.",
              },
              {
                number: "04",
                title: "Harvest",
                text: "Merasakan hasil dari proses pertanian secara langsung.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                className="relative border-t border-white/20 py-7 md:border-l md:border-t-0 md:px-7"
              >
                <span className="text-xs tracking-[0.3em] text-white/40">
                  {step.number}
                </span>

                <h4 className="mt-5 text-3xl font-light">
                  {step.title}
                </h4>

                <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
                  {step.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </div>

    </section>
  );
}