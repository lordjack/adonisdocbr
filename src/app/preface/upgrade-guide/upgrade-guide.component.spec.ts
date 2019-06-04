import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeGuideComponent } from './upgrade-guide.component';

describe('UpgradeGuideComponent', () => {
  let component: UpgradeGuideComponent;
  let fixture: ComponentFixture<UpgradeGuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeGuideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
