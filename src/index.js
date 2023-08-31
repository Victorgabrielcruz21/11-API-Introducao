import dotenv from "dotenv";
import express from "express";
dotenv.config();

import roteadorLogin from "./routes/login.js";
import roteadorUsuario from "./routes/usuario.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(roteadorUsuario);
app.use(roteadorLogin);
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.json({
    message: "API para CRUD usuario: https://github.com/Victorgabrielcruz21",
  });
});
app.listen(port, () => {
  console.log(`Serviço escutando na porta:  ${port}`);
});
