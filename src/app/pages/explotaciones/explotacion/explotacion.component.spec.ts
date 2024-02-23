import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplotacionComponent } from './explotacion.component';

describe('ExplotacionComponent', () => {
  let component: ExplotacionComponent;
  let fixture: ComponentFixture<ExplotacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExplotacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExplotacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
