import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDetailsListComponent } from './teacher-details-list/teacher-details-list.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ApprovalAttendenceComponent } from './approval-attendence/approval-attendence.component';
import { AssignmentComponent } from './assignment/assignment.component';

const routes: Routes = [
  {path:'',component:TeacherDashboardComponent,children:[
    {path:'',redirectTo:'studentList',pathMatch:'full'},
    {path:'studentList',component:TeacherDetailsListComponent},
    {path:'reset-password',component:PasswordResetComponent},
    {path:'approval',component:ApprovalAttendenceComponent},
    {path:'assignment',component:AssignmentComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
