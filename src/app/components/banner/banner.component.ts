import { Component, OnInit } from "@angular/core";
import { IBanner } from "src/app/interfaces/banner";
import { BannerService } from "src/app/services/banner.service";

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannersActive: IBanner[] = []
  constructor(private BannerService: BannerService) { }

  ngOnInit(): void {
    this.BannerService.getBanners().subscribe(banners => {
      this.bannersActive = banners.filter(banner => banner.active);
    })
  }
}
