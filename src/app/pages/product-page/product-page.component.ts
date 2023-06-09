import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Event, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { IProduct, Category } from 'src/app/interfaces';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit {
  search: string = '';
  categories: Category[] = [];
  products: IProduct[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    router.events
      .pipe(filter((e: Event): e is RouterEvent => e instanceof RouterEvent))
      .subscribe((e: RouterEvent) => {
        // handle search
        const isSearch = e.url.indexOf('search');
        if (isSearch < 0) return;
        const valueSearch = e.url.slice(16);
        if (this.search !== valueSearch) {
          this.productService.searchProduct(valueSearch).subscribe((pros) => {
            this.products = pros;
            this.search = valueSearch;
          });
        }
      });
  }

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
      if (!this.search) {
        this.productService.getProducts().subscribe((pros) => {
          this.products = pros;
        });
      }
    });
  }
}
