const express = require('express');
const router = express.Router();

const { teacherAllList, saveTeacherList, deleteList, updateList,getteacherListByCourseName} = require('../Controller/teacherList'); // Adjust the path if necessary

router.get('/', teacherAllList);
router.post('/', saveTeacherList);
router.delete('/:id', deleteList);
router.put('/:id', updateList);
router.get('/:id', getteacherListByCourseName);


module.exports = router;
