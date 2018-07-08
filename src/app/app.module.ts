import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { EmailBoxComponent } from './components/email-box/email-box.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ParticlesComponent,
    EmailBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
