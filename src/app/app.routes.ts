import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaincontentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './main-content/imprint/imprint.component';  
import { PrivacyPolicyComponent } from './main-content/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: MaincontentComponent },  // Startseite
  { path: 'imprint', component: ImprintComponent },  // Impressum
  { path: 'privacy', component: PrivacyPolicyComponent }  // Datenschutzerklärung
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
