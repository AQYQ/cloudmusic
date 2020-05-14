import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdiscComponent } from './newdisc.component';

describe('NewdiscComponent', () => {
  let component: NewdiscComponent;
  let fixture: ComponentFixture<NewdiscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdiscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdiscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
