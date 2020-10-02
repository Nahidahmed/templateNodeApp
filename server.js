const express = require("express");
const path = require("path");
const app = express();
const port = 3030;
const routes = require("./routes");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static(path.join(__dirname, "./static")));
app.use("/", routes());

app.listen(port, () => {
  console.log(`Express server listening on port: ${port}`);
});
