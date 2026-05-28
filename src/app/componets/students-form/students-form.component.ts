import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Istudent } from '../models/students';
import { StudentsService } from '../services/students.service';
import { SnackBarService } from '../services/snack-bar.service';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {

isInEditMode : boolean = false;
@ViewChild('stdForm') stdForm! : NgForm
  constructor(
    private _studentService : StudentsService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
   
  onStudentSubmit(){
    if(this.stdForm.valid){
      let stdObj:Istudent = {
        ...this.stdForm.value,
       stdId : crypto.randomUUID()
      }
      console.log(stdObj);
      // API call 
      this._studentService.createStudent(stdObj)
      .subscribe({
        next : data => {
          this._snackBar.openSnackBar(data.msg)
        },
        error : err => {
          this._snackBar.openSnackBar(err.msg)
        }
      })
    }
  }
}
