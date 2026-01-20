import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { copy } from "../constants/copy";
import { CONFIG } from "../constants/config";
import { WHATSAPP_LINK } from "../constants/links";
import { Mail, Menu, MessageCircle, X } from "lucide-react";
import logo from "../assets/logo-chiara-galasso.jpeg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();
  const isHome = loc.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="border-b border-white/10 bg-gradient-to-b from-black/55 to-black/20 backdrop-blur">
        <div className="flex items-center justify-between max-w-6xl px-6 py-5 mx-auto md:py-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Chiara Galasso Abogada UBA"
              className="object-contain w-auto h-16 sm:h-18 md:h-20 drop-shadow-lg"
            />
          </Link>

          <nav className="items-center hidden gap-6 text-sm text-white/80 md:flex">
            {isHome &&
              copy.nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="transition hover:text-white"
                >
                  {l.label}
                </a>
              ))}

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-4 py-2.5"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>

            <a
              className="btn-secondary px-4 py-2.5"
              href={`mailto:${CONFIG.email}`}
            >
              <Mail size={18} />
              Email
            </a>
          </nav>

          <button
            className="px-3 py-2 btn-secondary md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-black/25 md:hidden">
            <div className="flex flex-col max-w-6xl gap-3 px-6 py-4 mx-auto">
              {isHome &&
                copy.nav.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    className="py-2 text-white/85 hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ))}

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="w-full btn-primary"
                onClick={() => setOpen(false)}
              >
                <MessageCircle size={18} />
                Consultar por WhatsApp
              </a>

              <a
                className="w-full btn-secondary"
                href={`mailto:${CONFIG.email}`}
                onClick={() => setOpen(false)}
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
