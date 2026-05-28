import { Injectable } from '@angular/core';
import { IRes, IstdRes, Istudent } from '../models/students';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

   stdArr:Array<Istudent> = [
  {
    fname : 'Rajesh',
    lname : 'Kasavkar',
    email : 'rajesh@gmail.com',
    contact : 9876543210,
    stdId : 'std101',
    isActive : true
  },

  {
    fname : 'Rahul',
    lname : 'Sharma',
    email : 'rahul@gmail.com',
    contact : 9876543211,
    stdId : 'std102',
    isActive : true
  },

  {
    fname : 'Amit',
    lname : 'Patil',
    email : 'amit@gmail.com',
    contact : 9876543212,
    stdId : 'std103',
    isActive : false
  }
];
  constructor() { }


  //  FetchStudent
 fetchStudent():Observable<Istudent[]>{
   return of(this.stdArr)
 }
 

  //FetchStudentById



  // CreateStudent
  createStudent(student:Istudent):Observable<IRes<Istudent>> {
    //  API call add student to DB
    this.stdArr.push(student)
    return of({
      msg : `The student ${student.fname} ${student.lname} is Added successfully!!! `,
      data : student
    })
  }

  // UpdateStudent


  // RemoveStudent
}
