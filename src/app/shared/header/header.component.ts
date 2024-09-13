import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
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
    this.currentLanguage = defaultLang;  // Setze die aktuelle Sprache beim Initialisieren
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
    this.currentLanguage = lang;  // Speichere die ausgewählte Sprache
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
}
