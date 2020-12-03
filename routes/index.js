const express = require('express');
const recordController = require('../controllers/recordController');

const router = express.Router();

router.get('/', recordController.getRecords);
router.delete('/:id', recordController.deleteRecord);
router.patch('/:id', recordController.updateRecord);
router.post('/create', recordController.createRecord);
router.get('/update/:id', recordController.getUpdateRecord);
router.post('/filter', recordController.getFilterRecords);

module.exports = router;
