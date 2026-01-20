import { copy } from "../constants/copy";
import { CONFIG } from "../constants/config";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="section pt-32 md:pt-36">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="pill">
              <ShieldCheck size={16} />
              Confidencialidad profesional
            </span>
            <span className="pill">Atención personalizada</span>
            <span className="pill">Comunicación simple</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {copy.hero.title}
          </h1>

          <p className="mt-6 text-lg text-white/85">{copy.hero.subtitle}</p>

          <ul className="mt-6 space-y-2 text-white/85">
            {copy.hero.bullets.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex gap-4 flex-wrap">
            <Link to="/agenda" className="btn-primary">
              Agendar consulta <ArrowRight size={18} />
            </Link>
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
              <div className="text-2xl font-semibold tracking-tight mt-1">
                {CONFIG.brandName}
              </div>
              <div className="text-white/70">{CONFIG.brandSubtitle}</div>
            </div>

            {/* Placeholder foto */}
            <div className="h-20 w-20 rounded-2xl bg-white/10 border border-white/10" />
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm text-white/70">Enfoque</div>
              <div className="mt-1 font-semibold">Claridad + Estrategia</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm text-white/70">Formato</div>
              <div className="mt-1 font-semibold">Online / Presencial</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-sm text-white/70">Objetivo</div>
              <div className="mt-1 font-semibold">Ordenar decisiones</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
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
