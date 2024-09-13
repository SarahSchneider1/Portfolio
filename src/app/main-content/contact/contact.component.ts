import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  http = inject(HttpClient);
  translateService = inject(TranslateService);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: ""
  };

  mailTest = false;
  isSubmitted: boolean = false;

  post = {
    endPoint: 'https://sarah-portfolio.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    const defaultLang = localStorage.getItem('language') || 'de';
    this.translateService.setDefaultLang(defaultLang);
    this.translateService.use(defaultLang);
  }

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            this.isSubmitted = true;
            ngForm.resetForm();
            this.hideSuccessMessageAfterDelay();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
      this.isSubmitted = true;
      ngForm.resetForm();
      this.hideSuccessMessageAfterDelay();
    }
  }

  hideSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.isSubmitted = false;
    }, 5000);
  }

  changeLanguage(lang: string) {
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }

  getPrivacyPolicyLink(): string {
    const translatedText = this.translate.instant('privacyPolicyLink');
    return `<a class="privacy-policy-a" href="/privacy">${translatedText}</a>`;
  }
  

}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.querySelector('.arrow-container') as HTMLElement;

  if (arrow) {
    arrow.addEventListener('click', scrollToTop);
  }
});
