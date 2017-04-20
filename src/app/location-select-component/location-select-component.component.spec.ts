import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSelectComponentComponent } from './location-select-component.component';

describe('LocationSelectComponentComponent', () => {
  let component: LocationSelectComponentComponent;
  let fixture: ComponentFixture<LocationSelectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationSelectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationSelectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
