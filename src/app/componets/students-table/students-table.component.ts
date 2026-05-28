import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Istudent } from '../models/students';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  studentsArr : Array<Istudent> = []
  constructor(
private _studentService : StudentsService,
private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.getStudent()
  }
  
  getStudent(){
    this._studentService.fetchStudent()
    .subscribe({
      next : data => {
        console.log(data);
        this.studentsArr = data
        
      },
      error : err =>{
        console.log(err)
        this._snackBar.openSnackBar(err)
      }
    })
  }
}
