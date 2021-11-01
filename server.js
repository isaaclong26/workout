const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./controller")
const PORT = process.env.PORT || 3001;
const path = require("path")

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.set('views', path.join(__dirname, '/public'));

app.use(routes)

mongoose.connect(process.env.MONGODB_URI , { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
