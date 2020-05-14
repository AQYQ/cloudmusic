import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicmallComponent } from './musicmall.component';

describe('MusicmallComponent', () => {
  let component: MusicmallComponent;
  let fixture: ComponentFixture<MusicmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
