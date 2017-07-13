const express = require('express');
const router = express.Router();
const Task = require('../controllers/task');

router.get('/', Task.getAllTask);
router.get('/:id', Task.getOneTask);
router.post('/', Task.createTask);
router.delete('/:id', Task.deleteTask);

module.exports = router;