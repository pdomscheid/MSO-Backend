import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAIDComponent } from './said.component';

describe('SAIDComponent', () => {
  let component: SAIDComponent;
  let fixture: ComponentFixture<SAIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
