
const { Pool } = require('pg')


    const openDb = () => {
  console.log('DB_HOST:', process.env.DB_HOST)
  console.log('DB_NAME:', process.env.DB_NAME)
  const pool = new Pool({
  })
  return pool
}

const query = (sql, values = []) => {
  return new Promise(async (resolve, reject) => {
    try {
      const pool = openDb()
      const result = await pool.query(sql, values)
      resolve(result)
    } catch (error) {
      reject(error.message)
    }
  })
}

module.exports = {
  query
}