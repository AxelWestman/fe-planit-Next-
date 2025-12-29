'use client';

import { useState } from "react";
import { useAuthStore } from "@/app/Stores/auth.store";

type Message = {
  role: "user" | "assistant";
  content: string;
};

type ApiResponse = {
  tuPregunta: string;
  respuestaIA: string;
};

export function useAiChat() {
  const { token } = useAuthStore(); 
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (prompt: string) => {
    if (!token) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "No estás autenticado.",
        },
      ]);
      return;
    }

    setIsLoading(true);

    //const res = await fetch(`http://localhost:5290/api/ai/chat?pregunta=${encodeURIComponent(prompt)}`,  ejemplo viejo
    const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5290';
    try {
      const res = await fetch(`${API_URL}/api/ai/chat?pregunta=${encodeURIComponent(prompt)}`, 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ prompt }),
      });

      if (!res.ok) {
        throw new Error("Error en la petición");
      }

      const data: ApiResponse = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "user", content: data.tuPregunta },
        { role: "assistant", content: data.respuestaIA },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Error al obtener respuesta de la IA.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    messages,
    sendMessage,
    isLoading,
  };
}

