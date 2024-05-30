
const students=require('../Controller/student-details').students
let courseList=[
    {'courseName':'Front end', id:1},
    {'courseName':'Back end', id:2},
    {'courseName':'ML', id:3},
    {'courseName':'AI', id:4},
    {'courseName':'Deep Learning', id:5},
    {'courseName':'Java', id:6},
    {'courseName':'Cpp', id:7},


]

let saveStudentTeacherList=[]




let courseAllList=(req,res,next)=>{
    if(req.url!=='/'){
        const err=new Error('Not Found')
        err.status=404
        return res.send('Not Found')
    }
    res.status=200
    res.send(courseList)
}


let saveStudentTeacher=(req,res,next)=>{
    if(!req.url){
        return res.status(404).send({msg:'not Found'})
    }
    req.body.id=saveStudentTeacherList.length+1
    saveStudentTeacherList.push(req.body)
    console.log(saveStudentTeacherList)
    res.status(200).send({msg:'Saved Successfully'})
}


let getStudentListByTeacherAssigned=(req,res,next)=>{
    return res.status(200).send(saveStudentTeacherList)
}

let getOnlyStudentListByTeacheName=(req,res,next)=>{
    const teacherName = req.params.id;
    console.log(`Requested teacher name: ${teacherName}`);
    const filteredCourses = saveStudentTeacherList.filter(course => course.teacher === teacherName);
    console.log('Filtered courses:', filteredCourses);
    const mergedList = filteredCourses.map(course => {
        const studentDetail = students.find(student => student.firstName === course.student);
        console.log(`Matching student for ${course.student}:`, studentDetail);
        return {
            ...course,
            ...studentDetail
        };
    });
    console.log('Merged list:', mergedList);
    res.status(200).send(mergedList);
}

let getStudentDetailsByUserNameandRegulized = (req, res, next) => {
    const teacherName = req.params.id;
    const requestedAttendance = 'requested';
    console.log(`Requested teacher name: ${teacherName}`);
    const filteredCourses = saveStudentTeacherList.filter(course => course.teacher === teacherName);
    console.log("filteredCourses", filteredCourses);
    const studentByAttendance = students.filter(student => 
        student.attendence === requestedAttendance && student.isApprover === false
    );
    console.log("studentByAttendance", studentByAttendance);
    const mergedList = filteredCourses.map(course => {
        const studentDetail = studentByAttendance.find(student => student.firstName === course.student);
        console.log(`Matching student for ${course.student}:`, studentDetail);
        if (studentDetail) {
            return {
                ...course,
                ...studentDetail
            };
        }
        return null;
    }).filter(item => item !== null); 
    console.log('Merged list:', mergedList);
    res.status(200).send(mergedList);
};






module.exports={courseAllList,saveStudentTeacher,getStudentListByTeacherAssigned,getOnlyStudentListByTeacheName,getStudentDetailsByUserNameandRegulized}