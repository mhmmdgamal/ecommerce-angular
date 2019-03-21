import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  private categories = [
    { id: 1, name: 'Bread' },
    { id: 2, name: 'Dairy' },
    { id: 3, name: 'Fruits' },
    { id: 4, name: 'Vegetables' },
  ];

  constructor() { }

  getAll() {
    return this.categories;
  }
}
