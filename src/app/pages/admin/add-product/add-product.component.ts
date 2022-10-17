import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  category: Category[] = []
  product = {}
  name: string = "";
  image: string = "";
  price: number = 0;
  categoryId: number = 0;
  description: string = "";

  constructor(private productService: ProductService, private categoryService: CategoryService, private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.category = data;
    })
  }

  onHandleAdd() {
    this.product = {
      name: this.name,
      image: this.image,
      price: this.price,
      categoryId: this.categoryId,
      description: this.description
    }
    this.productService.addProduct(this.product).subscribe((item) => {
      if (item) {
        alert('Thêm thành công!')
        this.router.navigateByUrl(`/admin/products`);
      }
    })
  }

}
function getValueFromSelect(value: any): number {
  throw new Error('Function not implemented.');
}

