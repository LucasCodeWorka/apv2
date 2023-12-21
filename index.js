const express = require('express');
const { Pool } = require('pg');
const pool1 = require("./db");
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;
 
 
const pool = new Pool({
  user: 'liebe_ro',
  host: 'dbexp.vcenter.com.br',
  database: 'liebe',
  password: '%eTS$33qPO8XZNMc',
  port: 20168
});


 
app.use(cors());
app.use(express.json());

 
app.get('/dados', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM INADIMPLENCIA LIMIT 100');
    const data = result.rows;
    client.release();
    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});
 
 




 








