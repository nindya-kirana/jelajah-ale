"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { gallery } from "@/data/gallery";

export default function GalleryPreview() {
  return (
    <section
      id="gallery"
      className="overflow-hidden bg-[#24382b] px-6 py-28 text-[#f4f1e8] md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            HEADER
        ========================================= */}
        <div className="grid gap-10 md:grid-cols-[1fr_0.6fr] md:items-end">

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#b9a98f]">
              Gallery
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
              See ALE
              <br />
              <span className="italic">through our eyes.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
            className="max-w-md text-sm leading-7 text-white/55 md:text-base"
          >
            Kumpulan momen dari alam, kegiatan edukasi, kuliner, dan
            kebersamaan yang membuat setiap kunjungan ke ALE terasa berbeda.
          </motion.p>

        </div>

        {/* =========================================
            GALLERY COLLAGE
        ========================================= */}
        <div className="mt-16 grid gap-4 md:mt-24">

          {/* ROW 1 */}
          <div className="grid gap-4 md:grid-cols-[1.5fr_1fr]">

            <GalleryImage
              item={gallery[0]}
              aspect="aspect-[4/3]"
              className="md:aspect-[16/10]"
            />

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">

              <GalleryImage
                item={gallery[1]}
                aspect="aspect-[4/3]"
                className="md:aspect-[16/10]"
              />

              <GalleryImage
                item={gallery[2]}
                aspect="aspect-[4/3]"
                className="md:aspect-[16/10]"
              />

            </div>

          </div>

          {/* ROW 2 */}
          <div className="grid gap-4 md:grid-cols-[0.8fr_1.4fr]">

            <GalleryImage
              item={gallery[3]}
              aspect="aspect-[4/5]"
              className="md:aspect-[4/5]"
            />

            <div className="grid gap-4">

              <GalleryImage
                item={gallery[4]}
                aspect="aspect-[16/9]"
              />

              <div className="grid gap-4 sm:grid-cols-2">

                <GalleryImage
                  item={gallery[5]}
                  aspect="aspect-square"
                />

                <GalleryImage
                  item={gallery[6]}
                  aspect="aspect-square"
                />

              </div>

            </div>

          </div>

          {/* ROW 3 */}
          <GalleryImage
            item={gallery[7]}
            aspect="aspect-[21/9]"
          />

        </div>

        {/* =========================================
            CTA
        ========================================= */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-12 flex justify-end"
        >
          <Link
            href="/gallery"
            className="group flex items-center gap-4 border-b border-white/30 pb-2 text-sm text-white/75 transition hover:border-white hover:text-white"
          >
            View full gallery

            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}


/* =========================================
   GALLERY IMAGE COMPONENT
========================================= */

function GalleryImage({
  item,
  aspect,
  className = "",
}: {
  item: (typeof gallery)[number];
  aspect: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative overflow-hidden rounded-[1.5rem] ${aspect} ${className}`}
    >
      <motion.img
        src={item.image}
        alt={item.alt}
        className="h-full w-full object-cover"
        whileHover={{
          scale: 1.06,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/30" />

      {/* Category */}
      <div className="absolute left-5 top-5 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="rounded-full border border-white/40 bg-black/20 px-4 py-2 text-[10px] tracking-[0.25em] text-white backdrop-blur-md">
          {item.category}
        </span>
      </div>

      {/* Number */}
      <div className="absolute bottom-5 right-5 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="text-xs tracking-[0.2em] text-white/80">
          {String(item.id).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}