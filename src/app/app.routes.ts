import { Routes } from '@angular/router';
import { MaincontentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';  

export const routes: Routes = [
  { path: '', component: MaincontentComponent },
  { path: 'imprint', component: ImprintComponent }
];
