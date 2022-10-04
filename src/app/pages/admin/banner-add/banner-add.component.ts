import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IBanner } from 'src/app/interfaces/banner';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banner-add',
  templateUrl: './banner-add.component.html',
  styleUrls: ['./banner-add.component.css']
})
export class BannerAddComponent implements OnInit {

  constructor(
    private router: Router,
    private bannerService: BannerService
  ) { }

  addFailed: boolean = false

  ngOnInit(): void {
  }


  resetNoti() {
    this.addFailed = false;
  }

  handleAddBanner(bannerForm: NgForm) {
    this.bannerService.add(bannerForm.form.value).subscribe((banner) => {
      this.router.navigateByUrl("/admin/banner");
    }), (error: any) => {
      this.addFailed = true;
      setTimeout(() => {
        this.resetNoti()
      }, 3000)
    }
  }
}
