const express = require('express');

const ExtCtrl = require('../controllers/ext-ctrl');

const router = express.Router();

 router.get('/exts', ExtCtrl.getExtList)
//router.get('/exts', console.log("Hello"));

module.exports = router;
