import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {SkillsComponent} from "./skills/skills.component";
import {ExperienceComponent} from "./experience/experience.component";
import {ProjectsComponent} from "./projects/projects.component";
import {EducationComponent} from "./education/education.component";
import {ContactComponent} from "./contact/contact.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HomeComponent, AboutComponent, SkillsComponent, ExperienceComponent, ProjectsComponent, EducationComponent, ContactComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-site';
  menuVisible = false;
  showBackToTop = false;

  @ViewChild('home', { static: false }) homeSection!: ElementRef<HTMLElement>;
  @ViewChild('about', { static: false }) aboutSection!: ElementRef<HTMLElement>;
  @ViewChild('skills', { static: false }) skillsSection!: ElementRef<HTMLElement>;
  @ViewChild('experience', { static: false }) experienceSection!: ElementRef<HTMLElement>;
  @ViewChild('projects', { static: false }) projectsSection!: ElementRef<HTMLElement>;
  @ViewChild('education', { static: false }) educationSection!: ElementRef<HTMLElement>;
  @ViewChild('contact', { static: false }) contactSection!: ElementRef<HTMLElement>;

  ngOnInit() {
    document.addEventListener('click', this.handleClickOutside.bind(this));
  }

  toggleMenu(event: MouseEvent) {
    event.stopPropagation(); // Prevent this click from being caught by the document click listener
    this.menuVisible = !this.menuVisible;
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
      menuButton.classList.toggle('open', this.menuVisible);
    }
  }

  scrollToSection(section: ElementRef<HTMLElement>) {
    this.menuVisible = false;
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
      menuButton.classList.remove('open');
    }
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  handleClickOutside(event: MouseEvent) {
    const menu = document.querySelector('nav ul');
    const menuButton = document.querySelector('.menu-button');
    if (
      this.menuVisible &&
      menu &&
      menuButton &&
      !menu.contains(event.target as Node) &&
      !menuButton.contains(event.target as Node)
    ) {
      this.menuVisible = false;
      if (menuButton) {
        menuButton.classList.remove('open');
      }
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTop = scrollPosition > 200;
  }
}
