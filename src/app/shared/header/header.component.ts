import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'] 
})
export class HeaderComponent {
  isMenuOpen = false;
  languages = ['de', 'en'];
  currentLanguage: string = '';
  
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.currentLanguage = defaultLang;  
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }
  
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  changeLanguage(lang: string) {
    this.currentLanguage = lang;  
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
}
