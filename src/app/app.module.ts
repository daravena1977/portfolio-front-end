import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderHomeComponent } from './components/header-home/header-home.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { AcercaDeMiComponent } from './components/acerca-de-mi/acerca-de-mi.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorJwtService } from './interceptors/interceptor-jwt.service';
import { CrearLaboralComponent } from './modales/crear-laboral/crear-laboral.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderHomeComponent,
    MainHomeComponent,
    TrabajosComponent,
    HomeComponent,
    PortfolioComponent,
    IniciarSesionComponent,
    AcercaDeMiComponent,
    TecnologiasComponent,
    CrearLaboralComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorJwtService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
