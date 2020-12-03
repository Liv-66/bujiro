const express = require('express');
const recordController = require('../controllers/recordController');

const router = express.Router();

router.get('/', recordController.getRecords);
router.delete('/:id', recordController.deleteRecord);
router.patch('/:id', recordController.updateRecord);
router.post('/create', recordController.createRecord);
// router.get('/test', recordController.todalAmount);

module.exports = router;
