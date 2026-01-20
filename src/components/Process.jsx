import { copy } from "../constants/copy";
import { WHATSAPP_LINK } from "../constants/links";
import { ArrowRight } from "lucide-react";

export default function Process() {
  return (
    <section className="section" id="proceso">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {copy.process.title}
            </h2>
            <p className="mt-4 text-white/80">{copy.process.subtitle}</p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Consultar por WhatsApp <ArrowRight size={18} />
              </a>

              <a href="#recursos" className="btn-secondary">
                Ver guía
              </a>
            </div>

            <p className="mt-6 text-sm text-white/65">
              {copy.process.transparency}
            </p>
          </div>

          <div className="grid gap-4">
            {copy.process.steps.map((s) => (
              <div key={s.title} className="card">
                <div className="text-xl font-semibold">{s.title}</div>
                <p className="mt-2 text-white/80">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
