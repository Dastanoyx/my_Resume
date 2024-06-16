import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: { category: string, items: string[] }[] = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python' , 'JavaScript', 'TypeScript']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Spring', 'Spring Boot', 'Spring JPA', 'Spring Security', 'Spring Core','Spring Batch', 'Keycloak' ,'Angular']
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'NoSQL', 'MongoDB']
    },
    {
      category: 'Tools & Platforms',
      items: ['Git', 'Github', 'Docker', 'Jenkins' , 'Kubernetes','Azure', 'Jira', 'Zipkin']
    },
    {
      category: 'Concepts & Methodologies',
      items: ['OOP', 'Data Structure', 'Problem Solving', 'Unit Testing', 'Scrum', 'Agile', 'Microservices', 'Distributed Systems']
    },
    {
      category: 'Roles',
      items: ['Backend', 'Frontend', 'Full-Stack']
    }
  ];
}
