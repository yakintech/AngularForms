import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KisikayitComponent } from './kisikayit.component';

describe('KisikayitComponent', () => {
  let component: KisikayitComponent;
  let fixture: ComponentFixture<KisikayitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KisikayitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KisikayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
