import { Component, OnInit } from '@angular/core';
import * as particlesJS from 'particlesjs';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.css']
})
export class ParticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.init({
      selector: '#particles',
      maxParticles: 250,
      color: ['#ffffff'],
      minDistance: 120,
      connectParticles: true,
      sizeVariations: 3,
      responsive: [
        {
          breakpoint: 1024,
          options: {
            maxParticles: 200,
            color: '#48F2E3',
            connectParticles: false
          }
        }, {
          breakpoint: 320,
          options: {
            maxParticles: 0 // disables particles.js
          }
        }
      ]      
    });
  }

}
