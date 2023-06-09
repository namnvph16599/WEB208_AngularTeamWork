import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { IUserInfo } from 'src/app/interfaces/user';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  toggle: boolean = false;
  toggleUser: boolean = false;
  search: string = '';
  user: any = {};
  isLogged: boolean = false;
  categories: Category[] = [];
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    });
    const userInfo = localStorage.getItem('user');
    if (userInfo) {
      this.user = JSON.parse(userInfo);
      this.isLogged = true;
    }
  }
  handleToggle(value?: string) {
    if (value === 'user') {
      this.toggleUser = !this.toggleUser;
      return;
    }
    this.toggle = !this.toggle;
  }

  logout() {
    localStorage.removeItem('user');
  }

  onSubmit(): void {
    this.router.navigate(['/product', { search: this.search }]);
  }
}
