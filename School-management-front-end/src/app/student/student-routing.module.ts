import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { StudnetTaskListComponent } from './studnet-task-list/studnet-task-list.component';
import { AttendenceComponent } from './attendence/attendence.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {path:'',component:StudentDashboardComponent,children:[
    {path:'',redirectTo:'taskList',pathMatch:'full'},
    {path:'taskList',component:StudnetTaskListComponent},
    {path:'attendence',component:AttendenceComponent},
    {path:'reset',component:ResetPasswordComponent},

  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
