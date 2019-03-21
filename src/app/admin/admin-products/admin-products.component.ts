import { ProductService } from './../../shared/services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Product[];
  // filteredProducts: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getAll();
  }

  // filter(query: string) {
  //   this.filteredProducts = (query) ?
  //     this.products.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
  //     this.products;
  // }

  ngOnInit() {
  }

}
