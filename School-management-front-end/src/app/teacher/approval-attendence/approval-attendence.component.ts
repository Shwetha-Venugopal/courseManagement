import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-approval-attendence',
  templateUrl: './approval-attendence.component.html',
  styleUrls: ['./approval-attendence.component.css']
})
export class ApprovalAttendenceComponent {
  public loginName:any
  userList:any
  visible: boolean=false;
  constructor(public userService:UserServiceService,public messageService:MessageService){}

  ngOnInit(){
    this.loginName=localStorage.getItem('loginName')
    this.getStudentListByAttendence()
  }

  getStudentListByAttendence(){
    this.userService.geStudentByRegulaization(this.loginName).subscribe((data)=>{
      this.userList=data
    })
  }

 

  approve(eve:any){
      eve.attendence='Approved',
      eve.isApprover=true
    this.userService.Regulize(eve).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Approved successfully'});
        this.userList=response
        this.getStudentListByAttendence()
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Approval failed'});
      }

    })
      
    
    
  }

}
