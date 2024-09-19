import { Component, OnInit } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, ContactComponent, ImprintComponent, LandingComponentComponent, MySkillsComponent, PortfolioComponent, PrivacyPolicyComponent, FooterComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MaincontentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }
}
