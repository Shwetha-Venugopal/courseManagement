import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent {
  taskForm:FormGroup
  file: File | null = null;
  constructor(public fb:FormBuilder,public userService:UserServiceService,public messageService:MessageService){
    this.taskForm=this.fb.group({
      teacher:[localStorage.getItem('loginName')],
      dueDate:[],
      description:[],
      title:[],
    })
  }

  onSubmit() {
    if (this.taskForm.invalid) {
      this.taskForm.markAllAsTouched();
      return;
    }
    const formData = new FormData();
    formData.append('title', this.taskForm.get('title')?.value);
    formData.append('description', this.taskForm.get('description')?.value);
    formData.append('dueDate', this.taskForm.get('dueDate')?.value);
    formData.append('teacher', this.taskForm.get('teacher')?.value);
    formData.append('file', this.file as File);
    console.log('Form data:', formData);
    formData.forEach((value, key) => {
      console.log(key, value);
    });

    this.userService.postAssignmentData(formData).subscribe({
      next: (response) => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Task uploaded successfully'});
        this.taskForm.reset();
        this.file = null;
      },
      error: (err) => {
        this.messageService.add({severity: 'error', summary: 'Error', detail: 'Task upload failed'});
      }
      

    })
}

  onFileChange(eve:any){
  this.file=eve.target.files[0]
  console.log(this.file)
  }

}
