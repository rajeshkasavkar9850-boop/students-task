import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Istudent } from '../models/students';
import { SnackBarService } from '../services/snack-bar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent implements OnInit {
  studentsArr : Array<Istudent> = []
  constructor(
private _studentService : StudentsService,
private _snackBar : SnackBarService,
private _matDialog : MatDialog
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

  onRemove(id:string){
    let config = new MatDialogConfig()
    config.width = '350px';
    config.disableClose = true;
    config.data = ` Are you sure, You want to remove the student with id ${id}?`
    let matRef = this._matDialog.open(GetConfirmComponent,config)
    matRef.afterClosed()
    .subscribe(getConfirm =>{
      if(getConfirm){
        // API call 
        this._studentService.removeStd(id)
        .subscribe({
          next : res =>{
         this._snackBar.openSnackBar(res.msg)
          },
          error : err =>{
            this._snackBar.openSnackBar(err.msg)
          }
        })
      }
    })

    
  }

  onEdit(std : Istudent){
  //  this._studentService.editStdSub$.next(std)
  }
}
