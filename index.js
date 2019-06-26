const express = require("express");
const routes = require("./routes");
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5050;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

app.use('/static', express.static(path.join(__dirname, 'client/public')));

// Add route to react application
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "/client/build/index.html"));
    });
} else {
    app.use(express.static(path.join(__dirname, '/client/public')));
    app.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "/client/public/index.html"));
    });
}

app.listen(PORT);