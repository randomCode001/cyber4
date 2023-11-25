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

const db = require("./utils/sqlite");

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  console.log({ email, password });

  try {
    db.all(
      ` SELECT *, roles.name as role_name FROM users
        LEFT JOIN roles ON users.role_id = roles.id
        WHERE email = '${email}' AND password = '${password}'`,
      (error, rows) => {
        if (error) {
          console.log(error);
          return res.status(500).json({
            success: false,
            message: error.message,
          });
        }

        if (rows.length > 0) {
          if (rows[0].role_name === "ROLE_ADMIN")
            return res.status(200).json({
              success: true,
              token: "1234567890",
              message: rows,
            });
          else
            return res.status(401).json({
              success: false,
              message: "Invalid credentials",
            });
        } else {
          return res.status(401).json({
            success: false,
            message: "Invalid credentials",
          });
        }
      }
    );
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
