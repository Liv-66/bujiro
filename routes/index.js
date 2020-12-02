const express = require('express');
const recordController = require('../controllers/recordController');

const router = express.Router();

router.get('/', recordController.getRecords);
router.post('/create', recordController.createRecord);

module.exports = router;
