import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AboutComponent } from './pages/about/about.component';
import { AddProductComponent } from './pages/admin/add-product/add-product.component';
import { BannerAddComponent } from './pages/admin/banner-add/banner-add.component';
import { BannersComponent as ABannersComponent } from './pages/admin/banners/banners.component';
import { CategoryAddComponent } from './pages/admin/category-add/category-add.component';
import { CategoryEditComponent } from './pages/admin/category-edit/category-edit.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { EditProductComponent } from './pages/admin/edit-product/edit-product.component';
import { ProductsComponent as AProductsComponent } from './pages/admin/products/products.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthorticateGuard } from './services/authorticate.guard';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'product', component: ProductPageComponent },
      { path: 'product/:id', component: DetailProductComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    canActivate: [AuthorticateGuard],
    children: [
      { path: '', redirectTo: 'products', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'products', component: AProductsComponent },
      { path: 'add/product', component: AddProductComponent },
      { path: 'edit/:id/product', component: EditProductComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'category/add', component: CategoryAddComponent },
      { path: 'category/edit/:id', component: CategoryEditComponent },
      { path: 'banner', component: ABannersComponent },
      { path: 'banner/add', component: BannerAddComponent },
      { path: 'users', component: UsersComponent },
    ],
  },
  { path: '**', component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
