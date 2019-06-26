const express = require("express");
const apiRoutes = require("./api");
const path = require('path');

const router = express.Router();


router.use("/api", apiRoutes);

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

module.exports = router;