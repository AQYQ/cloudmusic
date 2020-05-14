import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorradioComponent } from './anchorradio.component';

describe('AnchorradioComponent', () => {
  let component: AnchorradioComponent;
  let fixture: ComponentFixture<AnchorradioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnchorradioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnchorradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
