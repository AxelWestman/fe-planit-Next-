"use client";

import { usePdfMake } from "@/hooks/usePdfMake";

export default function PdfButton() {
  const { createPdf } = usePdfMake();

  return (
    <button
      className="bg-white hover:bg-gray-50 border border-gray-200 font-semibold py-3 px-4 rounded-xl transition-colors text-sm"
      onClick={() =>
        createPdf({
          content: [{ text: "probando probando probandooooooo" }],
        })
      }
    >
      📄 Exportar PDF
    </button>
  );
}

