/* Configuración de LuStyle (opcional) */

/* 1) Citas compartidas entre dispositivos (Firebase). Mira LEEME.md.
      Mientras esté en null, las citas se guardan SOLO en este navegador (modo prueba).
      Ejemplo: window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...", appId: "..." }; */
window.FIREBASE_CONFIG = null;

/* 2) Horarios de atención (formato 24 h). Edita, agrega o quita horas. */
window.HORARIOS = ["09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"];

/* 3) Minutos mínimos de anticipación para agendar (no se puede reservar una hora que ya pasó). */
window.ANTICIPACION_MIN = 60;