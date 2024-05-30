import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  display:boolean=false

  navLinks = [
    { path: 'studentList', label: 'Students' },
    { path: 'teacherList', label: 'Teachers' },
    { path: 'courseDetails', label: 'Courses' },
  ];
  constructor(public router:Router,private confirmationService: ConfirmationService, private messageService: MessageService){}

  logOut(){
    this.confirmationService.confirm({
      message: 'Do you want to Logout',
      header: 'Logout Confirmation',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-text',
      rejectButtonStyleClass: 'p-button-text p-button-text',
      acceptIcon: 'none',
      rejectIcon: 'none',

      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Record deleted' });
        this.router.navigate(['/login']); // Navigate to login page on accept
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  
}
  
  

}
