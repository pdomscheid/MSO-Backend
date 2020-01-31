import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedInfosComponent } from './med-infos.component';

describe('MedInfosComponent', () => {
  let component: MedInfosComponent;
  let fixture: ComponentFixture<MedInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
