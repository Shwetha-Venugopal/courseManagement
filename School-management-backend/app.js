const express = require('express');
const cors = require('cors');
const verifyToken = require('./middleware/jwt');
const userRoutes = require('./services/userList');
const teacherRoutes = require('./services/techerList');
const studentRoutes = require('./services/studentList');
const courseRoutes = require('./services/course');
const bodyParser = require('body-parser');
const taskRouter=require('./services/taskRouter')

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/tasks', taskRouter);
app.use('/api/login', userRoutes);
// app.use(verifyToken);
app.use('/api/userList', userRoutes);
app.use('/api', userRoutes);
app.use('/api/studentList', studentRoutes);
app.use('/api/teacherList', teacherRoutes);
app.use('/api/courseList', courseRoutes);

app.listen(8000, () => console.log('Server running on port 8000'));
