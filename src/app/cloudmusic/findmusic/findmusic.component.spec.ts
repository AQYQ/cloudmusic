import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmusicComponent } from './findmusic.component';

describe('FindmusicComponent', () => {
  let component: FindmusicComponent;
  let fixture: ComponentFixture<FindmusicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindmusicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindmusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
