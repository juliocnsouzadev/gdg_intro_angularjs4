import { AlunosService } from './alunos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {


  alunos =[];

  constructor(private alunosService:AlunosService ) { 
    this.setAlunos()
  }

  getAlunos(){
    this.setAlunos();
    return this.alunos;
  }

  private setAlunos(){
    console.log("set alunos")
     this.alunosService.getAlunos().subscribe(
      (result) => {
        console.log("result");
        console.log(result);
        this.alunos = result;
      },
      (err) => {
        console.log("err");
        console.log(err);
        if (err.status === 410) {
          alert("You a not a valid student");
        }
      },
      () => {
        console.log('Completed');
      }
      );
  }

  ngOnInit() {
  }

}
