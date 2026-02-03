import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnaksComponent } from './snaks-component';

describe('SnaksComponent', () => {
  let component: SnaksComponent;
  let fixture: ComponentFixture<SnaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SnaksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnaksComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
