import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      name: 'COSMETIBOT',
      description: 'Developed an advanced AI chatbot for personalized cosmetic product recommendations using Rasa and Drools. Integrated machine learning algorithms to analyze user preferences and provide tailored advice. Enhanced user engagement through dynamic interactions, improving overall satisfaction. Designed and implemented a scalable architecture to handle high traffic and complex queries efficiently.'
    },
    {
      name: 'E-FORTUNE',
      description: 'Served as a full-stack developer for a comprehensive e-commerce platform. Leveraged NodeJS, Express, MongoDB, and Angular to build a seamless and responsive online shopping experience. Implemented secure payment gateways and optimized database queries for high performance. Focused on delivering a user-friendly interface and enhancing the customer journey through efficient design practices.'
    }
  ];
}
