import { copy } from "../constants/copy";
import { CONFIG } from "../constants/config";
import { WHATSAPP_LINK } from "../constants/links";
import { ArrowRight, ShieldCheck, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-6 section md:pt-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            <span className="pill">
              <ShieldCheck size={16} />
              Confidencialidad profesional
            </span>
            <span className="pill">Atención personalizada</span>
            <span className="pill">Comunicación simple</span>
          </div>

          <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-5xl md:leading-[1.15]">
            {copy.hero.title}
          </h1>

          <p className="mt-6 text-lg text-white/85">{copy.hero.subtitle}</p>

          <ul className="mt-6 space-y-2 text-white/85">
            {copy.hero.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="w-2 h-2 mt-1 rounded-full bg-white/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mt-8">
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
              Ver áreas de práctica
            </a>
          </div>

          <p className="mt-6 text-sm text-white/65">{copy.hero.trustLine}</p>
        </div>

        <div className="card">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-white/70">Marca personal</div>
              <div className="mt-1 text-2xl font-semibold tracking-tight">
                {CONFIG.brandName}
              </div>
              <div className="text-white/70">{CONFIG.brandSubtitle}</div>
            </div>

            {/* Placeholder foto */}
            <div className="w-20 h-20 border rounded-2xl border-white/10 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-3 mt-6">
            <div className="p-4 border rounded-2xl border-white/10 bg-white/5">
              <div className="text-sm text-white/70">Enfoque</div>
              <div className="mt-1 font-semibold">Claridad + Estrategia</div>
            </div>
            <div className="p-4 border rounded-2xl border-white/10 bg-white/5">
              <div className="text-sm text-white/70">Formato</div>
              <div className="mt-1 font-semibold">Online / Presencial</div>
            </div>
            <div className="p-4 border rounded-2xl border-white/10 bg-white/5">
              <div className="text-sm text-white/70">Objetivo</div>
              <div className="mt-1 font-semibold">Ordenar decisiones</div>
            </div>
            <div className="p-4 border rounded-2xl border-white/10 bg-white/5">
              <div className="text-sm text-white/70">Tono</div>
              <div className="mt-1 font-semibold">Profesional y humano</div>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/65">
            <span className="font-semibold text-white/80">Nota ética:</span> no
            se garantizan resultados. La consulta busca orientar y definir
            próximos pasos.
          </div>
        </div>
      </div>
    </section>
  );
}
