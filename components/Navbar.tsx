"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  /*
  =========================================
  SCROLL DETECTION
  =========================================
  */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
  =========================================
  PREVENT BODY SCROLL WHEN MOBILE MENU OPEN
  =========================================
  */

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <motion.header
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`
          fixed
          left-0
          right-0
          top-0
          z-50
          px-3
          pt-3
          transition-all
          duration-500
          sm:px-4
          sm:pt-4
          md:px-6
          ${
            scrolled
              ? "pt-2 sm:pt-3"
              : "pt-4 sm:pt-5"
          }
        `}
      >
        <div
          className={`
            mx-auto
            flex
            h-[4.5rem]
            max-w-[1500px]
            items-center
            justify-between
            rounded-full
            border
            px-5
            transition-all
            duration-500
            sm:h-20
            sm:px-6
            md:px-8
            ${
              scrolled
                ? `
                  border-[#24382b]/10
                  bg-[#f4f1e8]/95
                  shadow-lg
                  backdrop-blur-xl
                `
                : `
                  border-white/20
                  bg-[#0c1711]/35
                  backdrop-blur-md
                `
            }
          `}
        >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
            href="/"
            className={`
                group
                ml-8
                flex
                shrink-0
                flex-col
                items-center
                justify-center
                leading-none
                transition-colors
                sm:ml-10
                md:ml-12
                ${
                scrolled
                    ? "text-[#24382b]"
                    : "text-white"
                }
            `}
            >
            {/* LOGO IMAGE */}

            <Image
                src="/images/logo/ale-logo-hitam1.png"
                alt="ALE Logo"
                width={120}
                height={120}
                priority
                className={`
                h-10
                w-10
                scale-125
                object-contain
                transition-all
                duration-500
                sm:h-11
                sm:w-11
                mt-0.75
                ${
                    scrolled
                    ? "brightness-0"
                    : "brightness-0 invert"
                }
                group-hover:scale-[1.35]
                `}
            />

            {/* ALE TEXT */}

            <span
                className="
                mt-0
                text-base
                font-semibold
                tracking-[0.28em]
                sm:text-lg
                sm:tracking-[0.3em]
                pt-0
                "
            >
                ALE
            </span>
            </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <nav className="hidden items-center gap-6 lg:flex xl:gap-7">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={`
                  group
                  relative
                  text-[12px]
                  transition-colors
                  duration-300
                  ${
                    scrolled
                      ? `
                        text-[#24382b]/75
                        hover:text-[#24382b]
                      `
                      : `
                        text-white/80
                        hover:text-white
                      `
                  }
                `}
              >
                {item.label}

                {/* UNDERLINE */}

                <span
                  className={`
                    absolute
                    -bottom-1
                    left-0
                    h-px
                    w-0
                    transition-all
                    duration-300
                    group-hover:w-full
                    ${
                      scrolled
                        ? "bg-[#24382b]"
                        : "bg-white"
                    }
                  `}
                />
              </Link>
            ))}
          </nav>

          {/* =================================================
              DESKTOP CTA
          ================================================= */}

          <Link
            href="/visit"
            className={`
              hidden
              rounded-full
              px-5
              py-3
              text-xs
              font-medium
              transition-all
              duration-300
              hover:-translate-y-0.5
              lg:block
              xl:px-6
              ${
                scrolled
                  ? `
                    bg-[#24382b]
                    text-[#f4f1e8]
                    hover:bg-[#304a38]
                  `
                  : `
                    bg-white
                    text-[#24382b]
                    hover:bg-[#f4f1e8]
                  `
              }
            `}
          >
            Plan Your Visit
          </Link>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className={`
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-full
              transition-all
              duration-300
              hover:scale-105
              lg:hidden
              ${
                scrolled
                  ? `
                    bg-[#24382b]
                    text-[#f4f1e8]
                  `
                  : `
                    bg-white
                    text-[#24382b]
                  `
              }
            `}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-px w-4 bg-current" />
              <span className="h-px w-4 bg-current" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              fixed
              inset-0
              z-[60]
              bg-[#0c1711]
            "
          >
            <div
              className="
                flex
                h-full
                flex-col
                px-5
                py-5
                sm:px-6
              "
            >
              {/* =================================================
                  MOBILE MENU HEADER
              ================================================= */}

              <div className="flex items-center justify-between">
                {/* MOBILE LOGO */}

                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="
                    ml-2
                    flex
                    flex-col
                    items-center
                    leading-none
                    text-[#f4f1e8]
                  "
                >
                  <Image
                    src="/images/logo/ale-logo-putih.png"
                    alt="ALE Logo"
                    width={120}
                    height={120}
                    priority
                    className="
                      mb-1
                      h-10
                      w-10
                      scale-110
                      object-contain
                      brightness-0
                      invert
                    "
                  />

                  <span
                    className="
                      text-lg
                      font-semibold
                      tracking-[0.3em]
                    "
                  >
                    ALE
                  </span>
                </Link>

                {/* CLOSE BUTTON */}

                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/20
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-white/10
                  "
                  aria-label="Close menu"
                >
                  <span className="relative h-4 w-4">
                    <span
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-px
                        w-5
                        -translate-x-1/2
                        -translate-y-1/2
                        rotate-45
                        bg-white
                      "
                    />

                    <span
                      className="
                        absolute
                        left-1/2
                        top-1/2
                        h-px
                        w-5
                        -translate-x-1/2
                        -translate-y-1/2
                        -rotate-45
                        bg-white
                      "
                    />
                  </span>
                </button>
              </div>

              {/* =================================================
                  MOBILE NAVIGATION LINKS
              ================================================= */}

              <nav
                className="
                  mt-14
                  flex
                  flex-col
                  sm:mt-16
                "
              >
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: -30,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.08 * index,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-b
                        border-white/10
                        py-4
                        text-2xl
                        font-light
                        text-white
                        transition-colors
                        duration-300
                        hover:text-white/60
                        sm:py-5
                        sm:text-3xl
                      "
                    >
                      <span>{item.label}</span>

                      <span
                        className="
                          text-white/30
                          transition-transform
                          duration-300
                          group-hover:translate-x-2
                        "
                      >
                        →
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* =================================================
                  MOBILE CTA
              ================================================= */}

              <div
                className="
                  mt-auto
                  pb-2
                "
              >
                <Link
                  href="/visit"
                  onClick={() => setMenuOpen(false)}
                  className="
                    flex
                    items-center
                    justify-between
                    rounded-full
                    bg-[#f4f1e8]
                    px-6
                    py-4
                    text-sm
                    text-[#24382b]
                    transition-transform
                    duration-300
                    hover:scale-[1.02]
                  "
                >
                  <span>Plan Your Visit</span>

                  <span>→</span>
                </Link>

                <p
                  className="
                    mt-6
                    text-xs
                    leading-6
                    text-white/30
                  "
                >
                  Agrowisata Linggan Education
                  <br />
                  Learn · Explore · Connect
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}