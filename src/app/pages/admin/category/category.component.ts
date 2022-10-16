import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public ListCate:any= []
  i = 0
  constructor(private categoryService:CategoryService,private router:Router) { }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe(data=>{
      this.ListCate=data
    })
  }
  removeItem(id:number){
    this.categoryService.remove(id).subscribe(data=>{
      if (data) {
        this.ListCate = this.ListCate.filter((item:any) => item.id !== id)
      }
    })
  }
}