const express = require("express");
const cors = require("cors");
const { discos } = require("./discos");

const app = express();
const puerto = 2006;

app.use(cors());

app.get("/", (req, res) => {
  res.json(discos);
});

app.get("/:id", (req, res) => {
  const disco = discos.find(d => d.id === parseInt(req.params.id));
  if (!disco) {
    return res.status(404).send("Disco no encontrado");
  }
  res.json(disco);
});

app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${puerto}`);
});
