import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[
    StudentsComponent
  ],
  declarations: [StudentsComponent]
})
export class StudentsModule { }
