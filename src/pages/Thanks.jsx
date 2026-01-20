import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CONFIG } from "../constants/config";
import { WHATSAPP_LINK } from "../constants/links";
import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";

export default function Thanks() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 text-center section">
        <div className="max-w-2xl mx-auto card">
          <h1 className="text-3xl font-semibold md:text-4xl">
            Gracias — recibí tu consulta
          </h1>

          <p className="mt-4 text-white/80">
            Para coordinar la consulta (paga) y avanzar con el siguiente paso,
            escribime por WhatsApp o por email. Si tu caso tiene plazos, avisame
            en el primer mensaje.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <a
              className="btn-primary"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a className="btn-secondary" href={`mailto:${CONFIG.email}`}>
              <Mail size={18} />
              Email
            </a>

            <Link className="btn-secondary" to="/">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
