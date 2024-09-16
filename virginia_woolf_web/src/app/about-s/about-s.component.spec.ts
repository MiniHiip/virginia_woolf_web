import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSComponent } from './about-s.component';

describe('AboutSComponent', () => {
  let component: AboutSComponent;
  let fixture: ComponentFixture<AboutSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
