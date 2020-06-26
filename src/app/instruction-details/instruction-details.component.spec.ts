import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionDetailsComponent } from './instruction-details.component';

describe('InstructionDetailsComponent', () => {
  let component: InstructionDetailsComponent;
  let fixture: ComponentFixture<InstructionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
