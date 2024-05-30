const express=require('express')
const {getStudentListByFirstName,getAllStudentList,saveStudentList,updateStudentList,deleteStudentList,getStudentListByCourseName,getStudentNameForAttendence, updatePasswordStudent}=require('../Controller/student-details')

const router=express.Router()

router.get('/',getAllStudentList)
router.post('/', saveStudentList);
router.delete('/:id', deleteStudentList);
router.put('/confirm/confirmPassword', updatePasswordStudent);
router.get('/name/:name', getStudentListByFirstName);
router.put('/requlize/:name', getStudentNameForAttendence);
router.put('/:id', updateStudentList);

router.get('/:id', getStudentListByCourseName);


module.exports=router