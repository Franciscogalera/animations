import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveTextAlongAMotionPathComponent } from './move-text-along-a-motion-path.component';

describe('MoveTextAlongAMotionPathComponent', () => {
  let component: MoveTextAlongAMotionPathComponent;
  let fixture: ComponentFixture<MoveTextAlongAMotionPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveTextAlongAMotionPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveTextAlongAMotionPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
