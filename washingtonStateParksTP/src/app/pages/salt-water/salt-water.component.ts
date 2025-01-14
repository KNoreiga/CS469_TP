import { Component } from '@angular/core';
import { HeaderComponent } from '../../reusableComponents/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-salt-water',
  templateUrl: './salt-water.component.html',
  styleUrl: './salt-water.component.css'
})
export class SaltWaterComponent {
  highlights = [
    {
      title: 'Beach Activities',
      description: 'Relax on the sandy shores and enjoy beach activities.',
      image: 'path-to-your-image1.jpg'
    },
    {
      title: 'Nature Trails',
      description: 'Explore scenic nature trails with diverse flora and fauna.',
      image: 'path-to-your-image2.jpg'
    },
    {
      title: 'Picnic Areas',
      description: 'Have a picnic with family and friends in designated areas.',
      image: 'path-to-your-image3.jpg'
    },
    // Add more highlights
  ];
}

@NgModule({
  declarations: [SaltWaterComponent],
  imports: [
    CommonModule,
    HeaderComponent
    // Other modules if needed
  ],
})
export class SaltWaterModule{}
