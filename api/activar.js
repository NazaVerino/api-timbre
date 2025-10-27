// Este código es para Vercel (Node.js/Express/Serverless Function)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Endpoint para que el usuario o aplicación envíe el comando
app.post('/api/activar', (req, res) => {
  const { duracion, motivo = "Manual" } = req.body;

  if (!duracion || duracion < 1 || duracion > 60) {
    return res.status(400).json({ status: "error", message: "Duración inválida (1-60 seg)" });
  }

  // Lógica para guardar en Base de Datos:
  // 1. Conéctate a tu DB (ej. Firebase, MongoDB, etc.)
  // 2. Guarda un registro: { comando: 'ACTIVAR', duracion: duracion, motivo: motivo, timestamp: Date.now(), ejecutado: false }
  
  // Esto es un placeholder
  console.log(`Comando: ACTIVAR, Duración: ${duracion}s, Motivo: ${motivo}`);

  res.status(200).json({ status: "success", message: "Comando enviado a la nube" });
});

// Endpoint para que el ESP32 consulte los comandos pendientes
app.get('/api/estado_dispositivo', (req, res) => {
    // Lógica para consultar en Base de Datos:
    // 1. Consulta el último estado guardado por el ESP32 (si el timbre está encendido o apagado)
    // 2. Consulta si hay un comando PENDIENTE (ejecutado: false)

    const estadoTimbreActual = "inactivo"; // Simulación: Leer de DB
    const comandoPendiente = null; // Simulación: Leer de DB

    if(comandoPendiente) {
         // Si hay un comando pendiente para el ESP32
         res.status(200).json({ 
             status: "success", 
             comando: "ACTIVAR", 
             duracion: comandoPendiente.duracion
         });
    } else {
        res.status(200).json({ 
            status: "success", 
            estado: estadoTimbreActual,
            comando: "NINGUNO"
        });
    }
});

module.exports = app;
