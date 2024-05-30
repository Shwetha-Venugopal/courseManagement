import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {
  cities:any
  courseList:any
  studentList:any
  studentForm:FormGroup
  buttonType='Submit'
  updateList: any;
  isDisplay: boolean=true;
  constructor(public router:Router, public userService:UserServiceService, public fb:FormBuilder,public messageService:MessageService){
    this.studentForm=this.fb.group({
      id:[],
      firstName:[],
      lastName:[],
      dateOfBirth:[],
      gender:[],
      grade:[],
      course:[],
      street:[],
      city:[],
      state:[],
      zipCode:[],
      phone:[],
      email:[],
      enrollmentDate:[],
      password:[],
      isApprover:[false],
      attendence:['pending']



    })
  }

  ngOnInit(){
    this.getAllStudentList()
    this.getAllCourseList()
    this.updateList=this.userService.dataShareStudent
    console.log(this.updateList)
    if(this.updateList.val!==''){
      this.buttonType=this.updateList.buttonType
      this.isDisplay=this.updateList.isDisplay
      console.log(this.updateList)
      this.studentForm.patchValue({
        id:this.updateList.val.id,
      firstName:this.updateList.val.firstName,
      lastName:this.updateList.val.lastName,
      dateOfBirth:this.updateList.val.dateOfBirth,
      password:this.updateList.val.password,
      gender:this.updateList.val.gender,
      grade:this.updateList.val.grade,
      course:this.updateList.val.course,
      street:this.updateList.val.address.street,
      city:this.updateList.val.address.city,
      state:this.updateList.val.address.state,
      zipCode:this.updateList.val.address.zipCode,
      phone:Number(this.updateList.val.contactInfo.phone),
      email:this.updateList.val.contactInfo.email,
      enrollmentDate:this.updateList.val.enrollmentDate
      })
    }
  }

  getAllStudentList(){
    this.userService.getStudentDetails().subscribe((el)=>{
      this.studentList=el
    })
  }


  getAllCourseList(){
    this.userService.getCourseList().subscribe((el)=>{
      this.courseList=el
    })
  }
  cancelForm(){
    this.router.navigate(['/admin/studentList'])
  }

  addStudent(){
    let val={...this.studentForm.value,
      address:{
        street:this.studentForm.value.street,
        city:this.studentForm.value.city,
        state:this.studentForm.value.state,
        zipCode:this.studentForm.value.zipCode
      },
      contactInfo:{
        phone:this.studentForm.value.phone,
        email:this.studentForm.value.email
      }

    }
    delete val.street
    delete val.city
    delete val.state
    delete val.zipCode
    delete val.phone
    delete val.email

    if(this.buttonType==='Submit'){
      console.log("update", val)
      let idVal={...val,id:this.studentList.length+1,}
      this.userService.saveStudentInfo(idVal).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Student Added successfully'});
          this.getAllStudentList()
        this.router.navigate(['/admin/studentList'])
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
        }
  
      })
      
    }else if(this.buttonType==='Update'){
      this.userService.updateStudent(val).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Student Details Updated successfully'});
          this.router.navigate(['/admin/studentList'])
          this.getAllStudentList()
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
        }
  
      })

    }else{
      this.router.navigate(['/admin/studentList'])
    }
  }
}
