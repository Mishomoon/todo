const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
app.use(cors())
app.use(express.json())
const port = 3001

const openDb = () => {
  const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todo',
    password: 'Postgres2026',
    port: 5432
  })
  return pool
}

app.get('/', (req, res) => {
  const pool = openDb()
  pool.query('SELECT * FROM task', (error, result) => {
    if (error) {
      res.status(500).json({ error: error.message })
    }
    res.status(200).json(result.rows)
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})