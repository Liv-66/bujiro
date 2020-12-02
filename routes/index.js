const express = require('express');
const recordController = require('../controllers/recordController');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('homepage');
});
router.post('/create', recordController.createRecord);

module.exports = router;
