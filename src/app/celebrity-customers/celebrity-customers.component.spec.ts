import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityCustomersComponent } from './celebrity-customers.component';

describe('CelebrityCustomersComponent', () => {
  let component: CelebrityCustomersComponent;
  let fixture: ComponentFixture<CelebrityCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CelebrityCustomersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrityCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
