const express=require('express')
const {courseAllList,saveStudentTeacher,getStudentListByTeacherAssigned,getOnlyStudentListByTeacheName,getStudentDetailsByUserNameandRegulized}=require('../Controller/courses')

const router=express.Router()


router.get('/',courseAllList)
router.get('/course',getStudentListByTeacherAssigned)
router.get('/:id',getOnlyStudentListByTeacheName)
router.get('/regulized/:id',getStudentDetailsByUserNameandRegulized)


router.post('/',saveStudentTeacher)


module.exports=router