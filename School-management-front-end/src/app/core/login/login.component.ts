import { HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:FormGroup
  display:boolean=false
  userList:any
  cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
];
  teacherList: any;
  errorMessage: any;

  constructor(public userService:UserServiceService,public fb:FormBuilder,public router:Router,public messageService:MessageService){
    this.loginForm=this.fb.group({
      password:[],
      loginName:[],
      user:[]
    })
  }

  ngOnInit(){
    this.userService.getUserList().subscribe((el)=>{
      this.userList=el
    })
    

  }


 
  
  

  clickOnLogin() {
    const loginName = this.loginForm.value.loginName;
    const password = this.loginForm.value.password;
    const userType = this.loginForm.value.user;
  
    if (userType === 'Admin') {
      if (loginName === 'Admin') {
        this.router.navigate(['/admin']);
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Welcome to Admin Page'});
        localStorage.setItem('userType', 'Admin');
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        this.display = true;
        this.errorMessage = 'Invalid username or password';
      }
    } else if (userType === 'Teacher' || userType === 'Student') {
      this.userService.login(loginName, password, userType).subscribe({
        next: (response) => {
          localStorage.setItem('loginName', loginName);
          localStorage.setItem('token', response.token);
          localStorage.setItem('userType', userType);
          localStorage.setItem('isAuthenticated', 'true');
          
          if (userType === 'Teacher') {
            this.router.navigate(['teacher']);
          } else if (userType === 'Student') {
            this.router.navigate(['student']);
          }
  
          this.messageService.add({severity: 'success', summary: 'Success', detail: `Welcome ${loginName}`});
        },
        error: () => {
          this.display = true;
          this.errorMessage = 'Invalid username or password';
          this.messageService.add({severity: 'error', summary: 'Error', detail: 'Invalid username or password'});
        }
      });
    }
  }
  
verifyTokenAndNavigate() {
  const token = localStorage.getItem('token');
  if (token) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    this.userService.verifyToken(headers).subscribe({
      next: (response) => {
        this.router.navigate(['admin']);
      },
      error: (err) => {
        this.errorMessage = 'Token verification failed';
        console.error('Token verification error:', err);
      }
    });
  } else {
    this.errorMessage = 'No token found';
  }
} 
}
