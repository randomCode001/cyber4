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
  const { email, password } = req.body;

  try {
    const {rows} = await pool.query(
      ` SELECT *
        FROM users LEFT JOIN roles ON
        users.role_id = roles.id
        WHERE email = '${email}' AND password = '${password}'`
    );


    if (rows.length === 0) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
        data: rows,
      });
    }

    if(rows[0]?.name === 'ROLE_ADMIN') {
      return res.status(200).json({
        success: true,
        message: "Login successful",
        data: rows,
        flag: "asfasfsa"
      });
    }

    return res.status(200).json({
      success: false,
      message: "Not enough privileges",
      data: rows,
    });

  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

app.listen(port, () => {
  console.log(`SQLI challenge listening on port ${port}`);
});
