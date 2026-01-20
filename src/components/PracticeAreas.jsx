import { copy } from "../constants/copy";
import { WHATSAPP_LINK } from "../constants/links";
import { ArrowRight } from "lucide-react";

export default function PracticeAreas() {
  return (
    <section className="section" id="areas">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {copy.areas.title}
        </h2>
        <p className="mt-4 text-white/80">{copy.areas.subtitle}</p>
      </div>

      <div className="grid gap-4 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {copy.areas.list.map((a) => (
          <div key={a.title} className="transition card hover:bg-white/10">
            <div className="text-xl font-semibold">{a.title}</div>
            <p className="mt-3 text-white/80">{a.text}</p>
            <div className="mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full btn-secondary"
              >
                Quiero evaluar mi caso <ArrowRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
