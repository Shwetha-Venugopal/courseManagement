import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  courseList:any
  studentList: any;
  courseForm:any
  teacherList: any;
  constructor(public courseService:UserServiceService,public fb:FormBuilder , public messageService:MessageService){
    this.courseForm=this.fb.group({
      id:[],
      teacher:[],
      student:[],
      course:[],
    })

 
  }
  ngOnInit(){
    this.getCourseList()
    // this.studentAllList()
    this.teacherAllList()
  }



  getCourseList(){
    this.courseService.getCourseList().subscribe((data)=>{
      this.courseList=data
    })
  }

  courseListByCourseName(eve:any){
    this.courseService.getStudentDetailsById(eve).subscribe((data)=>{
      this.studentList=data
    })
    this.courseService.getteacherDetailsById(eve).subscribe((data)=>{
      this.teacherList=data
    })

  }

  submit(){
    let val={...this.courseForm.value,id:this.courseList+1}
    this.courseService.saveCourseList(this.courseForm.value).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Course Assigned Student successfully'});
        
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
      }

    })
  }

  

  // studentAllList(){
  //   this.courseService.getStudentDetails().subscribe((data)=>{
  //     this.studentList=data
  //   })
  // }

  teacherAllList(){
    this.courseService.getTeacherList().subscribe((data)=>{
      this.teacherList=data
    })
  }
}
