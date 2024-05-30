import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-studnet-task-list',
  templateUrl: './studnet-task-list.component.html',
  styleUrls: ['./studnet-task-list.component.css']
})
export class StudnetTaskListComponent {
  public firstName:any
  taskList:any
  baseUrl = 'http://localhost:8000/'
  constructor(public userService:UserServiceService){}

  ngOnInit(){
    this.firstName=localStorage.getItem('loginName')
    this.userService.getTaskByStudentId().subscribe((data)=>{
      this.taskList=data
    })
  }

  getFileUrl(filePath: string): string {
    return `${this.baseUrl}${filePath}`;
  }

}
