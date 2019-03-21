import { ProductFilterComponent } from './products/product-filter/product-filter.component';

// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms/';
import { CustomFormsModule } from 'ng2-validation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule } from '@angular/material';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { MatTableComponent } from './mat-table/mat-table.component';


// services
import { UserService } from './shared/services/user.service';
import { CategoryService } from './shared/services/category.service';
import { ProductService } from './shared/services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    MyOrdersComponent,
    OrderSuccessComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    ProductCardComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
    ProductsComponent,
    ProfileComponent,
    ProductFormComponent,
    MatTableComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    CustomFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    RouterModule.forRoot([
      { path: '', component: ProductsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'check-out', component: CheckOutComponent },
      { path: 'order-success', component: OrderSuccessComponent },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'admin/orders', component: AdminOrdersComponent },
      { path: 'admin/products/new', component: ProductFormComponent },
      { path: 'admin/products/:id', component: ProductFormComponent },
      { path: 'admin/products', component: AdminProductsComponent },
      { path: 'profile', component: ProfileComponent },
    ]),
  ],
  providers: [
    UserService,
    CategoryService,
    ProductService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

