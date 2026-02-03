import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliciousMenuComponent } from './delicious-menu-component';

describe('DeliciousMenuComponent', () => {
  let component: DeliciousMenuComponent;
  let fixture: ComponentFixture<DeliciousMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliciousMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliciousMenuComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
