import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { BannersComponent as ABannersComponent } from './pages/admin/banners/banners.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { ProductsComponent as AProductsComponent } from './pages/admin/products/products.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthorticateGuard } from './services/authorticate.guard';

const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactsComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: AdminLayoutComponent, canActivate: [AuthorticateGuard], children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: AProductsComponent },
      { path: 'add/product', component: AddProductComponent },
      { path: 'edit/:id/product', component: EditProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'banner', component: ABannersComponent },
      { path: 'users', component: UsersComponent },
    ]
  },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
