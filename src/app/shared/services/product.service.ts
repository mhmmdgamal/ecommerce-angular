import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Product } from 'src/app/models/product';

@Injectable()
export class ProductService {
  products: Product[] = [
    { id: 1, title: 'tomatos', price: 150, category: 'Vegetables', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { id: 2, title: 'botatos', price: 300, category: 'Vegetables', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { id: 3, title: 'something', price: 450, category: 'Bread', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { id: 4, title: 'otherthing', price: 400, category: 'Bread', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { id: 5, title: 'otherthing', price: 400, category: 'Bread', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { id: 6, title: 'otherthing', price: 400, category: 'Bread', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg' },
    { id: 7, title: 'otherthing', price: 400, category: 'Bread', imageUrl: 'https://angular.io/assets/images/logos/angular/angular.svg' }
  ];

  constructor() { }

  create(product: Product) {
    const productCount = this.products.length;
    product.id = productCount + 1;
    this.products.push(product);
  }

  getAll() {
    return this.products;
  }

  get(productId: number) {
    for (const product of this.products) {
      if (productId === product.id) {
        return product;
      }
    }
  }

  update(productId: number, product: Product) {
    for (let prod of this.products) {
      if (productId === prod.id) {
        prod = product;
        prod.id = productId;
      }
    }
  }

  delete(productId: number) {
    this.products.splice(productId - 1, 1);
  }
}
