import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ButtonModule } from 'primeng/button';
import { StudentFormComponent } from './student-form/student-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { TeacherFormComponent } from './teacher-form/teacher-form.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AppModule } from '../app.module';
import { CustomDirective } from 'src/directive/custom.directive';
import { StudentRoutingModule } from '../student/student-routing.module';
import { TeacherRoutingModule } from '../teacher/teacher-routing.module';
@NgModule({
  declarations: [
    AdminDashboardComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    TeacherDetailComponent,
    TeacherFormComponent,
    CourseDetailsComponent,
    CustomDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    TableModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [ConfirmationService, MessageService],
  exports:[CustomDirective]
})
export class AdminModule { }
