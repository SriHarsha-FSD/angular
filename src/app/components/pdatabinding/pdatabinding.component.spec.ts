import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdatabindingComponent } from './pdatabinding.component';

describe('PdatabindingComponent', () => {
  let component: PdatabindingComponent;
  let fixture: ComponentFixture<PdatabindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdatabindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdatabindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
