const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');

router.get("/index",controller.index)
router.post("/store",controller.store)
router.put("/update/:id_laporan",controller.update)
router.get("/destroy/:id_laporan",controller.destroy)

module.exports = router;