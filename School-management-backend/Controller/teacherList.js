const teacherList = [
    {
        firstName: 'Shwetha',
        lastName: 'Venugopal',
        course: 'Back end',
        dob: '1999-04-26',
        gender: 'Female',
        password:'Shwetha',
        street: 'maruthi road',
        city: 'banglore',
        state: 'Karnataka',
        zipCode: '560079',
        gmail: 'shwethaVijaya1999@gmail.com',
        contact: 9110899813
    },
    {
        firstName: 'Tilok',
        lastName: 'Venugopal',
        course: 'Front end',
        dob: '1999-04-26',
        gender: 'Female',
        password:'Shwetha',
        street: 'maruthi road',
        city: 'banglore',
        state: 'Karnataka',
        zipCode: '560079',
        gmail: 'shwethaVijaya1999@gmail.com',
        contact: 9110899813
    }
];

let teacherAllList = (req, res, next) => {
    if (req.url !== '/') {
        const err = new Error('Not Found');
        err.status = 404;
        return res.status(404).send('Not Found');
    }
    res.status(200).send(teacherList);
};

let getteacherListByCourseName=(req,res,next)=>{
    if(req.params.id===''){
      return res.status(404).send({msg:'Invalid Url'})
    }
    const filterd=teacherList.filter((stud)=>stud.course===req.params.id)
  
    res.status(200).send(filterd)
    
  }

let saveTeacherList = (req, res, next) => {
    if (!req.body || !req.body.firstName || !req.body.lastName) {
        return res.status(400).send({ msg: 'Invalid request data' });
    }
    teacherList.push(req.body);
    res.status(200).send({ msg: 'Added Successfully' });
};

let deleteList=(req,res,next)=>{
    let filteredTeacher=teacherList.findIndex((post)=>post.id===parseInt(req.params.id))
    if(filteredTeacher===-1){
        return res.status(404).send({msg:'No Data Found On this Id'})
    }
    teacherList.splice(filteredTeacher,1)
    res.status(200).send({msg:'updated Successfully'})
}

let updateList = (req, res, next) => {
    const filterTeacher = teacherList.find((post) => post.id === parseInt(req.params.id));
    
    if (!filterTeacher) {
        return res.status(404).send({ msg: 'No Data Found On this Id' });
    }
    
    filterTeacher.city = req.body.city;
    filterTeacher.course = req.body.course;
    filterTeacher.dob = req.body.dob; // Ensure the correct property is updated
    filterTeacher.firstName = req.body.firstName;
    filterTeacher.lastName = req.body.lastName;
    filterTeacher.gender = req.body.gender;
    filterTeacher.street = req.body.street;
    filterTeacher.zipCode = req.body.zipCode;
    filterTeacher.state = req.body.state;
    filterTeacher.gmail = req.body.gmail;
    filterTeacher.password=req.body.password
    
    // Send success response
    res.status(200).send({ msg: 'Updated Successfully' });
}


module.exports = { teacherAllList, saveTeacherList, deleteList, updateList,getteacherListByCourseName, teacherList };
