import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  dataShareTeacher:any
  dataShareStudent:any


  constructor(public http:HttpClient) { }

  getUserList(){
    return this.http.get('http://localhost:8000/api/userList')
  }

  getStudentDetails(){
    return this.http.get('http://localhost:8000/api/studentList')
  }

  getStudentDetailsById(id:any){
    return this.http.get(`http://localhost:8000/api/studentList/${id}`)
  }
  getteacherDetailsById(id:any){
    return this.http.get(`http://localhost:8000/api/teacherList/${id}`)
  }
  login(loginName: string, password: string,user:any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`http://localhost:8000/api/login/`, { loginName, password,user }, { headers });
  }

    verifyToken(headers: HttpHeaders): Observable<any> {
      return this.http.get<any>(`http://localhost:8000/api/login/protected`, { headers });
    }

    getTaskByStudentId(){
      return this.http.get(`http://localhost:8000/api/tasks/`)
    }

    getStudentByStudentName(loginname:any){
      return this.http.get(`http://localhost:8000/api/studentList/name/${loginname}`)
    }
  

  getTeacherList(){
    return this.http.get('http://localhost:8000/api/teacherList')
  }

  getStudentListByTeacher(loginName:any){
    return this.http.get(`http://localhost:8000/api/courseList/${loginName}`)
  }

  geStudentByRegulaization(loginName:any){
    return this.http.get(`http://localhost:8000/api/courseList/regulized/${loginName}`)
  }

  Regulize(eve:any){
    return this.http.put(`http://localhost:8000/api/userList/${eve.firstName}`,eve)
  }

  postAssignmentData(formDta:any){
    return this.http.post('http://localhost:8000/api/tasks/upload',formDta)
  }
  

  getCourseList(){
    return this.http.get('http://localhost:8000/api/courseList')
  }

  updatePassword(value:any){
    return this.http.put('http://localhost:8000/api/login/updatePassword',value)
  }

  updatePasswordStudent(value:any){
    return this.http.put('http://localhost:8000/api/studentList/confirm/confirmPassword',value)
  }

  updateRequlize(value:any){
    return this.http.put(`http://localhost:8000/api/studentList/requlize/${value}`,value)
  }

  saveCourseList(eve:any){
    return this.http.post('http://localhost:8000/api/courseList',eve)
  }

  saveTeacherInfo(val:any){
    return this.http.post('http://localhost:8000/api/teacherList',val)
  }

  saveTeacherloginInfo(val:any){
    return this.http.post('http://localhost:8000/api/teacherList',val)
  }

  deleteTeacher(id:any){
    return this.http.delete(`http://localhost:8000/api/teacherList/${id}`)
  }

  updateTeacher(eve:any){
    return this.http.put(`http://localhost:8000/api/teacherList/${eve.id}`,eve)
  }

  saveStudentInfo(val:any){
    return this.http.post('http://localhost:8000/api/studentList',val)
  }

  updateStudent(eve:any){
    return this.http.put(`http://localhost:8000/api/studentList/${eve.id}`,eve)
  }
  deleteStudent(id:any){
    return this.http.delete(`http://localhost:8000/api/studentList/${id}`)
  }


  }

  

