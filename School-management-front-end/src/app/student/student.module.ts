import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { StudentRoutingModule } from './student-routing.module';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { StudnetTaskListComponent } from './studnet-task-list/studnet-task-list.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AttendenceComponent } from './attendence/attendence.component';

@NgModule({
  declarations: [
    StudentDashboardComponent,
    StudnetTaskListComponent,
    ResetPasswordComponent,
    AttendenceComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    InputNumberModule,
    ConfirmDialogModule,
    ToastModule,
    TableModule
  ],
  providers: [ConfirmationService, MessageService]
  
})
export class StudentModule { }
