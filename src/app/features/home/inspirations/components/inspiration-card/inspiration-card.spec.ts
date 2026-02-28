import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationCard } from './inspiration-card';

describe('InspirationCard', () => {
  let component: InspirationCard;
  let fixture: ComponentFixture<InspirationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspirationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
