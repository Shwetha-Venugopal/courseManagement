// taskRouter.js
const express = require('express');
const multer = require('multer');
const TaskController = require('../Controller/taskController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Adjust destination as needed

const taskController = new TaskController();

router.post('/upload', upload.single('file'), (req, res) => taskController.uploadTask(req, res));
router.get('/', (req, res) => taskController.getAllTasks(req, res)); // Route to get all tasks

module.exports = router;
