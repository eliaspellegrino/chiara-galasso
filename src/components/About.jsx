import { copy } from "../constants/copy";
import { CONFIG } from "../constants/config";
import { WHATSAPP_LINK } from "../constants/links";
import { ArrowRight, Mail } from "lucide-react";

export default function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div className="card">
            <div className="text-sm text-white/70">{copy.about.subtitle}</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
              {copy.about.title}
            </h2>
            <p className="mt-5 leading-relaxed text-white/85">
              {copy.about.text}
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Consultar por WhatsApp <ArrowRight size={18} />
              </a>

              <a className="btn-secondary" href={`mailto:${CONFIG.email}`}>
                Email <Mail size={18} />
              </a>

              <a href="#areas" className="btn-secondary">
                Ver áreas
              </a>
            </div>

            <div className="mt-6 text-sm text-white/65">
              La consulta es paga y se coordina por WhatsApp o email. Te explico
              opciones y próximos pasos sin prometer resultados.
            </div>
          </div>

          <div className="grid gap-4">
            {copy.about.differentials.map((d) => (
              <div key={d.title} className="card">
                <div className="text-xl font-semibold">{d.title}</div>
                <p className="mt-2 text-white/80">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
