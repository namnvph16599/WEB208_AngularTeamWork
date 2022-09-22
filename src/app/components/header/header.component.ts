import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  toggle: boolean = false;
  toggleUser: boolean = false;
  search: string = ''
  handleToggle(value?: string) {
    if (value === 'user') {
      this.toggleUser = !this.toggleUser;
      return
    }
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
  }

}
