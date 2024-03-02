import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcelaButtonComponent } from './parcela-button.component';

describe('ExplotacionButtonComponent', () => {
  let component: ParcelaButtonComponent;
  let fixture: ComponentFixture<ParcelaButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParcelaButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParcelaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
