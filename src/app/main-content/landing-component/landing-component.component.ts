import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core'; 
import { TranslateModule } from '@ngx-translate/core'; 

@Component({
  selector: 'app-landing-component',
  standalone: true,
  imports: [TranslateModule], 
  templateUrl: './landing-component.component.html',
  styleUrls: ['./landing-component.component.scss'] 
})
export class LandingComponentComponent {

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
}
