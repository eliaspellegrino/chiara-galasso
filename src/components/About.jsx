import { copy } from "../constants/copy";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
              <Link to="/agenda" className="btn-primary">
                Agendar consulta <ArrowRight size={18} />
              </Link>
              <a href="#areas" className="btn-secondary">
                Ver áreas
              </a>
            </div>

            <div className="mt-6 text-sm text-white/65">
              En la consulta inicial ordenamos el problema y definimos un plan
              posible, sin prometer resultados.
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
