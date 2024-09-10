import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./shared/footer/footer.component";
import { FormsModule } from '@angular/forms'; 
import { ImprintComponent } from './main-content/imprint/imprint.component';
import { CommonModule, NgClass, NgFor, NgIf } from '@angular/common';
import { MaincontentComponent } from './main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/header/header.component';

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
    NgClass,
    NgFor,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Portfolio';
}
