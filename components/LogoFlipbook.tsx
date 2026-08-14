"use client";

import { useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

const PDF_URL = "/documents/filosofi-logo-ale.pdf";

const PDF_WORKER_URL =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/6.2.108/pdf.worker.min.mjs";

type PDFPage = {
  pageNumber: number;
  image: string;
};

export default function LogoFlipbook() {
  const flipBookRef = useRef<any>(null);

  const [pages, setPages] = useState<PDFPage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function renderPDF() {
      try {
        const pdfjsLib = await import(
          "pdfjs-dist/legacy/build/pdf.mjs"
        );

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          PDF_WORKER_URL;

        const pdfUrl = new URL(
          PDF_URL,
          window.location.origin
        ).toString();

        /*
         * LOAD PDF
         */

        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
        });

        const pdf = await loadingTask.promise;

        const renderedPages: PDFPage[] = [];

        /*
         * RENDER SETIAP HALAMAN SATU KALI
         */

        for (
          let pageNumber = 1;
          pageNumber <= pdf.numPages;
          pageNumber++
        ) {
          if (cancelled) return;

          const page = await pdf.getPage(
            pageNumber
          );

          /*
           * Scale untuk kualitas gambar
           */
          const viewport = page.getViewport({
            scale: 1.5,
          });

          /*
           * SETIAP HALAMAN MEMILIKI CANVAS SENDIRI
           */
          const canvas =
            document.createElement("canvas");

          const context =
            canvas.getContext("2d");

          if (!context) {
            throw new Error(
              `Canvas halaman ${pageNumber} tidak tersedia`
            );
          }

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          /*
           * RENDER HANYA SEKALI
           */

          await page.render({
            canvas,
            canvasContext: context,
            viewport,
          }).promise;

          /*
           * SIMPAN HASIL CANVAS SEBAGAI IMAGE
           */

          const image =
            canvas.toDataURL("image/jpeg", 0.92);

          renderedPages.push({
            pageNumber,
            image,
          });
        }

        if (!cancelled) {
          setPages(renderedPages);
          setLoading(false);
        }
      } catch (err) {
        console.error(
          "Gagal membuat flipbook:",
          err
        );

        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    renderPDF();

    return () => {
      cancelled = true;
    };
  }, []);

  /*
   * =====================================================
   * LOADING
   * =====================================================
   */

  if (loading) {
    return (
      <section className="bg-[#f4f1e8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center">

          <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#24382b]/20 border-t-[#24382b]" />

          <p className="mt-5 text-sm text-[#536052]">
            Menyiapkan filosofi logo...
          </p>

        </div>
      </section>
    );
  }

  /*
   * =====================================================
   * ERROR
   * =====================================================
   */

  if (error) {
    return (
      <section className="bg-[#f4f1e8] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-xl rounded-3xl border border-[#24382b]/15 bg-white/40 p-8 text-center">

          <p className="text-sm leading-7 text-[#536052]">
            Filosofi logo belum dapat
            ditampilkan.
          </p>

          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex rounded-full bg-[#24382b] px-6 py-3 text-sm text-[#f4f1e8] transition hover:-translate-y-0.5"
          >
            Buka PDF
          </a>

        </div>
      </section>
    );
  }

  /*
   * =====================================================
   * FLIPBOOK
   * =====================================================
   */

  return (
    <section className="overflow-hidden bg-[#f4f1e8] px-4 py-20 sm:px-6 md:px-10 md:py-32">

      <div className="mx-auto max-w-6xl">

        {/* HEADER */}

        <div className="mb-12 text-center md:mb-16">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#8b7355] sm:text-xs">
            Logo Philosophy
          </p>

          <h2 className="mt-4 text-4xl font-light tracking-tight text-[#24382b] md:text-6xl">
            The story behind
            <br />

            <span className="font-editorial italic">
              the logo.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#536052] md:text-base">
            Kenali makna dan elemen visual
            yang membentuk identitas
            Agrowisata Linggan Education.
          </p>

        </div>

        {/* FLIPBOOK */}

        <div className="flex justify-center overflow-hidden">

          <HTMLFlipBook
            ref={flipBookRef}
            width={450}
            height={635}
            size="stretch"
            minWidth={280}
            maxWidth={500}
            minHeight={395}
            maxHeight={700}
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            flippingTime={900}
            usePortrait={true}
            startPage={0}
            autoSize={true}
            maxShadowOpacity={0.25}
            showPageCorners={true}
            disableFlipByClick={false}
            useMouseEvents={true}
            swipeDistance={30}
            className="shadow-2xl"
            style={{}}
            startZIndex={0}
            clickEventForward={true}
          >

            {/*
             * PENTING:
             * Jangan sort ulang di sini.
             * pages sudah dibuat berurutan:
             *
             * 1
             * 2
             * 3
             * 4
             * ...
             */}

            {pages.map((page) => (
              <div
                key={`pdf-page-${page.pageNumber}`}
                className="relative h-full w-full overflow-hidden bg-white"
              >

                <img
                  src={page.image}
                  alt={`Halaman ${page.pageNumber}`}
                  className="block h-full w-full object-contain"
                  draggable={false}
                />

              </div>
            ))}

          </HTMLFlipBook>

        </div>

        {/* INSTRUCTION */}

        <div className="mt-10 text-center">

          <p className="text-xs uppercase tracking-[0.25em] text-[#8b7355]">
            Swipe / Drag
          </p>

          <p className="mt-2 text-sm text-[#536052]">
            Geser halaman untuk melihat
            filosofi logo ALE.
          </p>

        </div>

        {/* PDF */}

        <div className="mt-8 flex justify-center">

          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#24382b]/20 px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#24382b] transition hover:bg-[#24382b] hover:text-[#f4f1e8]"
          >
            Buka PDF
          </a>

        </div>

      </div>

    </section>
  );
}