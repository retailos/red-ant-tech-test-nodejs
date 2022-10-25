const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", function (req, res) {
  const name = req.query.name || 'Potential Future Ant';
  res.json({ message: `Hello, ${name}!` });
});

app.listen(8080, function () {
  console.log("App listening on port 8080!");
});
