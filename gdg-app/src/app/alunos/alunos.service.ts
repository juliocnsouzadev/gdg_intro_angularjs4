import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {


  urlList = "http://69.10.49.96:8080/app/ws/students/list";
  private headers;

  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
   }


   getAlunos(){
     return this.http.get(this.urlList, this.headers).map(res => res.json());
   }

}
