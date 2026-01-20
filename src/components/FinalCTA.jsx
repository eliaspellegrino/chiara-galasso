import { copy } from "../constants/copy";
import { CONFIG } from "../constants/config";
import { WHATSAPP_LINK } from "../constants/links";
import { ArrowRight, Mail } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="section">
      <div className="text-center card">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {copy.finalCta.title}
        </h2>
        <p className="mt-4 text-white/80">{copy.finalCta.subtitle}</p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Consultar por WhatsApp <ArrowRight size={18} />
          </a>

          <a className="btn-secondary" href={`mailto:${CONFIG.email}`}>
            Escribirme por email <Mail size={18} />
          </a>
        </div>

        <p className="mt-6 text-xs text-white/55">{CONFIG.legalDisclaimer}</p>
      </div>
    </section>
  );
}
