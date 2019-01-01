import { ProductService } from './../../shared/services/product.service';
import { CategoryService } from './../../shared/services/category.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories: any[] = [];
  product = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.categories = categoryService.getCategories();

    const title = this.route.snapshot.paramMap.get('title');

    if (title) {
      this.product = this.productService.get(title);
    }

  }

  save(product) {
    this.productService.create(product);
    this.router.navigate(['/admin/products']);
  }

  ngOnInit() {
  }
}
