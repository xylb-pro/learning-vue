const express = require('express');
const cors = require('cors');

const todosRouter = require('./routes/todos.routes');

const app = express();
const PORT = 5000;

app.use(express.json());

app.use(cors());

app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  );

  // Request headers you wish to allow
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-Requested-With,content-type,Authorization'
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.use('/todos', todosRouter);

app.get('*', (req, res) => {
  res.send('Route not found');
});

app.listen(PORT, () =>
  console.log(`Server started on port:${PORT},\nip: 192.168.31.101:${PORT}`)
);
