const express = require('express'),
  router = express.Router(),
  path = require("path"),
  stringManager = require(path.resolve("./components/stringCount/stringManager"));

/* GET max no: of strings. */
router.get('/', async function (req, res) {
  try {
    let response = await stringManager.getReccuringStrings(req.query);
    res.send(response);
  } catch (error) {
    res.status(error.status || 500).send(error);
  }
});

module.exports = router;
