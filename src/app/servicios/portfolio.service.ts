import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutenticacionService } from './autenticacion.service';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  url: string = 'http://localhost:8080/api/';
  datosPersona: any;

  constructor(
    private http: HttpClient,
    private autenticacionService: AutenticacionService
  ) {
    console.log(this.autenticacionService.datos + 'hola');
    this.datosPersona = this.autenticacionService.datos;
    console.log(this.datosPersona + ' personas');
  }

  obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.url + 'persona/buscar-persona/1');
  }

  agregarExperiencia(datos: any): Observable<any> {
    const opciones = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    console.log(opciones + 'headers aca');
    console.log(JSON.stringify(datos) + 'Estos son los datos JSON');
    return this.http.post<any>(
      this.url + 'persona/1/laborales',
      JSON.stringify(datos),
      opciones
    );
  }
}
