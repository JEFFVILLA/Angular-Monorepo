import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GreeetingsComponent } from './greeetings.component';

describe('GreeetingsComponent', () => {
  let component: GreeetingsComponent;
  let fixture: ComponentFixture<GreeetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeetingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
