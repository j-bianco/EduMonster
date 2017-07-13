var express = require('express');
var router = express.Router();

var eduController = require("../controllers/edu-controller.js")

router.get('/', eduController.index);

router.post('/', eduController.create);

module.exports = router;
