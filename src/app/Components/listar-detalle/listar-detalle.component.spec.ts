import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDetalleComponent } from './listar-detalle.component';

describe('ListarDetalleComponent', () => {
  let component: ListarDetalleComponent;
  let fixture: ComponentFixture<ListarDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
