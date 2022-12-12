import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtempdetComponent } from './updtempdet.component';

describe('UpdtempdetComponent', () => {
  let component: UpdtempdetComponent;
  let fixture: ComponentFixture<UpdtempdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdtempdetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdtempdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
