import { Component } from '@angular/core';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { ImprintComponent } from './imprint/imprint.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

@Component({
  selector: 'app-maincontent',
  standalone: true,
  imports: [AboutMeComponent, ContactComponent, ImprintComponent,LandingComponentComponent, MySkillsComponent, PortfolioComponent, PrivacyPolicyComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MaincontentComponent {

}
