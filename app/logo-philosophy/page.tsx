"use client";

import { motion } from "motion/react";
import Link from "next/link";

import PageHero from "@/components/PageHero";
import LogoFlipbook from "@/components/LogoFlipbook";

export default function LogoPhilosophyPage() {
  return (
    <main>
      {/* =========================================
          HERO
      ========================================= */}

      <PageHero
        eyebrow="Agrowisata Linggan Education"
        title="Logo"
        italic="Philosophy."
        description="Memahami makna di balik identitas visual Agrowisata Linggan Education."
        image="/images/about/logo-philosophy.png"
      />

      {/* =========================================
          INTRO
      ========================================= */}

      <section className="bg-[#f4f1e8] px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-3xl"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              Visual Identity
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight tracking-tight text-[#24382b] md:text-6xl">
              The meaning
              <br />

              <span className="font-editorial italic">
                behind the logo.
              </span>
            </h2>

            <p className="mt-7 text-sm leading-7 text-[#536052] md:text-base">
              Logo ALE dirancang untuk menyatukan beberapa unsur yang menjadi
              bagian dari Agrowisata Linggan Education. Bentuknya
              menggabungkan unsur pertanian, rekreasi, kuliner, dan kegiatan
              edukasi dalam satu simbol yang sederhana dan mudah dikenali.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          LOGO ELEMENTS
      ========================================= */}

      <section className="bg-[#f4f1e8] px-6 pb-20 md:px-10 md:pb-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          {/* LOGO */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="flex min-h-[350px] items-center justify-center rounded-[2rem] bg-[#e8e3d7] p-10 md:min-h-[500px]"
          >
            <img
              src="/images/logo/ale-logo-hitam1.png"
              alt="Logo Agrowisata Linggan Education"
              className="w-48 md:w-64"
            />
          </motion.div>

          {/* DESCRIPTION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.7,
            }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              Four Elements
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight text-[#24382b] md:text-5xl">
              One logo,
              <br />

              <span className="font-editorial italic">
                several meanings.
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-sm leading-7 text-[#536052]">
              <p>
                <strong className="text-[#24382b]">
                  Melon.
                </strong>{" "}
                Melambangkan produk unggulan ALE melalui kegiatan petik melon
                dan proses budidayanya.
              </p>

              <p>
                <strong className="text-[#24382b]">
                  Daun.
                </strong>{" "}
                Menggambarkan pertumbuhan, keberlanjutan, serta kepedulian
                terhadap lingkungan.
              </p>

              <p>
                <strong className="text-[#24382b]">
                  Ikan emas.
                </strong>{" "}
                Menggambarkan kegiatan pemancingan dan pengembangan ALE melalui
                hasil budidaya yang memiliki nilai ekonomi.
              </p>

              <p>
                <strong className="text-[#24382b]">
                  Cangkir.
                </strong>{" "}
                Mewakili café dan resto sebagai tempat untuk bersantai serta
                menikmati sajian ALE.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          FLIPBOOK
      ========================================= */}

      <section className="bg-[#e8e3d7] px-6 py-20 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
              duration: 0.7,
            }}
            className="mb-12 text-center"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              Logo Design Guide
            </p>

            <h2 className="mt-4 text-4xl font-light text-[#24382b] md:text-6xl">
              Explore the
              <br />

              <span className="font-editorial italic">
                complete story.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#536052]">
              Lihat proses perancangan, konsep, filosofi visual, serta panduan
              penggunaan logo ALE melalui dokumen berikut.
            </p>
          </motion.div>

          <LogoFlipbook />

          {/* PDF LINK */}

          <div className="mt-10 text-center">
            <a
              href="/documents/filosofi-logo-ale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.2em] text-[#24382b] underline underline-offset-4"
            >
              Buka dokumen PDF
            </a>
          </div>
        </div>
      </section>

      {/* =========================================
          BACK
      ========================================= */}

      <section className="bg-[#f4f1e8] px-6 py-16 text-center">
        <Link
          href="/"
          className="inline-flex items-center gap-3 text-sm text-[#24382b] transition hover:gap-5"
        >
          ← Kembali ke halaman utama
        </Link>
      </section>
    </main>
  );
}