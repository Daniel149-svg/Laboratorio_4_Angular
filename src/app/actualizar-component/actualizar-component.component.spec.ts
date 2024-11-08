import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarComponentComponent } from './actualizar-component.component';

describe('ActualizarComponentComponent', () => {
  let component: ActualizarComponentComponent;
  let fixture: ComponentFixture<ActualizarComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
