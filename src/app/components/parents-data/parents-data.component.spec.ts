import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsDataComponent } from './parents-data.component';

describe('ParentsDataComponent', () => {
  let component: ParentsDataComponent;
  let fixture: ComponentFixture<ParentsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentsDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
