import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core'; // Importiere TranslateModule und TranslateService

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, TranslateModule], // Füge TranslateModule zu den Imports hinzu
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  skills = [
    { name: 'HTML', image: '/assets/img/skills/Property 1=html.png' },
    { name: 'CSS', image: '/assets/img/skills/Property 1=css.png' },
    { name: 'JavaScript', image: '/assets/img/skills/Property 1=JavScript.png' },
    { name: 'TypeScript', image: '/assets/img/skills/Property 1=Typescript.png' },
    { name: 'Angular', image: '/assets/img/skills/Property 1=Angular.png' },
    { name: 'Firebase', image: '/assets/img/skills/Property 1=Firebase.png' },
    { name: 'GIT', image: '/assets/img/skills/Property 1=Git.png' },
    { name: 'Rest-API', image: '/assets/img/skills/API.png' },
    { name: 'Scrum', image: '/assets/img/skills/Property 1=Scrum.png' },
    { name: 'Material Design', image: '/assets/img/skills/Material Design.png' },
    { name: 'Continually learning', image: '/assets/img/skills/Propertylearning.png' },
    { name: '', image: '' }
  ];

  constructor(private translateService: TranslateService) {} 

  changeLanguage(lang: string) {
    this.translateService.use(lang); 
    localStorage.setItem('language', lang); 
  }

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de'; 
    this.translateService.setDefaultLang(defaultLang); 
    this.translateService.use(defaultLang); 
  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }
}
