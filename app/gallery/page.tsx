import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { gallery } from "@/data/gallery";

export default function GalleryPage() {
  return (
    <main id="gallery">

      <PageHero
        eyebrow="Gallery"
        title="See ALE"
        italic="through our eyes."
        description="Momen-momen dari alam, kegiatan edukasi, kuliner, dan kebersamaan di Agrowisata Linggan Education."
        image="/images/gallery/gallery-hero.png"
      />

      <section className="bg-[#24382b] px-6 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">

            {gallery.map((item, index) => (
              <ScrollReveal
                key={`${item.id}-${index}`}
                delay={(index % 3) * 0.05}
                className={
                  index === 0
                    ? "col-span-2 md:row-span-2"
                    : ""
                }
              >
                <div className="group relative overflow-hidden rounded-[1.2rem]">

                  <img
                    src={item.image}
                    alt={item.alt}
                    className={`w-full object-cover transition duration-1000 group-hover:scale-105 ${
                      index === 0
                        ? "aspect-[4/3] md:h-full"
                        : "aspect-square"
                    }`}
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/25" />

                  <div className="absolute bottom-4 left-4 opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="rounded-full bg-white/10 px-4 py-2 text-[9px] tracking-[0.25em] text-white backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                </div>
              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}