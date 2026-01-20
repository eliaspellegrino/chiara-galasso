import { useMemo, useState } from "react";
import { copy } from "../constants/copy";
import { Download, X } from "lucide-react";

export default function LeadMagnet() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: copy.leadMagnet.form.topics[0],
  });
  const canSubmit = useMemo(
    () => form.name.trim() && form.email.trim(),
    [form],
  );

  function onSubmit(e) {
    e.preventDefault();
    // Placeholder: acá integrás tu email marketing / backend
    // Por ahora, simula descarga:
    alert(
      "¡Listo! Te enviamos la guía (placeholder). Integrar con tu sistema de email.",
    );
    setOpen(false);
  }

  return (
    <section className="section" id="recursos">
      <div className="card">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              {copy.leadMagnet.title}
            </h2>
            <p className="mt-4 text-white/80">{copy.leadMagnet.subtitle}</p>

            <ul className="mt-6 space-y-2 text-white/85">
              {copy.leadMagnet.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-white/70" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <button className="btn-primary" onClick={() => setOpen(true)}>
                <Download size={18} />
                {copy.leadMagnet.cta}
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/70">Tip</div>
            <div className="mt-2 text-lg font-semibold">
              Llegá con orden = consulta más efectiva
            </div>
            <p className="mt-3 text-white/80">
              La guía te ayuda a reunir documentación y fechas clave para
              ahorrar tiempo y evitar omisiones.
            </p>
            <p className="mt-4 text-sm text-white/65">
              Legal-friendly: material orientativo, no reemplaza asesoramiento.
            </p>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center px-6">
          <div className="w-full max-w-lg card relative">
            <button
              className="absolute top-4 right-4 btn-secondary px-3 py-2"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>

            <h3 className="text-2xl font-semibold">
              {copy.leadMagnet.form.title}
            </h3>
            <p className="mt-2 text-white/75">{copy.leadMagnet.form.note}</p>

            <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
              <input
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                placeholder={copy.leadMagnet.form.name}
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
              />
              <input
                type="email"
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                placeholder={copy.leadMagnet.form.email}
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
              />
              <select
                className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-white/25"
                value={form.topic}
                onChange={(e) =>
                  setForm((f) => ({ ...f, topic: e.target.value }))
                }
              >
                {copy.leadMagnet.form.topics.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>

              <button
                className="btn-primary mt-2"
                disabled={!canSubmit}
                style={{ opacity: canSubmit ? 1 : 0.6 }}
              >
                {copy.leadMagnet.form.submit}
              </button>
            </form>

            <p className="mt-4 text-xs text-white/55">
              *Placeholder: integrá acá tu proveedor (Mailchimp, Brevo,
              ActiveCampaign, etc.) o un endpoint propio.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
