import Image from "next/image";
import Link from "next/link";
import { visitInfo } from "@/data/visit";

export default function Footer() {
  /*
  =========================================
  WHATSAPP URL
  =========================================
  */

  const whatsappUrl = `https://wa.me/${visitInfo.whatsappNumber}?text=${encodeURIComponent(
    visitInfo.whatsappMessage
  )}`;

  return (
    <footer className="bg-[#0c1711] px-6 py-16 text-[#f4f1e8] md:px-10 md:py-20">
      <div className="mx-auto max-w-7xl">

        {/* =========================================
            MAIN FOOTER
        ========================================= */}

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* =========================================
              BRAND
          ========================================= */}

          <div>
            {/* LOGO + ALE */}

            <Link
              href="/"
              className="group inline-flex flex-col items-center leading-none"
            >
              <Image
                src="/images/logo/ale-logo-putih.png"
                alt="ALE Logo"
                width={120}
                height={120}
                className="
                  h-14
                  w-14
                  scale-110
                  object-contain
                  brightness-0
                  invert
                  transition-transform
                  duration-500
                  group-hover:scale-[1.2]
                  sm:h-16
                  sm:w-16
                "
              />

              <span
                className="
                  mt-0.5
                  text-3xl
                  font-semibold
                  tracking-[0.28em]
                  text-[#f4f1e8]
                  sm:text-4xl
                "
              >
                ALE
              </span>
            </Link>

            {/* BRAND NAME */}

            <p className="mt-7 text-[10px] uppercase tracking-[0.35em] text-white/40 sm:text-xs">
              Agrowisata Linggan Education
            </p>

            {/* DESCRIPTION */}

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              Tempat untuk belajar, menjelajah, menikmati alam, dan
              menghabiskan waktu bersama orang-orang tersayang.
            </p>
          </div>

          {/* =========================================
              NAVIGATION
          ========================================= */}

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Explore
            </p>

            <nav className="mt-5 flex flex-col gap-3 text-sm text-white/60">

              <Link
                href="/#about"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/#experiences"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Experiences
              </Link>

              <Link
                href="/#education"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Education
              </Link>

              <Link
                href="/#food-drinks"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Food & Drinks
              </Link>

              <Link
                href="/#stories"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Stories
              </Link>

              <Link
                href="/#gallery"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Gallery
              </Link>

              <Link
                href="/#visit"
                className="w-fit transition-colors duration-300 hover:text-white"
              >
                Visit
              </Link>

            </nav>
          </div>

          {/* =========================================
              CONNECT
          ========================================= */}

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/30">
              Connect
            </p>

            <div className="mt-5 flex flex-col gap-4 text-sm">

              {/* WHATSAPP */}

              <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-fit
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                WhatsApp →
              </Link>

              {/* GOOGLE MAPS */}

              <Link
                href={visitInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-fit
                  text-white/60
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Google Maps →
              </Link>

            </div>
          </div>
        </div>

        {/* =========================================
            BOTTOM
        ========================================= */}

        <div
          className="
            mt-16
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-6
            text-xs
            text-white/30
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {new Date().getFullYear()} KKN-T 78 - Desa Mranggen
          </p>

          <p>
            Learn · Explore · Connect
          </p>
        </div>

      </div>
    </footer>
  );
}