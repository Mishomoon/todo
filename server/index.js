const express = require('express')
const cors = require('cors')
const { todoRouter } = require('./routes/todo.js')
const { openDb } = require('./helpers/db.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', todoRouter)

const pool = openDb()

async function initDb() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS task (
        id SERIAL PRIMARY KEY,
        description VARCHAR(255) NOT NULL
      )
    `)
    console.log("Task table ready")
  } catch (err) {
    console.error("Database error:", err)
  }
}

initDb()

const port = process.env.PORT || 10000

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})