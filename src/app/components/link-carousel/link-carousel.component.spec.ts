import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkCarouselComponent } from './link-carousel.component';

describe('LinkCarouselComponent', () => {
  let component: LinkCarouselComponent;
  let fixture: ComponentFixture<LinkCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
