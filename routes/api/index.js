const express = require("express");

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'hit the api route' });
});

module.exports = router;