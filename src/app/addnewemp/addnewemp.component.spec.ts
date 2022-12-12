import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewempComponent } from './addnewemp.component';

describe('AddnewempComponent', () => {
  let component: AddnewempComponent;
  let fixture: ComponentFixture<AddnewempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddnewempComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddnewempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
