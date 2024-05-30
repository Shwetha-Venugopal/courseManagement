let students = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1999-04-26',
      gender: 'Male',
      grade: '10',
      passsword:'Shwetha',
      course:'Front end',
      address: {
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701'
      },
      contactInfo: {
        phone: '555-1234',
        email: 'john.doe@example.com'
      },
      enrollmentDate: '1999-04-26',
      attendence:'pending',
      isApprover:false
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      dateOfBirth: '1999-04-26',
      gender: 'Female',
      grade: '9',
      passsword:'Shwetha',
      course:'Back end',
      address: {
        street: '456 Elm St',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701'
      },
      contactInfo: {
        phone: '555-2345',
        email: 'jane.smith@example.com'
      },
      enrollmentDate: '1999-04-26',
      attendence:'requested',
      isApprover:false
    }
  ];


const getAllStudentList=(req,res,next)=>{
    if(req.url!=='/'){
        const error=new Error('Not found')
        error.status=404
        return res.send('Not Found')
    }
    res.status(200)
    res.send(students)
}

let saveStudentList = (req, res, next) => {
    if (!req.body ) {
        return res.status(400).send({ msg: 'Invalid request data' });
    }
    students.push(req.body);
    res.status(200).send({ msg: 'Added Successfully' });
};

let getStudentListByCourseName=(req,res,next)=>{
  if(req.params.id===''){
    return res.status(404).send({msg:'Invalid Url'})
  }
  const filterd=students.filter((stud)=>stud.course===req.params.id)

  res.status(200).send(filterd)
  
}



let deleteStudentList=(req,res,next)=>{
    let filteredTeacher=students.findIndex((post)=>post.id===parseInt(req.params.id))
    if(filteredTeacher===-1){
        return res.status(404).send({msg:'No Data Found On this Id'})
    }
    students.splice(filteredTeacher,1)
    res.status(200).send({msg:'updated Successfully'})
}

let updateStudentList = (req, res, next) => {
 
    const filterStudent = students.find((post) => post.id === parseInt(req.params.id));
    console.log('next',filterStudent)
    if (!filterStudent) {
        return res.status(404).send({ msg: 'No Data Found On this Id' });
    }
   
    
    filterStudent.firstName = req.body.firstName;
    filterStudent.lastName = req.body.lastName;
    filterStudent.dateOfBirth = req.body.dateOfBirth; 
    filterStudent.gender = req.body.gender;
    filterStudent.grade = req.body.grade;
    filterStudent.course = req.body.course;
    filterStudent.address.street = req.body.address.street;
    filterStudent.address.city = req.body.address.city;
    filterStudent.address.state = req.body.address.state;
    filterStudent.address.zipCode = req.body.address.zipCode;
    filterStudent.contactInfo.phone = req.body.contactInfo.phone;
    filterStudent.contactInfo.email = req.body.contactInfo.email;
    filterStudent.enrollmentDate = req.body.enrollmentDate;
    filterStudent.password=req.body.password
    res.status(200).send({ msg: 'Updated Successfully' });
}


let getStudentListByFirstName=(req,res,next)=>{
  console.log("hello")
  let filteredName=req.params.name
  let filteredData=students.filter((data)=>data.firstName===filteredName)
  if(filteredData.length===0){
    return res.status(404).send({msg:'not Found'})
  }

  res.status(200).send(filteredData)
}


let getStudentNameForAttendence=(req,res,next)=>{
  let filteredName=req.params.name
  let filteredData=students.find((data)=>data.firstName===filteredName)
  console.log(filteredData)
  if(!filteredData){
    return res.status(404).send({msg:'not Found'})
  }

  filteredData.attendence='requested'
  filteredData.isApprover=false
  res.status(200).send(filteredData)

}

let updatePasswordStudent=(req,res)=>{
  console.log(req.url)
  let {confirmPassword,password,userName}=req.body
  console.log("filterList123",confirmPassword,password,userName)
  let filterList=students.find((data)=>data.firstName===userName&&data.passsword===password)
  console.log("filterList",filterList)
  if(!filterList){
      return res.status(404).send({msg:'Not Found'})
  }

  filterList.passsword=confirmPassword
  res.status(200).send({msg:'Password Updated Successfuly'})


}



module.exports={getAllStudentList,updateStudentList,deleteStudentList,saveStudentList,getStudentListByCourseName,students,getStudentListByFirstName,getStudentNameForAttendence,updatePasswordStudent}
  