import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishpageComponent } from './fishpage.component';

describe('FishpageComponent', () => {
  let component: FishpageComponent;
  let fixture: ComponentFixture<FishpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
