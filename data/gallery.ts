export type GalleryItem = {
  id: number;
  image: string;
  alt: string;
  category: "NATURE" | "EDUCATION" | "FAMILY" | "FOOD";
};

export const gallery: GalleryItem[] = [
  {
    id: 1,
    image: "/images/gallery/gallery-01.png",
    alt: "Suasana Agrowisata Linggan Education",
    category: "NATURE",
  },
  {
    id: 2,
    image: "/images/gallery/gallery-02.png",
    alt: "Aktivitas edukasi pertanian",
    category: "EDUCATION",
  },
  {
    id: 3,
    image: "/images/gallery/gallery-03.png",
    alt: "Kegiatan bersama keluarga",
    category: "FAMILY",
  },
  {
    id: 4,
    image: "/images/gallery/gallery-04.png",
    alt: "Suasana alam ALE",
    category: "NATURE",
  },
  {
    id: 5,
    image: "/images/gallery/gallery-05.png",
    alt: "Pengalaman kuliner di ALE",
    category: "FOOD",
  },
  {
    id: 6,
    image: "/images/gallery/gallery-06.png",
    alt: "Aktivitas pengunjung di ALE",
    category: "FAMILY",
  },
  {
    id: 7,
    image: "/images/gallery/gallery-07.png",
    alt: "Kegiatan pertanian di ALE",
    category: "EDUCATION",
  },
  {
    id: 8,
    image: "/images/gallery/gallery-08.png",
    alt: "Pemandangan Agrowisata Linggan Education",
    category: "NATURE",
  },
];