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
      sizeVariations: 3    
    });
  }

}
