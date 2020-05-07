import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalNotCadastroComponentComponent } from './modal-not-cadastro-component.component';

describe('ModalNotCadastroComponentComponent', () => {
  let component: ModalNotCadastroComponentComponent;
  let fixture: ComponentFixture<ModalNotCadastroComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalNotCadastroComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalNotCadastroComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
