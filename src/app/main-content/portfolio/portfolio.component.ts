import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);

    this.projects = [
      {
        image: '/assets/img/join photo.png',
        title: 'Join', 
        techstack: 'JavaScript | HTML | CSS | Firebase',
        description: 'joininfo' 
      },
      {
        image: '/assets/img/Sharkie photo.png',
        title: 'Sharkie', 
        techstack: 'JavaScript | HTML | CSS',
        description: 'sharkieinfo' 
      }
    ];

    this.loadTranslations();
  }

  private loadTranslations() {
    this.projects.forEach(project => {
      this.translateService.get(project.title).subscribe(translatedTitle => {
        project.title = translatedTitle;
      });

      this.translateService.get(project.description).subscribe(translatedDescription => {
        project.description = translatedDescription;
      });
    });
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
}
