const express = require('express')
const morgan = require('morgan')
// const helmet = require('helmet')
const cors = require('cors')

const middlewares = require('./middlewares')

const app = express()
app.use(morgan('common'))
// app.use(helmet())
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

app.listen(port, () => {
  console.log(`Server running: Listening at https://localhost:${port}`)
})