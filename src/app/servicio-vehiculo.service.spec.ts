import { TestBed } from '@angular/core/testing';
import { ServicioVehiculoService } from './servicio-vehiculo.service';


describe('ServicioVehiculoService', () => {
  let service: ServicioVehiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioVehiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
