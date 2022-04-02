import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloorCardComponent } from './floor-card.component';

describe('FloorCardComponent', () => {
  let component: FloorCardComponent;
  let fixture: ComponentFixture<FloorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
