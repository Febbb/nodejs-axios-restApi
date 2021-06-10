const express = require('express');
const router = express.Router();
const apiController = require('../controller/apiController');

router.get("/index",apiController.index);
router.post("/store",apiController.store);
router.put("/update",apiController.update);
router.delete("/destroy",apiController.destroy);

module.exports = router;