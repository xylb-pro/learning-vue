const config = require('../config.json');

const Pool = require('pg').Pool;
const pool = new Pool({
  user: config.DB_USER,
  password: config.DB_PASS,
  host: 'localhost',
  port: config.DB_PORT,
  database: config.DB_NAME,
});

module.exports = pool;

// module.exports = DataBase;
