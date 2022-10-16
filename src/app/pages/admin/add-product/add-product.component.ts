import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product = {}
  name: string = "";
  image: string = "";
  price: number = 0;
  description: string = "";

  
  constructor(private productService: ProductService, private router: Router, private httpClient: HttpClient) {}


  ngOnInit(): void {
  }


  onHandleAdd() {
    this.product = {
      name: this.name,
      image: "https://bizweb.sapocdn.net/thumb/large/100/438/408/products/akn5040-vag-6-72739908-9368-41a2-879a-63a69140b3e4.jpg?v=1663550316000",
      price: this.price,
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
