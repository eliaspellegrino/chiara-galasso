import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { copy } from "../constants/copy";
import { CONFIG } from "../constants/config";
import { Calendar, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  const isHome = loc.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-black/25 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            {/* Placeholder logo: reemplazar por imagen */}
            <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <span className="text-white/80 font-semibold">CG</span>
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">
                {CONFIG.brandName}
              </div>
              <div className="text-xs text-white/70">
                {CONFIG.brandSubtitle}
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {isHome &&
              copy.nav.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="hover:text-white transition"
                >
                  {l.label}
                </a>
              ))}
            <Link to="/agenda" className="btn-primary py-2.5 px-4">
              <Calendar size={18} />
              Agendar consulta
            </Link>
          </nav>

          <button
            className="md:hidden btn-secondary px-3 py-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-white/10 bg-black/25">
            <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-3">
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
              <Link
                to="/agenda"
                className="btn-primary w-full"
                onClick={() => setOpen(false)}
              >
                <Calendar size={18} />
                Agendar consulta
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
