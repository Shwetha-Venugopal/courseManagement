import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.css']
})
export class TeacherDashboardComponent {
  public teacherList:any
  public loginName:any
  navLinks = [
    { path: 'studentList', label: 'Students' },
    { path: 'approval', label: 'Attendence Approval' },
    { path: 'assignment', label: 'Courses' },
    { path: 'reset-password', label: 'Reset Password' },
  ];
  showTable: boolean=true;

  constructor(public userService:UserServiceService,public messageService:MessageService,public router:Router,public confirmationService:ConfirmationService ){}

  ngOnInit(){
    this.loginName=localStorage.getItem('loginName')
    this.userService.getStudentListByTeacher(this.loginName).subscribe((data)=>{
      this.teacherList=data
    })
    this.checkUrl();
  }
  logOut() {
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
        this.router.navigate(['/login']);
      },
      reject: () => {
        this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
      }
    });
  }

  navigateAndRefresh(path: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([path]);
      // Fetch data again after navigation
      this.userService.getStudentListByTeacher(this.loginName).subscribe((data) => {
        this.teacherList = data;
      });
    });
  }

  // Method to check current URL and show/hide table accordingly
  checkUrl() {
    this.showTable = this.router.url === '/teacher';
  }

  
}
