// modules
import { BrowserModule } from '@angular/platform-browser';
// import { BrowserModule } from '@angular/platform-browser/src/browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

// services
import { UserService } from './shared/user.service';
import { CommonModule } from '@angular/common';

//pahts
const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    },
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'user-list',
      component: UserListComponent
    },
    {
      path: 'user-add',
      component: UserAddComponent
    },
    {
      path: 'user-edit/:id',
      component: UserEditComponent
    }
  ];

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      UserListComponent,
      UserAddComponent,
      UserEditComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      MatButtonModule,
      MatCardModule,
      MatInputModule,
      MatListModule,
      MatToolbarModule,
      FormsModule,
      RouterModule.forRoot(appRoutes),
      BrowserAnimationsModule,
      CommonModule
   ],
   providers: [
      UserService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
