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
      allow create: if request.resource.size < 900000 && request.resource.data.estado == "pendiente";
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

## 2) Horarios
En config.js edita `window.HORARIOS` (formato 24 h) y `window.ANTICIPACION_MIN`.
- Una hora ocupada aparece deshabilitada para las demás clientas.
- Las horas que ya pasaron (o están a menos de ANTICIPACION_MIN minutos) no se muestran.
- Si cancelas o eliminas una cita, esa hora queda libre otra vez.

## 3) WhatsApp
Solo tú escribes a la clienta: al confirmar o cancelar en el panel se abre WhatsApp con el mensaje listo; tú presionas enviar.

## Modo prueba
Usuario `admin` · contraseña `LuStyle2026` (en el código; cámbiala o usa Firebase).

