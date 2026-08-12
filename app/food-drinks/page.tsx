"use client";

import { motion } from "motion/react";
import PageHero from "@/components/PageHero";
import { foodMenu, drinkMenu } from "@/data/food-menu";

type MenuItem = {
  name: string;
  price: string;
  description: string;
  image: string;
};

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: MenuItem[];
}) {
  return (
    <section className="mt-16 sm:mt-20 md:mt-28">
      {/* SECTION TITLE */}
      <div className="mb-8 flex items-center gap-4 sm:mb-10 md:mb-12 md:gap-5">
        <h2 className="shrink-0 text-3xl font-light tracking-tight text-[#24382b] sm:text-4xl">
          {title}
        </h2>

        <div className="h-px flex-1 bg-[#24382b]/20" />
      </div>

      {/* EMPTY STATE */}
      {items.length === 0 ? (
        <div className="rounded-[1.5rem] border border-[#24382b]/20 bg-white/40 p-6 sm:p-8">
          <p className="text-sm leading-7 text-[#4b584e]">
            Menu {title.toLowerCase()} ALE akan ditampilkan di sini.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-1 sm:gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-14 lg:gap-x-12">
          {items.map((item, index) => (
            <motion.article
              key={`${item.name}-${index}`}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group min-w-0"
            >
              {/* =====================================
                  MOBILE
                  FOTO ATAS → TEXT BAWAH
              ===================================== */}

              <div className="sm:hidden">
                {/* IMAGE */}

                <div className="aspect-square overflow-hidden rounded-xl bg-[#d4c7b3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 ease-out"
                  />
                </div>

                {/* CONTENT */}

                <div className="mt-4">
                  <h3 className="text-base font-medium leading-tight tracking-tight text-[#1f2a22]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-base font-bold leading-tight tracking-tight text-[#24382b]">
                    {item.price}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-[#4b584e]">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* =====================================
                  DESKTOP / TABLET
                  FOTO KIRI → TEXT KANAN
              ===================================== */}

              <div className="hidden sm:grid sm:grid-cols-[150px_1fr] sm:gap-6 lg:grid-cols-[180px_1fr] lg:gap-7">
                {/* IMAGE */}

                <div className="aspect-square overflow-hidden rounded-2xl bg-[#d4c7b3]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}

                <div className="flex min-w-0 flex-col justify-center">
                  <div className="flex items-start justify-between gap-5">
                    <h3 className="min-w-0 text-xl font-medium leading-tight tracking-tight text-[#1f2a22] lg:text-2xl">
                      {item.name}
                    </h3>

                    <span className="shrink-0 text-lg font-bold leading-tight tracking-tight text-[#24382b] lg:text-xl">
                      {item.price}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-7 text-[#4b584e]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </section>
  );
}

export default function FoodDrinksPage() {
  return (
    <main id="food-drinks">

      {/* =========================================
          HERO
      ========================================= */}

      <PageHero
        eyebrow="ALE Café & Resto"
        title="Food"
        italic="& Drinks."
        description="Nikmati waktu santai bersama keluarga setelah menjelajahi pengalaman alam dan edukasi di ALE."
        image="/images/food/about.png"
      />

      {/* =========================================
          MENU
      ========================================= */}

      <section className="bg-[#f4f1e8] px-5 py-16 sm:px-6 sm:py-20 md:px-10 md:py-32">

        <div className="mx-auto max-w-7xl">

          {/* MENU INTRO */}

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
          >

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#6f604d] sm:text-xs">
              The Menu
            </p>

            <h2 className="mt-4 max-w-3xl text-4xl font-light leading-[1.05] tracking-tight text-[#24382b] sm:mt-5 sm:text-5xl md:text-6xl">
              Simple moments,
              <br />

              <span className="font-editorial italic text-[#24382b]">
                good taste.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#4b584e] sm:mt-6 sm:text-base">
              Setelah menikmati aktivitas dan pengalaman di ALE,
              luangkan waktu untuk bersantai dan menikmati pilihan
              makanan serta minuman yang tersedia di ALE Café & Resto.
            </p>

          </motion.div>

          {/* FOOD */}

          <MenuSection
            title="Food"
            items={foodMenu}
          />

          {/* DRINKS */}

          <MenuSection
            title="Drinks"
            items={drinkMenu}
          />

        </div>

      </section>

    </main>
  );
}