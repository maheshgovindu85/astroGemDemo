import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologersComponent } from './astrologers.component';

describe('AstrologersComponent', () => {
  let component: AstrologersComponent;
  let fixture: ComponentFixture<AstrologersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrologersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
