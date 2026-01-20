import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { InlineWidget } from "react-calendly";
import { CONFIG } from "../constants/config";
import { ArrowRight, Mail } from "lucide-react";

export default function Agenda() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section pt-32" id="agenda">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Agendar consulta
          </h1>
          <p className="mt-4 text-white/80">
            Elegí un horario disponible. Si preferís, también podés escribir por
            WhatsApp o por email.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="btn-secondary"
              href={CONFIG.whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp <ArrowRight size={18} />
            </a>
            <a className="btn-secondary" href={`mailto:${CONFIG.email}`}>
              Email <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-10 card p-3 md:p-6">
          {/* Calendly inline */}
          <InlineWidget url={CONFIG.calendlyUrl} styles={{ height: "820px" }} />
        </div>

        <p className="mt-6 text-sm text-white/60 max-w-3xl">
          {CONFIG.legalDisclaimer}
        </p>
      </section>

      <Footer />
    </div>
  );
}
