import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-campaign-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './campaign-form.component.html',
  styleUrl: './campaign-form.component.css'
})
export class CampaignFormComponent {
   selectedOption: string = '';
    projectName: string = '';
    constructor(private router: Router) {}

  onStart() {
    // Handle the form submission
    console.log('Selected Option:', this.selectedOption);
    console.log('Project Name:', this.projectName);
    this.router.navigate(['target-component-path']);

  }
}
