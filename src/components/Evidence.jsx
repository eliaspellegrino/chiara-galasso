import { copy } from "../constants/copy";

export default function Evidence() {
  return (
    <section className="section">
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {copy.evidence.title}
        </h2>
        <p className="mt-4 text-white/80">{copy.evidence.subtitle}</p>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-4">
        {copy.evidence.cards.map((c) => (
          <div key={c.title} className="card">
            <div className="text-xl font-semibold">{c.title}</div>
            <p className="mt-2 text-white/80">{c.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-6">
        <div className="card">
          <div className="text-xl font-semibold">
            {copy.evidence.testimonialsTitle}
          </div>
          <div className="mt-5 grid gap-3">
            {copy.evidence.testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <div className="text-sm text-white/70">{t.name}</div>
                <p className="mt-2 text-white/85">“{t.text}”</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-white/55">
            {copy.evidence.testimonialsNote}
          </p>
        </div>

        <div className="card">
          <div className="text-xl font-semibold">
            Prueba social alternativa (si no querés testimonios)
          </div>
          <p className="mt-3 text-white/80">
            Podés reemplazar la sección anterior por “casos tipo” o “preguntas
            reales” sin datos identificables. El objetivo es generar confianza
            sin comprometer confidencialidad.
          </p>
          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/70">Ejemplo</div>
            <p className="mt-2 text-white/85">
              “Te explico en simple qué opciones existen, qué riesgos son
              relevantes y cuál es el próximo paso más razonable para tu caso.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
