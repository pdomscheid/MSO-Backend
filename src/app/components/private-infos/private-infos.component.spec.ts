import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateInfosComponent } from './private-infos.component';

describe('PrivateInfosComponent', () => {
  let component: PrivateInfosComponent;
  let fixture: ComponentFixture<PrivateInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
