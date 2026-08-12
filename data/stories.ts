export type Story = {
  number: string;
  category: "LEARN" | "EXPLORE" | "TOGETHER";
  title: string;
  description: string;
  image: string;
  href: string;
};

export const stories: Story[] = [
  {
    number: "01",
    category: "LEARN",
    title: "Learning from the Land",
    description:
      "Mengenal pertanian melalui pengalaman langsung dan melihat bagaimana prosesnya berlangsung di lingkungan ALE.",
    image: "/images/stories/learning.png",
    href: "/stories/learning-from-the-land",
  },
  {
    number: "02",
    category: "EXPLORE",
    title: "A Day at ALE",
    description:
      "Satu hari untuk belajar, bermain, menikmati alam, dan menemukan berbagai pengalaman di ALE.",
    image: "/images/stories/a-day-at-ale.png",
    href: "/stories/a-day-at-ale",
  },
  {
    number: "03",
    category: "TOGETHER",
    title: "Moments Worth Sharing",
    description:
      "Karena pengalaman terbaik sering kali menjadi lebih berarti ketika dinikmati bersama.",
    image: "/images/stories/moments.png",
    href: "/stories/moments-worth-sharing",
  },
];