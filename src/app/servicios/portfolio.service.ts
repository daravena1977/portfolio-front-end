import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  url:string = 'http://localhost:8080/api/';
  datosPersona:any;
  constructor(private http:HttpClient, private autenticacionService:AutenticacionService) {
    console.log(this.autenticacionService.datos)
    this.datosPersona = this.autenticacionService.datos
   }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.url + 'persona/buscar-persona/2')
  }

}
