import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetConfirmComponent } from './componets/get-confirm/get-confirm.component';
import { StudentsFormComponent } from './componets/students-form/students-form.component';
import { StudentsDashboardComponent } from './componets/students-dashboard/students-dashboard.component';
import { StudentsTableComponent } from './componets/students-table/students-table.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    AppComponent,
    GetConfirmComponent,
    StudentsFormComponent,
    StudentsDashboardComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
