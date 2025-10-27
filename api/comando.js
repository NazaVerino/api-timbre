// api/comando.js
let ultimoComando = { comando: "ninguno", duracion: 0 };

export default function handler(req, res) {
  if (req.method === "POST") {
    // Guardar nuevo comando
    const { comando, duracion } = req.body;
    ultimoComando = { comando, duracion };
    console.log("Nuevo comando recibido:", ultimoComando);
    return res.status(200).json({ ok: true, recibido: ultimoComando });
  }

  if (req.method === "GET") {
    // El ESP8266 consulta este endpoint periódicamente
    return res.status(200).json(ultimoComando);
  }

  res.status(405).end();
}
