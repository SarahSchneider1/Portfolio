import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';  

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'] 
})
export class PrivacyPolicyComponent {
  
  constructor(private location: Location) {} 

}
