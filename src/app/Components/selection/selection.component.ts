import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  selectedOption: any = null;
  currentStep: number = 1; // Step to track which part of the form is being displayed
  
  // Step 1 options
  optionsStep1 = [
    { id: 1, label: 'القاهرة', value: 'cairo', iconClass: 'fa fa-home' },
    { id: 2, label: 'الساحل الشمالي', value: 'north_coast', iconClass: 'fa fa-truck' },
    { id: 3, label: 'دهب', value: 'dahab', iconClass: 'fa fa-users' }
  ];

  // Step 2 options (house types)
  optionsStep2 = [
    { id: 1, label: 'شقة سكنية', value: 'apartment', iconClass: 'fa-solid fa-building' },
    { id: 2, label: 'شقة دوبليكس', value: 'duplex', iconClass: 'fa-solid fa-landmark' },
    { id: 3, label: 'فيلا', value: 'villa', iconClass: 'fa-solid fa-film' }
  ];

  get options() {
    return this.currentStep === 1 ? this.optionsStep1 : this.optionsStep2;
  }

  get buttonText() {
    return this.currentStep === 1 ? 'ابدأ الآن' : 'التالي';
  }

  get headerText() {
    return this.currentStep === 1 ? 'اختر المكان المفضل لسكنك' : 'اختر نوع المنزل';
  }

  selectOption(option: any) {
    this.selectedOption = option;
  }

  startNow() {
    if (this.currentStep === 1) {
      // Move to step 2
      this.currentStep = 2;
      this.selectedOption = null; // Reset selection
    } else {
      // Logic to proceed after step 2 (e.g., submit the form)
      console.log('Selected house type:', this.selectedOption);
    }
  }
    // Function to handle the back button
    goBack() {
      if (this.currentStep === 2) {
        this.currentStep = 1; // Go back to step 1
        this.selectedOption = null; // Reset selection
      }
    }
  
}
