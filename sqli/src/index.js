const express = require("express");
const hbs = require("hbs");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.set("view engine", "hbs");
app.set("views", "src/views");

app.get("/", (req, res) => {
  res.render("login");
});

const pool = require("./utils/pg");

app.post("/", async (req, res) => {
  // Added async keyword here
  const { email, password } = req.body;

  try {
    const result = await pool.query(
      `SELECT * FROM "user" WHERE email = '${email}' AND password = '${password}'`
    );
    if (result.rows.length > 0) {
      return res.status(200).json({
        success: true,
        token: "1234567890",
      });
    } else {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials",
        });
    }
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`SQLI challenge listening on port ${port}`);
});
