import { Injectable } from '@angular/core';
import { IRes, IstdRes, Istudent } from '../models/students';
import { Observable, of, Subject } from 'rxjs';

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
    stdId : '101',
    isActive : true
  },

  {
    fname : 'Rahul',
    lname : 'Sharma',
    email : 'rahul@gmail.com',
    contact : 9876543211,
    stdId : '102',
    isActive : true
  },

  {
    fname : 'Amit',
    lname : 'Patil',
    email : 'amit@gmail.com',
    contact : 9876543212,
    stdId : '103',
    isActive : false
  }
];


private editStdSub$ : Subject<Istudent> = new Subject()
editstdObs$: Observable<Istudent> = this.editStdSub$.asObservable()
  constructor() { }

  emitEditStd(std:Istudent){
    this.editStdSub$.next(std)
  }

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
   removeStd(id:string):Observable<IRes<Istudent>>{
     let GET_INDEX = this.stdArr.findIndex(s => s.stdId === id);
    let removedStd = this.stdArr.splice(GET_INDEX,1)

     return of({
      msg : `The student with id ${id} remove successfully!!`,
      data : removedStd[0]
      
     })
    
   }

}
