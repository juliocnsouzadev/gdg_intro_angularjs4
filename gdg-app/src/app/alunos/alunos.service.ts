import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {


  urlList = "http://69.10.49.96:8080/app/ws/students/list";

  constructor(private http: Http) {
   }

   private getHeaders() {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

   getAlunos(){
     return this.http.get(this.urlList, this.getHeaders()).map(res => res.json());
   }

}
