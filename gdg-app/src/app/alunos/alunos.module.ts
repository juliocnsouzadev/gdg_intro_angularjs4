import { AlunosService } from './alunos.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlunosComponent],
  exports :[AlunosComponent],
  providers:[AlunosService]
})
export class AlunosModule { }
