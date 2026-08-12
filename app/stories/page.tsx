import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { stories } from "@/data/stories";
import Link from "next/link";

export default function StoriesPage() {
  return (
    <main id="stories">

      <PageHero
        eyebrow="Stories"
        title="Stories from"
        italic="ALE."
        description="Cerita tentang alam, aktivitas, pembelajaran, makanan, dan momen-momen yang terjadi di ALE."
        image="/images/stories/stories-hero.png"
      />

      <section className="bg-[#f4f1e8] px-6 py-28 md:px-10 md:py-40">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-2">

            {stories.map((story, index) => (
              <ScrollReveal
                key={story.number}
                delay={index * 0.08}
              >
                <Link
                  href={story.href}
                  className="group block"
                >
                  <article>

                    <div className="overflow-hidden rounded-[1.5rem]">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="aspect-[4/3] w-full object-cover transition duration-1000 group-hover:scale-105"
                      />
                    </div>

                    <div className="mt-5">

                      <p className="text-xs tracking-[0.25em] text-[#8b7355]">
                        {story.category}
                      </p>

                      <h2 className="mt-3 text-3xl font-light text-[#8b7355]">
                        {story.title}
                      </h2>

                      <p className="mt-3 max-w-lg text-sm leading-7 text-[#536052]">
                        {story.description}
                      </p>

                      <div className="mt-5 text-sm">
                        Read story →
                      </div>

                    </div>

                  </article>
                </Link>
              </ScrollReveal>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}