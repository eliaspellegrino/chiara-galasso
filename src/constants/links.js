import { CONFIG } from "./config";

export const WHATSAPP_MESSAGE =
  "Hola Chiara, quiero consultar por una consulta legal paga. ¿Podés indicarme el valor y disponibilidad?";

export const WHATSAPP_LINK = `${CONFIG.whatsappUrl}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;
