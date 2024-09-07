import { Component } from '@angular/core';
import { CampaignOptionsComponent } from "../campaign-options/campaign-options.component";
import { CampaignFormComponent } from "../campaign-form/campaign-form.component";

@Component({
  selector: 'app-campaign-page',
  standalone: true,
  imports: [CampaignOptionsComponent, CampaignFormComponent],
  templateUrl: './campaign-page.component.html',
  styleUrl: './campaign-page.component.css'
})
export class CampaignPageComponent {

}
