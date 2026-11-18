// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUn2QxwrYJv3f3b-R9ZAmRhv7hLcJPfj8",
  authDomain: "lustyle-e1fbe.firebaseapp.com",
  projectId: "lustyle-e1fbe",
  storageBucket: "lustyle-e1fbe.firebasestorage.app",
  messagingSenderId: "1046940877731",
  appId: "1:1046940877731:web:fb03effe4f509002a51016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

/* 2) Turnos y horarios (formato 24 h).
      Cada cita reserva un turno completo: mientras dure, esa franja no se ofrece a otras clientas.
      Ejemplo: una cita de manos a las 08:00 ocupa hasta las 11:30, y la siguiente clienta podrá empezar desde las 11:30. */
window.HORA_INICIO = "07:00";           // primera hora en que puede empezar una cita
window.HORA_ULTIMO_TURNO = "19:00";     // última hora en que puede empezar una cita
window.PASO_MIN = 30;                   // cada cuántos minutos puede empezar una cita
window.DURACION_MIN = 210;              // duración del turno: 3 h 30 min (manos, acrílico, polygel, etc.)
window.DURACION_PEDICURE_MIN = 120;     // duración del turno de pedicure (servicios de pies): 2 h

/* 3) Minutos mínimos de anticipación para agendar (no se puede reservar una hora que ya pasó). */
window.ANTICIPACION_MIN = 60;