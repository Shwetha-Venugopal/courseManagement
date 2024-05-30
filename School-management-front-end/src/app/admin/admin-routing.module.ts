import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent, children:[
    {path:'',redirectTo:'studentList',pathMatch:'full'},
    { path: 'studentList', component: StudentDetailsComponent },
    { path: 'studentForm', component: StudentFormComponent },
    { path: 'teacherList', component: TeacherDetailComponent },
    { path: 'teacherForm', component: TeacherFormComponent },
    { path: 'courseDetails', component: CourseDetailsComponent }

  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
