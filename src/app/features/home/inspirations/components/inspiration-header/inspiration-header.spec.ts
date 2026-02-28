import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationHeader } from './inspiration-header';

describe('InspirationHeader', () => {
  let component: InspirationHeader;
  let fixture: ComponentFixture<InspirationHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InspirationHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspirationHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
