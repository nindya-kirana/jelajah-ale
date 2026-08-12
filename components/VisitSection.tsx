"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { visitInfo } from "@/data/visit";

export default function VisitSection() {
  const whatsappUrl = `https://wa.me/${
    visitInfo.whatsappNumber
  }?text=${encodeURIComponent(visitInfo.whatsappMessage)}`;

  return (
    <section
      id="visit"
      className="
        relative
        overflow-hidden
        bg-[#f4f1e8]
        px-5
        py-24
        text-[#24382b]
        sm:px-6
        sm:py-28
        md:px-10
        md:py-40
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            TOP LABEL
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.35em]
              text-[#8b7355]
              sm:text-xs
            "
          >
            Plan Your Visit
          </p>
        </motion.div>

        {/* =========================================
            MAIN HEADING
        ========================================= */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 1,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-6 max-w-5xl"
        >
          <h2
            className="
              text-5xl
              font-light
              leading-[0.95]
              tracking-tight
              sm:text-6xl
              md:text-7xl
              lg:text-[6.5rem]
            "
          >
            Come closer
            <br />
            <span className="font-editorial italic">
              to nature.
            </span>
          </h2>
        </motion.div>

        {/* =========================================
            DESCRIPTION
        ========================================= */}

        <motion.p
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
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-8
            max-w-xl
            text-sm
            leading-7
            text-[#536052]
            sm:text-base
          "
        >
          {visitInfo.description}
        </motion.p>

        {/* =========================================
            LOCATION + MAP
        ========================================= */}

        <div
          className="
            mt-14
            grid
            gap-5
            sm:mt-16
            md:mt-24
            md:grid-cols-[0.8fr_1.2fr]
            md:gap-6
          "
        >

          {/* =========================================
              LOCATION INFORMATION
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
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
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-[1.75rem]
              bg-[#24382b]
              p-7
              text-[#f4f1e8]
              sm:p-8
              md:rounded-[2rem]
              md:p-10
            "
          >
            {/* LABEL */}

            <p
              className="
                text-[10px]
                uppercase
                tracking-[0.3em]
                text-[#b9a98f]
                sm:text-xs
              "
            >
              Visit ALE
            </p>

            {/* TITLE */}

            <h3
              className="
                mt-5
                text-3xl
                font-light
                leading-tight
                sm:text-4xl
              "
            >
              Agrowisata
              <br />
              Linggan Education
            </h3>

            {/* =========================================
                ADDRESS
            ========================================= */}

            <div className="mt-10 sm:mt-12">
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                  sm:text-xs
                "
              >
                Location
              </p>

              <p
                className="
                  mt-3
                  max-w-sm
                  text-sm
                  leading-7
                  text-white/70
                "
              >
                {visitInfo.address}
              </p>

              {/* GOOGLE MAPS LINK */}

              <Link
                href={visitInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  mt-5
                  inline-flex
                  items-center
                  gap-3
                  border-b
                  border-white/20
                  pb-2
                  text-sm
                  text-white
                  transition-colors
                  duration-300
                  hover:border-white/50
                  hover:text-white/80
                "
              >
                Open in Google Maps

                <span
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-2
                  "
                >
                  →
                </span>
              </Link>
            </div>

            {/* =========================================
                OPENING HOURS
            ========================================= */}

            <div
              className="
                mt-10
                border-t
                border-white/10
                pt-7
                sm:mt-12
                sm:pt-8
              "
            >
              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                  sm:text-xs
                "
              >
                Opening Hours
              </p>

              <div className="mt-4 space-y-3">
                {visitInfo.openingHours.map((item) => (
                  <div
                    key={item.day}
                    className="
                      flex
                      justify-between
                      gap-5
                      text-sm
                    "
                  >
                    <span className="text-white/60">
                      {item.day}
                    </span>

                    <span
                      className={`
                        whitespace-nowrap
                        ${
                          item.time === "Tutup"
                            ? "font-medium text-[#d8bfa0]"
                            : "text-white"
                        }
                      `}
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* =========================================
              GOOGLE MAP
          ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
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
              duration: 0.9,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[360px]
              overflow-hidden
              rounded-[1.75rem]
              bg-[#d8d3c6]
              sm:min-h-[420px]
              md:min-h-full
              md:rounded-[2rem]
            "
          >
            {/* GOOGLE MAP */}

            <iframe
              src={visitInfo.googleMapsEmbedUrl}
              title="Lokasi Agrowisata Linggan Education"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="
                absolute
                inset-0
                h-full
                w-full
                border-0
              "
            />

            {/* MAP OVERLAY */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-gradient-to-t
                from-[#0c1711]/20
                via-transparent
                to-transparent
              "
            />

            {/* MAP LABEL */}

            <div
              className="
                absolute
                bottom-5
                left-5
                max-w-[calc(100%-2.5rem)]
                rounded-full
                bg-[#f4f1e8]/95
                px-4
                py-3
                text-[11px]
                font-medium
                text-[#24382b]
                shadow-lg
                backdrop-blur-md
                sm:px-5
                sm:text-xs
              "
            >
              Agrowisata Linggan Education
            </div>
          </motion.div>
        </div>

        {/* =========================================
            WHATSAPP CTA
        ========================================= */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-5
            overflow-hidden
            rounded-[1.75rem]
            bg-[#d8cdb9]
            p-7
            sm:mt-6
            sm:p-8
            md:rounded-[2rem]
            md:p-12
            lg:p-16
          "
        >
          {/* DECORATIVE CIRCLES */}

          <div
            className="
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              border
              border-[#24382b]/10
            "
          />

          <div
            className="
              absolute
              -right-12
              -top-12
              h-48
              w-48
              rounded-full
              border
              border-[#24382b]/10
            "
          />

          {/* CONTENT */}

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-end
              md:justify-between
            "
          >
            <div className="max-w-2xl">

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-[#6d604d]
                  sm:text-xs
                "
              >
                Have a question?
              </p>

              <h3
                className="
                  mt-5
                  text-3xl
                  font-light
                  leading-tight
                  sm:text-4xl
                  md:text-5xl
                "
              >
                Planning a visit
                <br />
                <span className="font-editorial italic">
                  with your loved ones?
                </span>
              </h3>

              <p
                className="
                  mt-5
                  max-w-lg
                  text-sm
                  leading-7
                  text-[#536052]
                "
              >
                Hubungi kami melalui WhatsApp untuk mendapatkan
                informasi mengenai kunjungan, aktivitas, makanan,
                dan pengalaman di ALE.
              </p>
            </div>

            {/* WHATSAPP BUTTON */}

            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-4
                rounded-full
                bg-[#24382b]
                px-7
                py-4
                text-sm
                text-[#f4f1e8]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-[#1b2b20]
                hover:shadow-xl
              "
            >
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/20
                  text-[10px]
                  font-medium
                "
              >
                WA
              </span>

              <span>
                Chat with ALE
              </span>

              <span
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              >
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}