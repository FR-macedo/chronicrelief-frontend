import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioPsPage } from './formulario-ps.page';

describe('FormularioPsPage', () => {
  let component: FormularioPsPage;
  let fixture: ComponentFixture<FormularioPsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
