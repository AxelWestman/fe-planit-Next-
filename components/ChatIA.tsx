'use client';

import { useState } from "react";
import { useAiChat } from "../hooks/useAiChat";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, isLoading } = useAiChat();

  const handleSend = async () => {
    if (!input.trim()) return;
    await sendMessage(input);
    setInput("");
  };

  return (
    <>
      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col border">
          <div className="p-3 border-b font-semibold">
            Asistente IA
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm max-w-[80%]
                  ${msg.role === "user"
                    ? "bg-blue-500 text-white ml-auto"
                    : "bg-gray-200 text-black mr-auto"}`}
              >
                {msg.content}
              </div>
            ))}

            {isLoading && (
              <div className="text-xs text-gray-400">Escribiendo…</div>
            )}
          </div>

          <div className="p-2 border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribe tu mensaje…"
              className="flex-1 border rounded px-2 py-1 text-sm"
            />
            {/*<button
              onClick={handleSend}
              className="bg-blue-500 text-white px-3 rounded text-sm"
            >
              Enviar
            </button>*/}
          </div>
        </div>
      )}

      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 !rounded-full bg-emerald-500 text-white shadow-lg flex items-center justify-center text-xl"
      >
        💬
      </button>
    </>
  );
}