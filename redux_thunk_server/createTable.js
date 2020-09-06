const connectionString = "postgres://gprdgmci:1h92OZ3Kom7I1_6SlS2etrxs0S76o7zV@lallah.db.elephantsql.com:5432/gprdgmci";
const { Pool } = require('pg')
const pool = new Pool ({
    connectionString: connectionString,
})

pool.query('CREATE TABLE posts (id SERIAL PRIMARY KEY, content varchar(255))')