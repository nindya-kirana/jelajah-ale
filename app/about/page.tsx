import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <main id="about">

      <PageHero
        eyebrow="About ALE"
        title="More than"
        italic="a destination."
        description="Agrowisata Linggan Education adalah ruang untuk mengenal alam, pertanian, edukasi, kuliner, dan menciptakan pengalaman bersama."
        image="/images/about/about-hero.png"
      />

      <section className="bg-[#f4f1e8] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">

          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#8b7355]">
              Our Story
            </p>

            <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl text-[#8b7355]">
              Belajar dari
              <br />
              <span className="font-editorial italic text-[#8b7355]">
                alam sekitar.
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-sm leading-8 text-[#536052] md:text-base">
              ALE menghadirkan pengalaman wisata yang menggabungkan
              pembelajaran, pertanian, alam, aktivitas keluarga, dan
              kuliner dalam satu ruang yang dekat dengan kehidupan sehari-hari.
            </p>

            <p className="mt-6 text-sm leading-8 text-[#536052] md:text-base">
              Setiap aktivitas dirancang agar pengunjung tidak hanya datang
              untuk melihat, tetapi juga mengalami, memahami, dan membawa
              pulang sebuah cerita.
            </p>
          </ScrollReveal>

        </div>
      </section>

    </main>
  );
}