import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignOptionsComponent } from './campaign-options.component';

describe('CampaignOptionsComponent', () => {
  let component: CampaignOptionsComponent;
  let fixture: ComponentFixture<CampaignOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
