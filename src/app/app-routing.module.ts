import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'iniciar-sesion', component:IniciarSesionComponent},
  {path: 'trabajos', component:TrabajosComponent},
  {path: 'acerca-de-mi', component: AcercaDeMiComponent},
  {path: 'tecnologias', component:TecnologiasComponent},
  {path: '', redirectTo: 'portfolio', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
