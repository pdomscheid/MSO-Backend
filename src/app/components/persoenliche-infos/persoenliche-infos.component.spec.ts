import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoenlicheInfosComponent } from './persoenliche-infos.component';

describe('PersoenlicheInfosComponent', () => {
  let component: PersoenlicheInfosComponent;
  let fixture: ComponentFixture<PersoenlicheInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersoenlicheInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersoenlicheInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
