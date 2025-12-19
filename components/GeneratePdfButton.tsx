"use client";

import { useAuthStore } from "@/app/Stores/auth.store";
import { usePdfMake } from "@/hooks/usePdfMake";

export default function PdfButton() {
  const { itinerary } = useAuthStore();
  const { createPdf } = usePdfMake();

  const handleCreatePdf = () => {
    if (!itinerary || !itinerary.days || itinerary.days.length === 0) {
      console.warn("No hay itinerario para exportar");
      return;
    }

    const totalDays = itinerary.days.length;

    const content: any[] = [
      // TÍTULO PRINCIPAL
      {
        text: itinerary.trip_title ?? "Mi viaje",
        style: "header",
        margin: [0, 0, 0, 10],
      },

      // INFO GENERAL
      itinerary.destination && {
        text: `Destino: ${itinerary.destination}`,
        margin: [0, 0, 0, 4],
      },

      {
        text: `Duración: ${totalDays} días`,
        margin: [0, 0, 0, 4],
      },

      {
        text: `Presupuesto estimado: ${
          itinerary.totalBudget
            ? `$${itinerary.totalBudget}`
            : "No especificado"
        }`,
        margin: [0, 0, 0, 12],
      },
    ].filter(Boolean);

    // ITINERARIO DÍA POR DÍA
    itinerary.days.forEach((day) => {
      content.push(
        {
          text: `Día ${day.day_number} – ${day.theme}`,
          style: "subheader",
          margin: [0, 10, 0, 5],
        },
        ...day.activities.map((activity : any) => ({
          margin: [10, 4, 0, 4],
          stack: [
            {
              text: `${activity.time} – ${activity.place_name}`,
              bold: true,
            },
            {
              text: activity.description,
              fontSize: 10,
            },
            {
              text: `Categoría: ${activity.category}${
                activity.price_estimate
                  ? ` | Precio: ${activity.price_estimate}`
                  : ""
              }`,
              italics: true,
              fontSize: 9,
            },
          ],
        }))
      );
    });

    createPdf({
      content,
      styles: {
        header: {
          fontSize: 18,
          bold: true,
        },
        subheader: {
          fontSize: 14,
          bold: true,
        },
      },
      defaultStyle: {
        fontSize: 11,
      },
    });
  };

  return (
    <button
      onClick={handleCreatePdf}
      disabled={!itinerary}
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
        disabled:opacity-50
        disabled:cursor-not-allowed
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


