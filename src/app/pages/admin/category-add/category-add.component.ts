import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  name:String = ''
  category:Category = {name:''}

  constructor(private categoryService:CategoryService,private router:Router ) { }

  ngOnInit(): void {
  }
  onHandleAdd(event:any){
    this.category = {
      name:this.name
    }
    this.categoryService.addCategory(this.category).subscribe((data)=>{
      if (data) {
        this.router.navigate(['admin/category'])
      }
    })
  }
}