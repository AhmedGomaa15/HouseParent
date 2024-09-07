import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularEditorModule } from '@kolkov/angular-editor'; // Import Angular Editor Module

@Component({
  selector: 'app-prob',
  standalone: true,
  imports: [FormsModule, AngularEditorModule],  // Add FormsModule and AngularEditorModule
  templateUrl: './prob.component.html',
  styleUrls: ['./prob.component.css'],
})
export class ProbComponent {
  htmlContent = '';  // Variable for binding editor content

  // Configuration for the editor toolbar and behavior
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    placeholder: 'اكتب تعبيرك عن المنزل...',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    toolbarHiddenButtons: [
      [],  // Customize this if you want to hide certain toolbar buttons
    ],
    defaultFontName: 'Arial',
    defaultFontSize: '4',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
  };
}
