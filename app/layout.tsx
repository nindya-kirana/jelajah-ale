import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import PageLoader from "@/components/PageLoader";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jelajahale.site"),

  title: {
    default: "Agrowisata Linggan Education | Jelajah ALE",
    template: "%s | Agrowisata Linggan Education",
  },

  description:
    "Jelajahi Agrowisata Linggan Education (ALE), tempat untuk belajar, menikmati alam, mencoba pengalaman wisata, serta menikmati makanan dan minuman bersama keluarga.",

  keywords: [
    "Agrowisata Linggan Education",
    "ALE",
    "Jelajah ALE",
    "Agrowisata Linggan",
    "wisata Mranggen",
    "wisata Demak",
    "wisata Jawa Tengah",
    "wisata edukasi",
    "agrowisata Demak",
    "agrowisata Mranggen",
  ],

  authors: [
    {
      name: "Agrowisata Linggan Education",
    },
  ],

  creator: "Agrowisata Linggan Education",

  publisher: "Agrowisata Linggan Education",

  alternates: {
    canonical: "https://jelajahale.site",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    title: "Agrowisata Linggan Education | Jelajah ALE",
    description:
      "Jelajahi pengalaman wisata, edukasi, alam, makanan, dan minuman di Agrowisata Linggan Education.",
    url: "https://jelajahale.site",
    siteName: "Agrowisata Linggan Education",
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Agrowisata Linggan Education | Jelajah ALE",
    description:
      "Jelajahi pengalaman wisata, edukasi, alam, makanan, dan minuman di Agrowisata Linggan Education.",
  },

  category: "travel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${manrope.variable} ${cormorant.variable}`}
      >
        <PageLoader />

        <CustomCursor />

        <Navbar />

        <PageTransition>
          {children}
        </PageTransition>

        <Footer />
      </body>
    </html>
  );
}