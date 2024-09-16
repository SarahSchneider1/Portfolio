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
