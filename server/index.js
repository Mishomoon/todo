
const express = require('express')
const cors = require('cors')
const { todoRouter } = require('./routes/todo.js')

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', todoRouter)


await pool.query(`
CREATE TABLE IF NOT EXISTS task (
  id SERIAL PRIMARY KEY,
  description VARCHAR(255) NOT NULL
)
`);
const port = process.env.PORT

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})