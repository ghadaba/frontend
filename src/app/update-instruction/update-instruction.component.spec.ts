import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstructionComponent } from './update-instruction.component';

describe('UpdateInstructionComponent', () => {
  let component: UpdateInstructionComponent;
  let fixture: ComponentFixture<UpdateInstructionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInstructionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInstructionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
