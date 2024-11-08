import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoVehiculoComponent } from './contacto-vehiculo.component';

describe('ContactoVehiculoComponent', () => {
  let component: ContactoVehiculoComponent;
  let fixture: ComponentFixture<ContactoVehiculoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactoVehiculoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
