import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-framework/category';
import { ProductsService } from '../products.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-products-by-category',
  templateUrl: './view-all-products-by-category.component.html',
  styleUrls: ['./view-all-products-by-category.component.css']
})
export class ViewAllProductsByCategoryComponent implements OnInit {

  searchCategory: Category;
  productList: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe(data => {
    console.log(data);
    this.searchCategory = data.id;
    console.log(this.searchCategory);
    this.productsService.searchCategoryProducts(this.searchCategory).subscribe(categoryData => {
      console.log(categoryData);
      this.productList = categoryData;
    });
  });

  }

}
