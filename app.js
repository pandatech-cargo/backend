if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

const route = require("./routes");
const { errHandler } = require("./middlewares");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(route);
app.use(errHandler);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
