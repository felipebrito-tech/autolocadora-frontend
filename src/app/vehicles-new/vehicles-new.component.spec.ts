import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesNewComponent } from './vehicles-new.component';

describe('VehiclesNewComponent', () => {
  let component: VehiclesNewComponent;
  let fixture: ComponentFixture<VehiclesNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
