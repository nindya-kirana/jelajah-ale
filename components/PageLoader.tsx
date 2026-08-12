"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function PageLoader() {
  return (
    <motion.div
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.76, 0, 0.24, 1],
      }}
      style={{
        transformOrigin: "top",
      }}
      className="
        pointer-events-none
        fixed
        inset-0
        z-[100]
        bg-[#24382b]
      "
    >
      <div className="flex h-full items-center justify-center">
        <motion.div
          initial={{
            opacity: 1,
            y: 0,
          }}
          animate={{
            opacity: 0,
            y: -10,
          }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            items-center
            justify-center
          "
        >
          {/* =========================================
              LOGO
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Image
              src="/images/logo/ale-logo-putih.png"
              alt="ALE Logo"
              width={160}
              height={160}
              priority
              className="
                h-20
                w-20
                scale-110
                object-contain
                brightness-0
                invert
                sm:h-24
                sm:w-24
              "
            />
          </motion.div>

          {/* =========================================
              ALE
          ========================================= */}

          <motion.span
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              mt-1
              text-3xl
              font-semibold
              tracking-[0.35em]
              text-[#f4f1e8]
              sm:text-4xl
              sm:tracking-[0.4em]
            "
          >
            ALE
          </motion.span>

          {/* =========================================
              SUBTITLE
          ========================================= */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
              delay: 0.4,
            }}
            className="
              mt-4
              text-[9px]
              uppercase
              tracking-[0.35em]
              text-white/40
              sm:text-[10px]
            "
          >
            Agrowisata Linggan Education
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}