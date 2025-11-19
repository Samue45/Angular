const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor Node funcionando correctamente");
});

// Ejemplo de API GET
app.get("/api/saludo", (req, res) => {
  res.json({ mensaje: "Hola desde el backend con Node!" });
});

// Arrancar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

