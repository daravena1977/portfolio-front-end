import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { WorksPageComponent } from './pages/works-page/works-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    WorksPageComponent,
    SkillsPageComponent,
    LayoutPageComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
