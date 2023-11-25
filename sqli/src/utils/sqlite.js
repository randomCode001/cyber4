const sqlite3 = require("sqlite3");

let db;

try {
  db = new sqlite3.Database("./important.db");
} catch (err) {
  console.log(err);
}

module.exports = db;
