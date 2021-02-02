import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  productId = 0;
  productDetails: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

    c1 = 'c1';

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.productId = data.id;
    });

    this.productsService.viewProduct(this.productId).subscribe(productData => {
      this.productDetails = productData;
    });
  }


}
