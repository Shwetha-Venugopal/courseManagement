import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent {
  navLinks = [
    { path: 'taskList', label: 'Task' },
    { path: 'attendence', label: 'Attendence' },
    { path: 'reset', label: 'Reset-Password' },
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
