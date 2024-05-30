import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  studentList:any
  constructor(public userService:UserServiceService,public router:Router, public messageService:MessageService
  ){}

  ngOnInit(){
    this.getStudentList()
  }

  getStudentList(){
    this.userService.getStudentDetails().subscribe((el)=>{
      this.studentList=el
    })
  }
  addForm(){
    let val={buttonType:'Submit',val:'',isDisplay:true}
    this.userService.dataShareStudent=val
    this.router.navigate(['admin/studentForm'])
  }

  viewStudentDetails(eve:any){
    let val={buttonType:'Ok',val:eve,isDisplay:false}
    this.userService.dataShareStudent=val
    this.router.navigate(['admin/studentForm'])
  }

  deleteStudentDetails(eve:any){
    this.userService.deleteStudent(eve.id).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Student Deatail Deleted successfully'});
        this.getStudentList()
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
      }

    })
      
      
      
      
      
    
  }

  updateStudentDetails(eve:any){
    console.log("ipdate",eve )
    let val={buttonType:'Update',val:eve,isDisplay:true}
    this.userService.dataShareStudent=val
    this.router.navigate(['admin/studentForm'])
  }

}
