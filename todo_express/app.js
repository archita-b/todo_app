const express = require("express");
const app = express();

app.use(express.static("public"));

app.use(express.text());

app.post("/", (req, res) => {
  console.log("this is a post request", req.body);
});

app.delete("/", (req, res) => {
  console.log("delete", req.body);
});

app.listen(3001, () => {
  console.log("Express listening at port 3001");
});
