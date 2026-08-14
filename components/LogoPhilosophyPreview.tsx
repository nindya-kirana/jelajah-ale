"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function LogoPhilosophyPreview() {
  return (
    <section className="overflow-hidden bg-[#e8e3d7] px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        {/* LOGO */}

        <motion.div
          initial={{
            opacity: 0,
            x: -30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex min-h-[280px] items-center justify-center rounded-[2rem] bg-[#f4f1e8] p-10 md:min-h-[400px]"
        >
          <img
            src="/images/logo/ale-logo-hitam1.png"
            alt="Logo Agrowisata Linggan Education"
            className="w-40 md:w-56"
          />
        </motion.div>

        {/* CONTENT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
            Our Identity
          </p>

          <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight text-[#24382b] md:text-6xl">
            More than
            <br />

            <span className="font-editorial italic">
              a logo.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-[#536052] md:text-base">
            Logo ALE menyatukan beberapa unsur yang menjadi bagian dari
            agrowisata, yaitu melon, daun, ikan emas, dan cangkir. Setiap
            elemen memiliki makna yang berkaitan dengan pertanian, lingkungan,
            rekreasi, serta café dan resto ALE.
          </p>

          <Link
            href="/logo-philosophy"
            className="group mt-8 inline-flex items-center gap-5"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#24382b]">
              Explore logo philosophy
            </span>

            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24382b]/20 text-[#24382b] transition-all duration-300 group-hover:bg-[#24382b] group-hover:text-[#f4f1e8]">
              →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}