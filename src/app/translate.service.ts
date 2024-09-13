import { inject, Injectable } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService { //wird verwendet um mit den anderen komponenten intern zu kommunizeren
  translateService = inject(NgxTranslateService);
  language ="de"
  languages = ['de', 'en'];
  constructor() { }

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
    
  }
}
