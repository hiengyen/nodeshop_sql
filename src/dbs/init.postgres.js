const postgres = require('postgres')
require('dotenv').config()

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
})

async function getPgVersion() {
  const result = await sql`select version()`
  console.log(result)
}

class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance
    }

    // Perform initialization tasks here...
    this.log = getPgVersion()

    Database.instance = this
  }
  //connect to db
  connect(sql) {
    return this.log.connect(sql)
  }
}

const instancePg = new Database()
module.exports = instancePg
