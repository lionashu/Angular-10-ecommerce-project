import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllProductsComponent } from './view-all-products.component';

describe('ViewAllProductsComponent', () => {
  let component: ViewAllProductsComponent;
  let fixture: ComponentFixture<ViewAllProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
