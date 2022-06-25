const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

router.get('/example1', notificationController.example1);
router.get('/example2', notificationController.example2); 

module.exports = router;
