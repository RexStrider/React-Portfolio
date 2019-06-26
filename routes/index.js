const express = require("express");
const apiRoutes = require("./api");
const path = require('path');

const router = express.Router();


router.use("/api", apiRoutes);

// Add route to react application
if (process.env.NODE_ENV === "production") {
    router.use(express.static("client/build"));
    router.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "/client/build/index.html"));
    });
} else {
    router.use(express.static(path.join(__dirname, '/client/public')));
    router.get("/*", function(req, res) {
      res.sendFile(path.join(__dirname, "/client/public/index.html"));
    });
}

module.exports = router;