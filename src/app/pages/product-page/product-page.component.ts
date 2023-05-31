import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct, Category } from 'src/app/interfaces';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  categories: Category[] = [];
  products: IProduct[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });

    this.route.queryParams.subscribe((params) => {
      const categoriId = params['category'];
      if (categoriId) {
        this.productService.getProductFilter(categoriId).subscribe((pros) => {
          this.products = pros;
        });
        return;
      }
      this.productService.getProducts().subscribe((pros) => {
        this.products = pros;
      });
    });
  }
}
