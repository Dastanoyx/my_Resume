import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  degrees = [
    {
      title: 'Bachelor’s Degree in Computer Engineering',
      institution: 'ISAMM',
      location: 'Tunisia, Manouba',
      years: '2015 - 2019'
    },
    {
      title: 'Master’s Degree in Computer Engineering',
      institution: 'Polytech Intl',
      location: 'Tunisia, Lac 1',
      years: '2019 - 2022'
    }
  ];
}
