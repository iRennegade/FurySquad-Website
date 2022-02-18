const express = require("express");
const app = express();
const routes = require("./routes/router");
require("./database");

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json());
app.use("/", routes);

app.listen(9000, () => {
  console.log("[ Express ] - Backend Started");
});