import { selectUsuarios } from "./bd.js";
// Requisição do pacote do express
import express from "express";
// importe o dotenv
import dotenv from "dotenv";
//chame a função de configuração do dotenv        
dotenv.config();       
// Instancia o Express             
const app = express();
// Define a porta              
const port = 3000;                  

app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "Víctor Gabriel Cruz Pereira",      
  });
  console.log("Rota / solicitada");
});



app.get("/usuarios", async (req, res) => {
  console.log("Rota GET/usuarios solicitada");
  try {
    const usuarios = await selectUsuarios();
    res.json(usuarios);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message || "Erro!" });
  }
});


app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});