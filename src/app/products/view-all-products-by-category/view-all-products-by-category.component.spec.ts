import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category.component';

describe('ViewAllProductsByCategoryComponent', () => {
  let component: ViewAllProductsByCategoryComponent;
  let fixture: ComponentFixture<ViewAllProductsByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllProductsByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProductsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
