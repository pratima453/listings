import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribslistingComponent } from './cribslisting.component';

describe('CribslistingComponent', () => {
  let component: CribslistingComponent;
  let fixture: ComponentFixture<CribslistingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribslistingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribslistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
