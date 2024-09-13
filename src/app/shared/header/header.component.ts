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
  

  constructor(private translateService: TranslateService) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    
  }
  
  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }
}
