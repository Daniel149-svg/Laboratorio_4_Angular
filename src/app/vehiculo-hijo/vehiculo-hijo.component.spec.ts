import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculoHijoComponent } from './vehiculo-hijo.component';

describe('VehiculoHijoComponent', () => {
  let component: VehiculoHijoComponent;
  let fixture: ComponentFixture<VehiculoHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VehiculoHijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiculoHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
