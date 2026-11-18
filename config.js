/* Configuración de LuStyle (opcional) */

/* 1) Citas compartidas entre dispositivos (Firebase). Mira LEEME.md.
      Mientras esté en null, las citas se guardan SOLO en este navegador (modo prueba).
      Ejemplo: window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...", appId: "..." }; */
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAUn2QxwrYJv3f3b-R9ZAmRhv7hLcJPfj8",
  authDomain: "lustyle-e1fbe.firebaseapp.com",
  projectId: "lustyle-e1fbe",
  storageBucket: "lustyle-e1fbe.firebasestorage.app",
  messagingSenderId: "1046940877731",
  appId: "1:1046940877731:web:fb03effe4f509002a51016"
};

/* 2) Turnos y horarios (formato 24 h).
      Cada cita reserva un turno completo: mientras dure, esa franja no se ofrece a otras clientas.
      Ejemplo: una cita de manos a las 08:00 ocupa hasta las 11:30, y la siguiente clienta podrá empezar desde las 11:30. */
window.HORA_INICIO = "07:00";           // primera hora en que puede empezar una cita
window.HORA_ULTIMO_TURNO = "19:30";     // última hora en que puede empezar una cita
window.PASO_MIN = 30;                   // cada cuántos minutos puede empezar una cita
window.DURACION_MIN = 210;              // duración del turno: 3 h 30 min (manos, acrílico, polygel, etc.)
window.DURACION_PEDICURE_MIN = 120;     // duración del turno de pedicure (servicios de pies): 2 h

/* 3) Minutos mínimos de anticipación para agendar (no se puede reservar una hora que ya pasó). */
window.ANTICIPACION_MIN = 60;