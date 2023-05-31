import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  id = '';
  product: IProduct | undefined;
  productSame: IProduct[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (!params['id']) return;
      const id = params['id'];
      this.id = id;
      this.productService.getProduct(id).subscribe((p) => {
        this.product = p;
      });
    });
  }
}
