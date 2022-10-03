import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { NoPageComponent } from './pages/no-page/no-page.component';
import { BannerComponent } from './components/banner/banner.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SubBannerComponent } from './components/sub-banner/sub-banner.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './pages/admin/category/category.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { BannersComponent } from './pages/admin/banners/banners.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    ContactsComponent,
    SignupComponent,
    MainLayoutComponent,
    AdminLayoutComponent,
    DashboardComponent,
    ProductsComponent,
    NoPageComponent,
    BannerComponent,
    HeaderComponent,
    FooterComponent,
    SubBannerComponent,
    DetailProductComponent,
    NavbarComponent,
    CategoryComponent,
    UsersComponent,
    BannersComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SwiperModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
