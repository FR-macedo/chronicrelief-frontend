import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormularioJpPage } from './formulario-jp.page';

describe('FormularioJpPage', () => {
  let component: FormularioJpPage;
  let fixture: ComponentFixture<FormularioJpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioJpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
