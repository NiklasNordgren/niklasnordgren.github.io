import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessconceptComponent } from './businessconcept.component';

describe('BusinessconceptComponent', () => {
  let component: BusinessconceptComponent;
  let fixture: ComponentFixture<BusinessconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessconceptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
