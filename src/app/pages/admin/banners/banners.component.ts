import { Component, OnInit } from '@angular/core';
import { IBanner } from 'src/app/interfaces/banner';
import { BannerService } from 'src/app/services/banner.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {
  banners: IBanner[] = []

  constructor(private BannerService: BannerService) { }

  ngOnInit(): void {
    this.BannerService.getBanners().subscribe(banners => {
      this.banners = banners;
    })
  }

}
