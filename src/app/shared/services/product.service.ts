import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  products: any[] = [
    { title: 'tomatos', price: 150, category: 'Vegetables', imageUrl: 'url' },
    { title: 'botatos', price: 300, category: 'Vegetables', imageUrl: 'url' },
    { title: 'something', price: 450, category: 'Bread', imageUrl: 'url' },
    { title: 'otherthing', price: 400, category: 'Bread', imageUrl: 'url' }
  ];

  constructor() { }

  create(product) {
    this.products.push(product);
  }

  getAll() {
    return this.products;
  }

  get(productTitle: string) {
    for (const product of this.products) {
      if (productTitle.startsWith(product.title)) {
        return product;
      }
    }
  }
}
