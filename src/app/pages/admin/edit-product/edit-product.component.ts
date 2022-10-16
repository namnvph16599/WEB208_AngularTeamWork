import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }
  product!: IProduct;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      if (params) {
        this.productService.getProduct(id).subscribe(item => {
          this.product = item;
        })
      }
    });
  }

  // onChange() {
  //   const upload: any = document.querySelector('#mypicture')
  //   const preview: any = document.querySelector('.preview')   
  //   const file = upload.files[0]
  //   if(!file) return
  //   const img = document.querySelector('.preview-img');
  //   img.src = URL.createObjectURL(file)
  //   // var fileReader = new FileReader();
  //   // fileReader.readAsDataURL(file);
  //   // fileReader.onloadend = function(e:any) {
  //   //     img.src = e.target.result;
  //   // }
  // }

  onHandleEdit() {
    this.productService.editProduct(this.product).subscribe((item) => {
      if(item) {
        alert('Cập nhật thành công!')
        this.router.navigateByUrl(`/admin/products`);
      }
    })
  }
}
