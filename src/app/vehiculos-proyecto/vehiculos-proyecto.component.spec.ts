import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculosProyectoComponent } from './vehiculos-proyecto.component';

describe('VehiculosProyectoComponent', () => {
  let component: VehiculosProyectoComponent;
  let fixture: ComponentFixture<VehiculosProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculosProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculosProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
