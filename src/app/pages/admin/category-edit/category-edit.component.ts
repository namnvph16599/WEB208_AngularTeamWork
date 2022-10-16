import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  name:String = ''
  findCate = {}
  category:Category = {name:''}
  id:number = 0
  constructor(private categoryService:CategoryService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      this.categoryService.findCategory(this.id).subscribe(data=>{
        this.name=data.name
      })
    });
  }
  onHandleAdd(event:any){
    this.category = {
      id:this.id,
      name:this.name
    }
    this.categoryService.updateCategory(this.category).subscribe(data=>{
      if (data) {
        this.router.navigate(['admin/category'])
      }
    })
  }
}