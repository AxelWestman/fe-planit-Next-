"use client";

import { useCallback } from "react";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

export const usePdfMake = () => {
  const createPdf = useCallback(
    (docDefinition: any, fileName = "Itinerario.pdf") => {
      pdfMake.createPdf(docDefinition).download(fileName);
    },
    []
  );

  return { createPdf };
};
