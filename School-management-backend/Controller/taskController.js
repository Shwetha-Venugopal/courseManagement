// taskController.js
const TaskService = require('../services/taskService');

class TaskController {
  constructor() {
    this.taskService = new TaskService();
  }

  async uploadTask(req, res) {
    try {
      const { title, description, dueDate, teacher } = req.body;
      const file = req.file;

      if (!title || !description || !dueDate || !teacher || !file) {
        return res.status(400).json({ message: 'All fields are required' });
      }

      // Call service method to handle task data
      await this.taskService.uploadTask({
        title,
        description,
        dueDate,
        teacher,
        filePath: file.path // Store the file path
      });

      res.status(200).json({ message: 'Task uploaded successfully' });
    } catch (error) {
      console.error('Error uploading task:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  getAllTasks(req, res) {
    try {
      const tasks = this.taskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      console.error('Error retrieving tasks:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}

module.exports = TaskController;
