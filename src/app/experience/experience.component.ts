import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  jobs = [
    {
      title: 'Software Engineer',
      company: 'Value',
      location: 'Tunisia',
      date: 'September 2023 - Present',
      applications: [
        {
          name: 'Dima Maak',
          description: 'Led the development of an insurance application using Spring Boot for microservices, improving scalability and secure user authentication with Keycloak. Enhanced document management with Azure Blob Storage and streamlined workflows with Camunda BPMN.'
        },
        {
          name: 'E-Saha',
          description: 'Developed a healthcare app for treatment abroad using Spring Boot and PostgreSQL. Implemented secure access and automated notifications with Keycloak and Microsoft Graph API. Ensured efficient document management with Azure Blob Storage.'
        }
      ]
    },
    {
      title: 'Software Engineer',
      company: 'Hydatis',
      location: 'Tunisia',
      date: 'January 2022 - August 2023',
      applications: [
        {
          name: 'CentralStamp',
          description: 'Enhanced security systems with automated notifications and intuitive email setup interfaces. Streamlined key security tasks using Camunda BPMN and integrated diverse security devices for cohesive management.'
        },
        {
          name: 'Ozone Pro',
          description: 'Analyzed requirements for environmental standards compliance, leveraging Spring Cloud Config Server and GitLab for dynamic configuration. Improved scalability and resilience with Eureka and developed a robust CQRS-architecture microservice with Kafka.'
        }
      ]
    }
  ];
}
