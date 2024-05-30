class TaskService {
  constructor() {
    this.tasks = [];
  }

  async uploadTask(taskData) {
    this.tasks.push(taskData);
    console.log('Task data stored:', taskData);
  }

  getAllTasks() {
    return this.tasks;
  }
}

module.exports = TaskService;
