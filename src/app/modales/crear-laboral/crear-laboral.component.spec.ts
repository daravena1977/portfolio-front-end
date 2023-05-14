import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearLaboralComponent } from './crear-laboral.component';

describe('CrearLaboralComponent', () => {
  let component: CrearLaboralComponent;
  let fixture: ComponentFixture<CrearLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
