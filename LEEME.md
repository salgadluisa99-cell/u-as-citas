# LuStyle · Guía rápida

## Archivos (súbelos TODOS juntos)
index.html (página de clientas) · login.html · admin.html (panel) · config.js (configuración)

## 1) Ver las citas desde cualquier dispositivo (Firebase, plan gratuito)
Mientras `FIREBASE_CONFIG = null` en config.js, las citas se guardan SOLO en el navegador donde se agendan
(modo prueba). Para que la clienta agende desde su celular y tú las veas en tu panel:

1. https://console.firebase.google.com > Crear proyecto (ej. "lustyle").
2. Compilación > Firestore Database > Crear base de datos (modo producción).
3. Compilación > Authentication > Comenzar > Correo/contraseña > Habilitar.
   Pestaña "Users" > Agregar usuario: TU correo y una contraseña (con eso entras al panel).
4. Engranaje > Configuración del proyecto > Tus apps > </> Web > registra la app y copia `firebaseConfig`.
   Pégala en config.js: `window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...", appId: "..." };`
5. Firestore > Reglas > pega esto (cambia TU_CORREO) y publica:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    function esAdmin() {
      return request.auth != null && request.auth.token.email == "TU_CORREO@gmail.com";
    }
    match /citas/{id} {
      allow create: if request.resource.data.estado == "pendiente";
      allow read, update, delete: if esAdmin();
    }
    // Horas ocupadas (solo fecha y hora, sin datos personales). Evita que dos clientas tomen la misma hora.
    match /ocupados/{slot} {
      allow read: if true;
      allow create: if slot == request.resource.data.date + "_" + request.resource.data.time;
      allow delete: if esAdmin();
    }
  }
}
```
6. Authentication > Settings > Dominios autorizados: agrega el dominio donde publiques la página.

## 2) Horarios y turnos
Cada cita reserva un **turno completo**: manos = 3 h 30 min, pies (pedicure) = 2 h.
Si una clienta agenda a las 7:00 AM (manos), la siguiente cita de manos puede empezar desde las 10:30 AM.
Las horas de inicio salen cada 30 min entre `HORA_INICIO` (7:00 AM) y `HORA_ULTIMO_TURNO` (19:00 = 7:00 PM).
En config.js puedes cambiar: `HORA_INICIO`, `HORA_ULTIMO_TURNO`, `PASO_MIN`, `DURACION_MIN`, `DURACION_PEDICURE_MIN`, `ANTICIPACION_MIN`.
- Solo se muestran las horas libres (las que se cruzan con otro turno no aparecen).
- Las horas que ya pasaron (o están a menos de ANTICIPACION_MIN minutos) no se muestran.
- Si cancelas una cita, el turno queda bloqueado; el panel te pregunta si quieres liberarlo.
- Las citas hechas antes de este cambio solo bloquean su hora de inicio (30 min).
- Las reglas de Firestore no cambian.

## 3) WhatsApp
Solo tú escribes a la clienta: al confirmar o cancelar en el panel se abre WhatsApp con el mensaje listo; tú presionas enviar.

## Modo prueba
Usuario `admin` · contraseña `LuStyle2026` (en el código; cámbiala o usa Firebase).

## 4) Días y horas no disponibles (panel de administradora)
En el panel hay una tarjeta "Días y horas no disponibles": elige la fecha y marca "Todo el día" o "Solo unas horas" (desde / hasta) y pulsa "Marcar no disponible".
- Esas horas dejan de ofrecerse a las clientas (también las que harían que un turno se cruce con ellas).
- Las citas ya agendadas en ese horario NO se cancelan: el panel te avisa para que decidas tú.
- Para volver a abrir el horario, pulsa la × junto al bloqueo.
- No requiere cambiar las reglas de Firestore.