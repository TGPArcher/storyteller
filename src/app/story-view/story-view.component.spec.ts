import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryViewComponent } from './story-view.component';

describe('StoryViewComponent', () => {
  let component: StoryViewComponent;
  let fixture: ComponentFixture<StoryViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoryViewComponent]
    });
    fixture = TestBed.createComponent(StoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
