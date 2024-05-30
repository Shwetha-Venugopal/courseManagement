import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  resetForm:FormGroup;

  constructor(public fb:FormBuilder,public userService:UserServiceService,public messageService:MessageService){
    this.resetForm=this.fb.group({
      confirmPassword:[],
      password:[],
      userName:[localStorage.getItem('loginName')]

    })
  }

  submit(){
    console.log(this.resetForm.value)
    this.userService.updatePasswordStudent(this.resetForm.value).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Password Updated successfully'});
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Password Updation failed'});
      }
    })
  }

}
