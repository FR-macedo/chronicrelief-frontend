import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioMsPage } from './formulario-ms.page';

describe('FormularioMsPage', () => {
  let component: FormularioMsPage;
  let fixture: ComponentFixture<FormularioMsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioMsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
