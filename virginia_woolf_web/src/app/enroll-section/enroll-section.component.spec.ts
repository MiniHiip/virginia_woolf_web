import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollSectionComponent } from './enroll-section.component';

describe('EnrollSectionComponent', () => {
  let component: EnrollSectionComponent;
  let fixture: ComponentFixture<EnrollSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
