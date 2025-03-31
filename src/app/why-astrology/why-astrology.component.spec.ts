import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyAstrologyComponent } from './why-astrology.component';

describe('WhyAstrologyComponent', () => {
  let component: WhyAstrologyComponent;
  let fixture: ComponentFixture<WhyAstrologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyAstrologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyAstrologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
