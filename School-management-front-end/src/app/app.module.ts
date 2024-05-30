import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './core/login/login.component';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import this
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast'; // Import this
import { ConfirmationService, MessageService } from 'primeng/api'; // Import this
import { TeacherModule } from './teacher/teacher.module';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { AdminModule } from './admin/admin.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AdminModule,
    HttpClientModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    CalendarModule,
    TeacherModule,
    ToastModule,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    
    
  ],
  
  providers: [MessageService,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
