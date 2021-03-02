require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mysql = require('mysql')

const middlewares = require('./middlewares')

const app = express()
app.use(morgan('common'))
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: `Welcome Sailor! You're home!`})
})

app.get('/health', (req, res) => {
  res.json({message: `Our ship is healthy captain!`})
})

// specific error handler - not found
app.use(middlewares.notFound)

// general error handler for any type error that happens (e.g. if route found but there are some syntax error or logic error)
// eslint-disable-next-line no-unused-vars
app.use(middlewares.errorHandler)

const port = process.env.PORT || 1337

const {
  HOST,
  USERNAME,
  PASSWORD,
  DATABASE
} = process.env

app.listen(port, () => {
  // DON'T EDIT or MODIFY!!!!
  const connection = mysql.createConnection({
    host: HOST,
    user: USERNAME,
    password: PASSWORD,
    database: DATABASE
  })

  connection.connect();

  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
    console.log('Database is operating normally')
    console.log(`Server running: Listening at http://localhost:${port}`)
  });

  connection.end();
})