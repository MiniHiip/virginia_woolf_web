import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSecundariaComponent } from './module-secundaria.component';

describe('ModuleSecundariaComponent', () => {
  let component: ModuleSecundariaComponent;
  let fixture: ComponentFixture<ModuleSecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModuleSecundariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
