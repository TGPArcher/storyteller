import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCatalogComponent } from './story-catalog.component';

describe('StoryCatalogComponent', () => {
  let component: StoryCatalogComponent;
  let fixture: ComponentFixture<StoryCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoryCatalogComponent]
    });
    fixture = TestBed.createComponent(StoryCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
