import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8080/api/auth/signin";
  datos:any;

  currentUserSubject: BehaviorSubject<any>;
  constructor(private http:HttpClient) {
    console.log("El servidor esta activo")
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'));
   }
   IniciarSesion(credenciales:any):Observable<any>{
    return this.http.post(this.url, credenciales).pipe(map(data => {
      console.log(credenciales);
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      console.log(data)
      this.datos = data
      console.log(this.datos)
      return data
    }))
   }

   get UsuarioAutenticado() {
    return this.currentUserSubject.value
   }
}


