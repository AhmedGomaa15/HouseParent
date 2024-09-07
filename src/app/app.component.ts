import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CampaignPageComponent } from './Components/Pres-step/campaign-page/campaign-page.component';
import { SelectionComponent } from './Components/selection/selection.component';
import { ProbComponent } from './Components/prob/prob.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CampaignPageComponent, SelectionComponent, ProbComponent],  // Import standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'HouseParent';
  htmlContent: string = '';
}
