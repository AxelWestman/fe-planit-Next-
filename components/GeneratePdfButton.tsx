"use client";

import { usePdfMake } from "@/hooks/usePdfMake";

export default function PdfButton() {
  const { createPdf } = usePdfMake();

  return (
    <button
  onClick={() =>
    createPdf({
      content: [{ text: "probando probando probandooooooo" }],
    })
  }
  className="
    flex-1
    rounded-xl
    px-4
    py-3
    text-sm
    font-semibold
    bg-white
    text-gray-800
    border
    border-gray-200
    shadow-sm
    hover:bg-gray-50
    transition-colors
    flex
    items-center
    justify-center
    gap-2
  "
>
  📄 Exportar PDF
</button>

  );
}

