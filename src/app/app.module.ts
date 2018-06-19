import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { GetHeightDirective } from './directives/get-height.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ParticlesComponent,
    WhoWeAreComponent,
    WhatWeDoComponent,
    GetHeightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
