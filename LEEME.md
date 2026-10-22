# LuStyle · Cómo activar las citas compartidas (Firebase, plan gratuito)

Mientras `config.js` tenga `null`, todo funciona en modo PRUEBA: las citas se guardan
solo en el navegador donde se agendan. Para que la clienta agende desde su celular y tú veas la cita
(con su imagen) en tu panel desde el tuyo, activa Firebase:

1. Entra a https://console.firebase.google.com y crea un proyecto (ej. "lustyle").
2. Compilación > Firestore Database > Crear base de datos (modo producción).
3. Compilación > Authentication > Comenzar > Correo/contraseña > Habilitar.
   Luego pestaña "Users" > Agregar usuario: TU correo y una contraseña (así entras al panel).
4. Configuración del proyecto (engranaje) > Tus apps > </> Web > registra la app y copia `firebaseConfig`.
   Pégala en `config.js` en lugar de `null`.
5. Firestore > Reglas > pega esto (cambia TU_CORREO) y Publica:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /citas/{id} {
      allow create: if request.resource.size < 900000;
      allow read, update, delete: if request.auth != null
        && request.auth.token.email == "TU_CORREO@gmail.com";
    }
  }
}
```
6. Authentication > Settings > Dominios autorizados: agrega el dominio donde publiques la página.
7. Sube TODOS los archivos (index.html, admin.html, login.html, config.js) a tu hosting (GitHub Pages, Netlify, Firebase Hosting…).

Modo prueba: usuario `admin`, contraseña `LuStyle2026` (cámbiala en el código de login).
Las fotos se comprimen automáticamente (máx. 900 px) antes de guardarse.
