import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent {
  studentList: any;
  buttonType='Submit'
  constructor(public userService:UserServiceService,public router:Router,public messageService:MessageService){}
ngOnInit(){
  this.getTeacherList()
}
getTeacherList(){
  this.userService.getTeacherList().subscribe((el)=>{
    this.studentList=el
  })
}


addForm(){
  let val={buttonType:'Submit',val:{},isDisplay:true}
  this.userService.dataShareTeacher=val
  this.router.navigate(['admin/teacherForm'])
}

viewTeacherDetails(eve:any){
  let val={buttonType:'Ok',val:eve,isDisplay:false}
  this.userService.dataShareTeacher=val
  this.router.navigate(['admin/teacherForm'])
}

deleteTeacherDetails(eve:any){
  this.userService.deleteTeacher(eve.id).subscribe({
    next: (response) => {
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'Teacher Details Deleted successfully'});
      this.getTeacherList()
    },
    error: (err) => {
      this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
    }

  })
}

updateTeacherDetails(eve:any){
  let val={buttonType:'Update',val:eve,isDisplay:true}
  this.userService.dataShareTeacher=val
  this.router.navigate(['admin/teacherForm'])
}
}
