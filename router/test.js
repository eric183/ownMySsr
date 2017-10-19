const express = require('express');
const router = express.Router();

router.all('/', function(req, res, next) {
    res.json({ a: "测试代码" });
    // next();
})

module.exports = router;