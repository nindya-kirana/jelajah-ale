import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { educationPrograms } from "@/data/education";
import { experiences } from "@/data/experiences";

export default function ExperiencesPage() {
  return (
    <main id="experiences">

      <PageHero
        eyebrow="Experiences"
        title="Experience"
        italic="ALE."
        description="Temukan berbagai aktivitas yang membuat kunjungan ke ALE menjadi pengalaman yang lebih dari sekadar wisata."
        image="/images/experiences/experience-hero.png"
      />

      <section className="bg-[#f4f1e8] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16">

            {experiences.map((experience, index) => (
            <ScrollReveal
                key={`${experience.id}-${index}`}
                delay={index * 0.08}
            >

                <article className="grid gap-8 border-t border-[#24382b]/15 pt-8 md:grid-cols-[0.15fr_0.85fr]">

                  {/* NUMBER */}

                  <span className="text-sm text-[#8b7355]">
                    {experience.number}
                  </span>

                  {/* CONTENT */}

                  <div className="grid gap-8 md:grid-cols-2">

                    {/* IMAGE */}

                    <div className="group overflow-hidden rounded-[1.5rem]">

                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                    </div>

                    {/* TEXT */}

                    <div className="flex flex-col justify-center">

                      <p className="text-xs uppercase tracking-[0.25em] text-[#8b7355]">
                        {experience.category}
                      </p>

                      <h2 className="mt-4 text-3xl font-light leading-tight md:text-4xl text-[#8b7355]">
                        {experience.title}
                      </h2>

                      <p className="mt-5 text-sm leading-7 text-[#536052]">
                        {experience.description}
                      </p>

                      {/* LINK */}

                      <a
                        href={experience.href}
                        className="group/link mt-7 inline-flex w-fit items-center gap-3 text-sm text-[#24382b]"
                      >
                        <span>
                          Explore experience
                        </span>

                        <span className="transition-transform duration-300 group-hover/link:translate-x-2">
                          →
                        </span>
                      </a>

                    </div>

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