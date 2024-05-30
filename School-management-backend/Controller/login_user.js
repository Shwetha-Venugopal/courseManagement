const teacherList=require('../Controller/teacherList').teacherList
const students=require('../Controller/student-details').students
const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

let userList = [
    { id: 1, userName: 'Student' },
    { id: 2, userName: 'Teacher' },
    { id: 3, userName: 'Admin' },
];

let getUserList = (req, res, next) => {
    if (req.url !== '/') {
        let err = new Error({ msg: 'Not Found' });
        err.status = 404;
        return res.send('not Found');
    }
    res.status(200).send(userList);
};
let list=[]
let login =  (req, res) => {
    const { loginName, password,user} = req.body;
    console.log("user",loginName,password, user)
    if(user==='Teacher'){
        list = teacherList.find(u => u.firstName === loginName && u.password === password);
    }else{
        list=students.find(u => u.firstName === loginName && u.passsword === password);
        
    }
    
    
    console.log("user",user,list)
    
    if (list) {
        const token = jwt.sign({ loginName }, 'your_secret_key');
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}

let saveUserList = (req, res, next) => {
    const { loginName, password } = req.body;
    const token = authService.authenticateUser(loginName, password);
    if (!token) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    return res.status(200).send({ msg: 'Successful', token });
};

let updatePassword=(req,res)=>{
    console.log(req.url)
    let {confirmPassword,password,userName}=req.body
    console.log("filterList123",confirmPassword,password,userName)
    let filterList=teacherList.find((data)=>data.firstName===userName&&data.password===password)
    console.log("filterList",filterList)
    if(!filterList){
        return res.status(404).send({msg:'Not Found'})
    }

    filterList.password=confirmPassword
    res.status(200).send({msg:'Password Updated Successfuly'})


}

let regulize=(req,res,next)=>{
    console.log(req.url)
    let {isApprover,attendence,teacher,firstName}=req.body
    let filterList=students.find((data)=>data.firstName===firstName)
    console.log("filterList",filterList)
    if(!filterList){
        return res.status(404).send({msg:'Not Found'})
    }

    filterList.isApprover=isApprover
    filterList.attendence=attendence

    res.status(200).send({msg:'Password Updated Successfuly'})


}



module.exports = { getUserList, login, saveUserList,updatePassword,regulize };