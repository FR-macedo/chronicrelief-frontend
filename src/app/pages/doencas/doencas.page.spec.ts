import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DoencasPage } from './doencas.page';

describe('DoencasPage', () => {
  let component: DoencasPage;
  let fixture: ComponentFixture<DoencasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DoencasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
