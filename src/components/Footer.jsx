import { CONFIG } from "../constants/config";
import { copy } from "../constants/copy";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20" id="contacto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <div className="font-semibold">{CONFIG.brandName}</div>
            <div className="text-sm text-white/70">{CONFIG.brandSubtitle}</div>
            <div className="mt-3 text-sm text-white/70">{CONFIG.location}</div>
          </div>

          <div>
            <div className="text-sm text-white/70">Contacto</div>
            <div className="mt-2 grid gap-2 text-white/85">
              <a
                className="link"
                href={CONFIG.whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="link" href={`mailto:${CONFIG.email}`}>
                {CONFIG.email}
              </a>
              <a className="link" href="/agenda">
                Agenda
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm text-white/70">Legal</div>
            <div className="mt-2 grid gap-2 text-white/85">
              <a className="link" href="#">
                {copy.footer.privacy}
              </a>
              <a className="link" href="#">
                {copy.footer.legal}
              </a>
            </div>
            <p className="mt-4 text-xs text-white/55">
              {CONFIG.legalDisclaimer}
            </p>
          </div>
        </div>

        <div className="mt-10 text-xs text-white/50">
          © {new Date().getFullYear()} {CONFIG.brandName}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
