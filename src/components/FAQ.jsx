import { useState } from "react";
import { copy } from "../constants/copy";
import { ChevronDown } from "lucide-react";

function Item({ q, a, open, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="w-full text-left rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition"
      aria-expanded={open}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="font-semibold">{q}</div>
        <ChevronDown
          className={`shrink-0 transition ${open ? "rotate-180" : ""}`}
          size={20}
        />
      </div>
      {open && <p className="mt-3 text-white/80 leading-relaxed">{a}</p>}
    </button>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" id="preguntas">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {copy.faq.title}
        </h2>
      </div>

      <div className="mt-8 grid gap-3">
        {copy.faq.items.map((it, idx) => (
          <Item
            key={it.q}
            q={it.q}
            a={it.a}
            open={openIndex === idx}
            onToggle={() => setOpenIndex((v) => (v === idx ? -1 : idx))}
          />
        ))}
      </div>
    </section>
  );
}
