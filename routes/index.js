const express = require('express');
const recordController = require('../controllers/recordController');

const router = express.Router();

router.get('/', recordController.getRecords);
router.delete('/:id', recordController.deleteRecord);
router.patch('/:id', recordController.updateRecord);
router.post('/create', recordController.createRecord);
router.get('/category', recordController.getRecordsByCategory);

module.exports = router;
