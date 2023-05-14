import { Component, OnInit } from "@angular/core";
import { PortfolioService } from "src/app/servicios/portfolio.service";
import { Experiencia } from "src/app/models/experiencia";

@Component({
  selector: "app-acerca-de-mi",
  templateUrl: "./acerca-de-mi.component.html",
  styleUrls: ["./acerca-de-mi.component.css"],
})
export class AcercaDeMiComponent implements OnInit {
  acercaDe: any = {};
  experiencia: Experiencia = {
    urlImg: "",
    nombreEmpresa: "",
    cargo: "",
    funciones: "",
    fechaDesde: "",
    fechaHasta: "",
  };

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos().subscribe((data) => {
      console.log(data);
      this.acercaDe = data;
      console.log(this.acercaDe.nombre);
    });
  }

  guardarExperiencia(): void {
    const datosExperiencia = {
      urlImg: this.experiencia.urlImg,
      nombreEmpresa: this.experiencia.nombreEmpresa,
      cargo: this.experiencia.cargo,
      funciones: this.experiencia.funciones,
      fechaDesde: this.experiencia.fechaDesde,
      fechaHasta: this.experiencia.fechaHasta,
    };

    this.datosPortfolio.agregarExperiencia(datosExperiencia).subscribe({
      next: (res) => {
        console.log(res);
      },
    });
    console.log("se guardo experiencia");
    console.log(datosExperiencia);
  }

  nuevaExperiencia(): void {
    this.experiencia = {
      urlImg: "",
      nombreEmpresa: "",
      cargo: "",
      funciones: "",
      fechaDesde: "",
      fechaHasta: "",
    };
  }
}
