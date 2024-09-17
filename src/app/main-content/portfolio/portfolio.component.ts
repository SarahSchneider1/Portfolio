import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
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
        description: 'joininfo',
        liveTestLink: 'https://join.sarah-portfolio.de', 
        githubLink: 'https://github.com/SarahSchneider1/Join360', 
      },
      {
        image: '/assets/img/Sharkie photo.png',
        title: 'Sharkie',
        techstack: 'JavaScript | HTML | CSS',
        description: 'sharkieinfo',
        liveTestLink: 'https://sharkie.sarah-portfolio.de', 
        githubLink: 'https://github.com/SarahSchneider1/Sharkie', 
      }
    ];
  }

  navigateToExternalUrl(url: string) {
    window.location.href = url;
  }
}
