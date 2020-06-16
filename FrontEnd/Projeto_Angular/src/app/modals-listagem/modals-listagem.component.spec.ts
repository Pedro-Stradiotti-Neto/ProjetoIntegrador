import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalsListagemComponent } from './modals-listagem.component';

describe('ModalsListagemComponent', () => {
  let component: ModalsListagemComponent;
  let fixture: ComponentFixture<ModalsListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalsListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalsListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
