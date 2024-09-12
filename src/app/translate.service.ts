import { Injectable } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor(private ngxTranslateService: NgxTranslateService) {}

  changeLanguage(lang: string) {
    this.ngxTranslateService.use(lang);
    localStorage.setItem('language', lang);
  }
}
