import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-teacher-details-list',
  templateUrl: './teacher-details-list.component.html',
  styleUrls: ['./teacher-details-list.component.css']
})
export class TeacherDetailsListComponent {
  visible:boolean=false
  loginName:any
  teacherList: any;
  rowData:any
  constructor(public userService:UserServiceService){}
  ngOnInit(){
    this.loginName=localStorage.getItem('loginName')
    this.userService.getStudentListByTeacher(this.loginName).subscribe((data)=>{
      this.teacherList=data
    })
  }

  viewFullDetails(eve:any){
     // Store the object data
    let contantPhone=eve.contactInfo.phone
    let contantEmail=eve.contactInfo.email
    let { password, id,address, ...data } = eve;
    let updateVal={
      ...data,
      contactInfo:contantPhone,
      contactEmail:contantEmail

    }
    this.rowData = updateVal; 
    this.visible = true; // Show the dialog
  }
  objectKeys(obj: any): string[] {
    if (!obj) {
      return [];
    }
    return Object.keys(obj);
  }

  


}
