import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdModuleComponent } from './third-module.component';

describe('ThirdModuleComponent', () => {
  let component: ThirdModuleComponent;
  let fixture: ComponentFixture<ThirdModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThirdModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
