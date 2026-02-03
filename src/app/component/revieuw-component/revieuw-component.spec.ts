import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevieuwComponent } from './revieuw-component';

describe('RevieuwComponent', () => {
  let component: RevieuwComponent;
  let fixture: ComponentFixture<RevieuwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevieuwComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevieuwComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
