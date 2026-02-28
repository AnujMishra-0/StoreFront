import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inspirations } from './inspirations';

describe('Inspirations', () => {
  let component: Inspirations;
  let fixture: ComponentFixture<Inspirations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inspirations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inspirations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
