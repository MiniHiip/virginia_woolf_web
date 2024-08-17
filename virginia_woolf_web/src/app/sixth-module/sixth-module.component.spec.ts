import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthModuleComponent } from './sixth-module.component';

describe('SixthModuleComponent', () => {
  let component: SixthModuleComponent;
  let fixture: ComponentFixture<SixthModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SixthModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
