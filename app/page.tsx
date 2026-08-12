import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import ExperiencePreview from "@/components/ExperiencePreview";
import EducationPreview from "@/components/EducationPreview";
import FoodDrinksPreview from "@/components/FoodDrinksPreview";
import StoriesPreview from "@/components/StoriesPreview";
import GalleryPreview from "@/components/GalleryPreview";
import VisitSection from "@/components/VisitSection";

export default function Home() {
  return (
    <main>

      <Hero />

      <section id="about">
        <AboutPreview />
      </section>

      <section id="experiences">
        <ExperiencePreview />
      </section>

      <section id="education">
        <EducationPreview />
      </section>

      <section id="food-drinks">
        <FoodDrinksPreview />
      </section>

      <section id="stories">
        <StoriesPreview />
      </section>

      <section id="gallery">
        <GalleryPreview />
      </section>

      <section id="visit">
        <VisitSection />
      </section>

    </main>
  );
}