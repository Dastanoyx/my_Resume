import { Component } from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  images: string[] = [
    '/assets/about.png',
    '/assets/contact.png',
    '/assets/education.png',
    '/assets/experience.png',
    '/assets/projects.png',
    '/assets/skills.png',
  ];
  currentImageIndex: number = 0;
  backgroundStyle = {};

  ngOnInit() {
    this.startImageCarousel();
  }

  startImageCarousel() {
    this.updateBackground();
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      this.updateBackground();
    }, 2000); // Change image every 2 seconds
  }

  updateBackground() {
    this.backgroundStyle = {
      'background-image': `url(${this.images[this.currentImageIndex]})`
    };
  }
}
