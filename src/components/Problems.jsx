import { copy } from "../constants/copy";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Problems() {
  return (
    <section className="section" id="problemas">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="card">
            <div className="flex items-center gap-2 text-white/80">
              <AlertTriangle size={18} />
              <span className="text-sm">Dolor / urgencia</span>
            </div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              {copy.problems.title}
            </h2>
            <p className="mt-4 text-white/80">{copy.problems.subtitle}</p>

            <ul className="mt-6 space-y-3">
              {copy.problems.items.map((p) => (
                <li key={p} className="flex gap-3 text-white/85">
                  <span className="w-2 h-2 mt-2 rounded-full bg-white/70" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link to="/agenda" className="btn-primary">
                Agendar consulta
              </Link>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle2 size={18} />
              <span className="text-sm">Checklist rápido</span>
            </div>

            <h3 className="mt-2 text-2xl font-semibold">
              {copy.problems.signalsTitle}
            </h3>

            <ul className="mt-5 space-y-3">
              {copy.problems.signals.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="mt-1" />
                  <span className="text-white/85">{s}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-sm text-white/65">
              Si hay plazos o notificaciones formales, conviene consultar cuanto
              antes para evitar errores.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
