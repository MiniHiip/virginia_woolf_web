import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePrimariaComponent } from './module-primaria.component';

describe('ModulePrimariaComponent', () => {
  let component: ModulePrimariaComponent;
  let fixture: ComponentFixture<ModulePrimariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulePrimariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulePrimariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
