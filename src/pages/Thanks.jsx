import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Thanks() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section pt-32 text-center">
        <div className="max-w-2xl mx-auto card">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Gracias por agendar tu consulta
          </h1>
          <p className="mt-4 text-white/80">
            En breve vas a recibir la confirmación con los detalles. Si
            necesitás agregar información antes, respondé al email de
            confirmación.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link className="btn-primary" to="/">
              Volver al inicio
            </Link>
            <Link className="btn-secondary" to="/agenda">
              Ver agenda
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
