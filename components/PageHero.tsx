"use client";

import { motion } from "motion/react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  image: string;
};

export default function PageHero({
  eyebrow,
  title,
  italic,
  description,
  image,
}: PageHeroProps) {
  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-[#0c1711] text-[#f4f1e8]">

      <motion.img
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />

      <div className="absolute inset-0 bg-black/35" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1711] via-transparent to-black/10" />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:px-10 md:pb-24">

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="text-xs uppercase tracking-[0.35em] text-white/60"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-5 max-w-6xl text-5xl font-light leading-[0.92] tracking-tight md:text-7xl lg:text-[7rem]"
        >
          {title}

          {italic && (
            <>
              <br />

              <span className="font-editorial italic">
                {italic}
              </span>
            </>
          )}
        </motion.h1>

        {description && (
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
            }}
            className="mt-7 max-w-xl text-sm leading-7 text-white/65 md:text-base"
          >
            {description}
          </motion.p>
        )}

      </div>
    </section>
  );
}