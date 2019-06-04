import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionGuideComponent } from './contribution-guide.component';

describe('ContributionGuideComponent', () => {
  let component: ContributionGuideComponent;
  let fixture: ComponentFixture<ContributionGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
