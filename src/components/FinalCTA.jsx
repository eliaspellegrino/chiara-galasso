import { copy } from "../constants/copy";
import { CONFIG } from "../constants/config";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="card text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {copy.finalCta.title}
        </h2>
        <p className="mt-4 text-white/80">{copy.finalCta.subtitle}</p>

        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <Link to="/agenda" className="btn-primary">
            {copy.finalCta.primary} <ArrowRight size={18} />
          </Link>
          <a
            className="btn-secondary"
            href={CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.finalCta.secondary}
          </a>
        </div>

        <p className="mt-6 text-xs text-white/55">{CONFIG.legalDisclaimer}</p>
      </div>
    </section>
  );
}
