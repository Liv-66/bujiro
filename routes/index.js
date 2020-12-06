const express = require('express');
const recordController = require('../controllers/recordController');
const userController = require('../controllers/userController');

const router = express.Router();


router.get('/users/login', userController.getLogin);
router.get('/users/signup', userController.getSignup);
router.post('/users/signup', userController.createUser);
router.post('/users/login', userController.login);
router.get('/users/logout', userController.logout);

router.use(userController.isLoggedIn);
router.get('/', recordController.getRecords);
router.delete('/:id', recordController.deleteRecord);
router.patch('/:id', recordController.updateRecord);
router.post('/create', recordController.createRecord);
router.get('/update/:id', recordController.getUpdateRecord);
router.post('/filter', recordController.getFilterRecords);

module.exports = router;
