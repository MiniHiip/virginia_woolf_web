import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulePreparatoriaComponent } from './module-preparatoria.component';

describe('ModulePreparatoriaComponent', () => {
  let component: ModulePreparatoriaComponent;
  let fixture: ComponentFixture<ModulePreparatoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulePreparatoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulePreparatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
