"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { foodMenu, drinkMenu } from "@/data/food-menu";

export default function FoodDrinksPreview() {
  const featuredFood = foodMenu.slice(0, 2);
  const featuredDrink = drinkMenu.slice(0, 1);

  const featuredItems = [
    ...featuredFood,
    ...featuredDrink,
  ];

  return (
    <section className="overflow-hidden bg-[#e7dfd0] text-[#24382b]">

      {/* =========================================
          INTRO
      ========================================= */}
      <div className="px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-[1fr_0.7fr] md:items-end">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-[#8b7355]">
                Food & Drinks
              </p>

              <h2 className="mt-5 text-5xl font-light leading-[0.95] tracking-tight md:text-7xl">
                Taste the
                <br />
                <span className="italic">moment.</span>
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
                Setelah menjelajahi ALE, nikmati waktu santai bersama keluarga
                melalui pengalaman makan dan minum di kafe dan resto ALE.
              </p>

              <Link
                href="/food-drinks"
                className="mt-7 inline-flex items-center gap-3 border-b border-[#24382b] pb-2 text-sm"
              >
                Explore Food & Drinks
                <span>→</span>
              </Link>
            </motion.div>

          </div>

        </div>
      </div>

      {/* =========================================
          DINING IMAGE
      ========================================= */}
      <div className="px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative h-[60vh] min-h-[450px] overflow-hidden rounded-[2rem]"
        >
          <img
            src="/images/food/about.png"
            alt="Dining at ALE"
            className="h-full w-full object-cover transition duration-1000 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-7 pt-32 text-white md:p-12 md:pt-40">
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">
              Stay · Eat · Enjoy
            </p>

            <h3 className="mt-4 text-4xl font-light md:text-6xl">
              Good food.
              <br />
              Good company.
            </h3>
          </div>
        </motion.div>
      </div>

      {/* =========================================
          FEATURED MENU
      ========================================= */}
      {featuredItems.length > 0 && (
        <div className="px-6 py-28 md:px-10 md:py-40">
          <div className="mx-auto max-w-7xl">

            <div className="mb-12 flex items-end justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
                  Selected Menu
                </p>

                <h3 className="mt-4 text-3xl font-light md:text-5xl">
                  A taste of ALE.
                </h3>
              </div>

              <Link
                href="/food-drinks"
                className="hidden text-sm md:block"
              >
                View full menu →
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">

              {featuredItems.map((item, index) => (
                <motion.article
                  key={`${item.name}-${index}`}
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
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                >
                  <div className="group">

                    <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#d4c7b3]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-5 flex items-start justify-between gap-5">
                      <div>
                        <h4 className="text-xl font-light">
                          {item.name}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-[#536052]">
                          {item.description}
                        </p>
                      </div>

                      <span className="shrink-0 text-sm">
                        {item.price}
                      </span>
                    </div>

                  </div>
                </motion.article>
              ))}

            </div>

          </div>
        </div>
      )}

      {/* =========================================
          MENU DIGITAL CTA
      ========================================= */}
      <div className="border-t border-[#24382b]/15 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              ALE Café & Resto
            </p>

            <h3 className="mt-4 max-w-2xl text-3xl font-light leading-tight md:text-5xl">
              Take a seat,
              <br />
              <span className="italic">
                stay a little longer.
              </span>
            </h3>
          </div>

          <Link
            href="/food-drinks"
            className="inline-flex w-fit rounded-full bg-[#24382b] px-7 py-4 text-sm text-white transition hover:scale-105"
          >
            View Food & Drinks
          </Link>

        </div>
      </div>

    </section>
  );
}