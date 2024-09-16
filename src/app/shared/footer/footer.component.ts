import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }
}
