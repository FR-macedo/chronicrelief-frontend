import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicacoesPage } from './medicacoes.page';

describe('MedicacoesPage', () => {
  let component: MedicacoesPage;
  let fixture: ComponentFixture<MedicacoesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicacoesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
