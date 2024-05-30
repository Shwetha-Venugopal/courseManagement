import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent {
  studentList:any
  constructor(public userService:UserServiceService,public messageService:MessageService){}

  ngOnInit(){
    this.userService.getStudentByStudentName(localStorage.getItem('loginName')).subscribe((data)=>{
      this.studentList=data
    })
}

  viewFullDetails(eve:any){
    this.userService.updateRequlize(localStorage.getItem('loginName')).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sent for Approval'});
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'failed'});
      }
    })

  }

}
