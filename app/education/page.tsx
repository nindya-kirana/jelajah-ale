import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { educationPrograms } from "@/data/education";

export default function EducationPage() {
  return (
    <main id="education">

      <PageHero
        eyebrow="Education"
        title="Learn through"
        italic="experience."
        description="Pendidikan di ALE hadir melalui pengalaman langsung, interaksi dengan alam, dan aktivitas yang menyenangkan."
        image="/images/education/education-hero.png"
      />

      <section className="bg-[#24382b] px-6 py-28 text-[#f4f1e8] md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b9a98f]">
              Learning at ALE
            </p>

            <h2 className="mt-5 max-w-4xl text-5xl font-light leading-[0.95] md:text-7xl">
              Education that
              <br />
              <span className="font-editorial italic">
                feels alive.
              </span>
            </h2>
          </ScrollReveal>

          <div className="mt-20 grid gap-5 md:grid-cols-2">
            {educationPrograms.map((program, index) => (
                <ScrollReveal
                    key={`${program.id}-${index}`}
                    delay={index * 0.08}
                >
                <article className="group overflow-hidden rounded-[1.5rem] bg-white/5">

                  <div className="overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-7 md:p-9">

                    <span className="text-xs text-[#b9a98f]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-4 text-2xl font-light">
                      {program.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/50">
                      {program.description}
                    </p>

                  </div>

                </article>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}