import { CategoryService } from './../../shared/services/category.service';
import { Category } from './../../models/Category';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories: Category[] = [];
  @Input('category') category: string;
  constructor(categoryService: CategoryService) {
    this.categories = categoryService.getAll();

   }

  ngOnInit() {
  }

}
