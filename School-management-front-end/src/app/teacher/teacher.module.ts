import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { TeacherDetailsListComponent } from './teacher-details-list/teacher-details-list.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PasswordResetComponent } from './password-reset/password-reset.component';
import { ApprovalAttendenceComponent } from './approval-attendence/approval-attendence.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    TeacherDashboardComponent,
    TeacherDetailsListComponent,
    PasswordResetComponent,
    ApprovalAttendenceComponent,
    AssignmentComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    TeacherRoutingModule,
    TableModule,
    ReactiveFormsModule,
    ConfirmDialogModule,
    ToastModule,
  ],
  providers: [MessageService, ConfirmationService],
})
export class TeacherModule { }
