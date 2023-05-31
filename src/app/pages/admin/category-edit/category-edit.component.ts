import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
})
export class CategoryEditComponent implements OnInit {
  name: String = '';
  image: String = '';
  findCate = {};
  id: number = 0;
  constructor(
    private categoryService: CategoryService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.categoryService.getCategory(this.id).subscribe((data) => {
        console.log('data', data);

        this.name = data.name;
        this.image = data.image;
      });
    });
  }
  onHandleAdd(event: any) {
    this.categoryService
      .update({ id: this.id, name: this.name, image: this.image })
      .subscribe((data) => {
        if (data) {
          this.router.navigate(['admin/category']);
        }
      });
  }
}
