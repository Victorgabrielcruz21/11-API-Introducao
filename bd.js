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
export { selectUsuarios };