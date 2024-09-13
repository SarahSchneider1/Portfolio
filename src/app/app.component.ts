import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { FormsModule } from '@angular/forms'; 
import { ImprintComponent } from './main-content/imprint/imprint.component';
import { CommonModule } from '@angular/common';
import { MaincontentComponent } from './main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MaincontentComponent,
    RouterOutlet,
    FooterComponent,
    FormsModule, 
    HeaderComponent,
    ImprintComponent,
    CommonModule,
    HttpClientModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'] 
})
export class AppComponent implements OnInit {
  languages = ['de', 'en'];
  TranslateService = inject(TranslateService)

  constructor() {}

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    // this.translate.setDefaultLang(defaultLang);
    // this.translate.use(defaultLang);
  }


  appFunctionForLanguageChange() {
    this.TranslateService.use('en'); 
    localStorage.setItem('language', 'en'); 
}
}