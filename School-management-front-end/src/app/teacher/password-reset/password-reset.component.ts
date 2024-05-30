import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {
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
    this.userService.updatePassword(this.resetForm.value).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Password Updated successfully'});
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Password Updation failed'});
      }
    })
  }

}
