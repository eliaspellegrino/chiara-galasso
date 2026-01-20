import { copy } from "../constants/copy";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PracticeAreas() {
  return (
    <section className="section" id="areas">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {copy.areas.title}
        </h2>
        <p className="mt-4 text-white/80">{copy.areas.subtitle}</p>
      </div>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {copy.areas.list.map((a) => (
          <div key={a.title} className="card hover:bg-white/10 transition">
            <div className="text-xl font-semibold">{a.title}</div>
            <p className="mt-3 text-white/80">{a.text}</p>
            <div className="mt-6">
              <Link to="/agenda" className="btn-secondary w-full">
                Quiero evaluar mi caso <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
