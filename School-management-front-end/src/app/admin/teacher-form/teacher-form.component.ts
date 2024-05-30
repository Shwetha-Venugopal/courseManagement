import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {
  cities:any
  teacherForm:FormGroup
  updateList:any
  isDisplay:boolean=true
  courseList: any;
  buttonType='Submit'
  teacherList: any;
  constructor(public router:Router, public userService:UserServiceService, public fb:FormBuilder, public messageService:MessageService){
    this.teacherForm=this.fb.group({
      id:[],
      firstName:[],
      lastName: [],
      course: [],
      dob: [],
      gender: [],
      street: [],
      city: [],
      state:[],
      zipCode: [],
      gmail: [],
      contact:[],
      password:[]
    })
  }
  ngOnInit(){
    this.getCourseList()
    this.getAllTeacherList()
    this.updateList=this.userService.dataShareTeacher
    console.log(this.updateList)
    if(this.updateList){
      this.buttonType=this.updateList.buttonType
      this.isDisplay=this.updateList.isDisplay

      // this.updateList.val.dob = this.formatDate(this.updateList.val.dob);
      this.teacherForm.patchValue(this.updateList.val)
    }

   
    
  }

  formatDate(dateString: string): string {
    if (!dateString) {
      console.error('Invalid date string:', dateString);
      return '';
    }
  
    const dateParts = dateString.split('/');
    if (dateParts.length !== 3) {
      console.error('Invalid date format:', dateString);
      return '';
    }
  
    const [month, day, year] = dateParts;
    if (!month || !day || !year) {
      console.error('Invalid date parts:', dateParts);
      return '';
    }
  
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  }
  
 

  getAllTeacherList(){
    this.userService.getTeacherList().subscribe((el)=>{
      this.teacherList=el
    })
  }

  getCourseList(){
    this.userService.getCourseList().subscribe((el)=>{
      this.courseList=el
    })
  }

  cancelForm(){
    this.router.navigate(['/admin/teacherList'])
  }

  addStudent(){
    if(this.buttonType==='Submit'){
      let val={...this.teacherForm.value,id:this.teacherList.length+1}
      console.log("update", val)
      this.userService.saveTeacherInfo(val).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Teacher Deatail added successfully'});
          let {firstName,password}=val
          let loginDetail={
            loginName:firstName,
            password:password
          }
          this.userService.saveTeacherloginInfo(loginDetail).subscribe((data:any)=>{
            console.log(data)
          })
          this.getAllTeacherList()
          this.router.navigate(['/admin/teacherList'])
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
        }
  
      })
     
    }else if(this.buttonType==='Update'){
      this.userService.updateTeacher(this.teacherForm.value).subscribe({
        next: (response) => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Teacher Deatail Updated successfully'});
          this.router.navigate(['/admin/teacherList'])
            this.getAllTeacherList()
        },
        error: (err) => {
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
        }
  
      })
      
    }else{
      this.router.navigate(['/admin/teacherList'])
    }
    }
    
}
