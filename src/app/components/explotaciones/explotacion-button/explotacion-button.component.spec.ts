import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplotacionButtonComponent } from './explotacion-button.component';

describe('ExplotacionButtonComponent', () => {
  let component: ExplotacionButtonComponent;
  let fixture: ComponentFixture<ExplotacionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplotacionButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplotacionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
