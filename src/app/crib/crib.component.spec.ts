import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribComponent } from './crib.component';

describe('CribComponent', () => {
  let component: CribComponent;
  let fixture: ComponentFixture<CribComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
