const fs = require("fs");
const { Pool } = require("pg");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").load();
}

const pool = new Pool();

exports.up = () => {
  return pool.query(
    fs.readFileSync(process.cwd() + "/db/InitialSchema.sql").toString()
  );
};

exports.down = next => {
  next();
};
