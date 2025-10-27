let ultimoComando = { comando: "ninguno", duracion: 0 };

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { comando, duracion } = req.body;
      ultimoComando = { comando, duracion };
      return res.status(200).json({ ok: true, recibido: ultimoComando });
    } catch (error) {
      return res.status(400).json({ ok: false, error: "JSON inválido" });
    }
  }

  if (req.method === "GET") {
    return res.status(200).json(ultimoComando);
  }

  return res.status(405).json({ ok: false, error: "Método no permitido" });
}
