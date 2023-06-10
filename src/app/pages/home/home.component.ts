import { Component, OnInit } from '@angular/core';
import { Category, IProduct } from 'src/app/interfaces';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  categoris: Category[] = [];
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categoris = res;
    });
    this.productService.getProducts().subscribe((pros) => {
      let rs: any = [];
      pros.forEach((item) => {
        const isExitCategory = rs.find(
          (p: any) => p.categoryId === item.categoryId
        );
        if (isExitCategory) {
          const idx = rs.findIndex(
            (i: any) => i.categoryId === item.categoryId
          );
          rs[idx] = {
            ...rs[idx],
            data: [...rs[idx].data, item],
          };
          return;
        }
        const category = this.categoris.find((c) => c.id === item.categoryId);
        rs = [
          ...rs,
          {
            categoryId: item.categoryId,
            categoryName: category ? category.name : '',
            data: [item],
          },
        ];
      });
      console.log('rs', rs);
      this.products = rs;
    });
  }
}
