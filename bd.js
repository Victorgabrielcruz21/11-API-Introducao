
//import  do pacote do PostgreSQL para o Node.js
import pkg from "pg";
const { Pool } = pkg;
//função de conexão utilizando a URL provida pela Neon.tech disponível no arquivo .env
async function connect() {
  const pool = new Pool({
    connectionString: process.env.URL_BD,
  });
  return pool.connect();
}
//função para recuperar todos os “usuários” cadastrados no banco
async function selectUsuarios() {
  const client = await connect();
  const res = await client.query("SELECT * FROM usuario");
  return res.rows;
}
//exportamos a função selectUsuarios para usá-la no em outros arquivos do projeto
async function selectUsuario(id) {
  const client = await connect();
  const query = "SELECT * FROM usuario WHERE id = $1";
  const usuario = [id];
  const res = await client.query(query, usuario);
  return res.rows;
}
//bd.js
async function insertUsuario(data) {
  const client = await connect();
  const query = "INSERT INTO usuario (nome,senha,email) VALUES ($1,$2,$3) ";
  const usuario = [data.nome, data.senha, data.email];
  await client.query(query, usuario);
}
//bd.js
async function deleteUsuario(id) {
  const client = await connect();
  const query = "DELETE FROM usuario WHERE id = $1";
  await client.query(query, [id]);
}
//bd.js
async function updateUsuario(data) {
  const client = await connect();
  const query =
    "UPDATE usuario SET nome = $1, email = $2, senha = $3 WHERE id = $4";
  const usuario = [data.nome, data.email, data.senha, data.id];
  await client.query(query, usuario);
}
//bd.js
export { selectUsuarios, selectUsuario, insertUsuario, deleteUsuario, updateUsuario };