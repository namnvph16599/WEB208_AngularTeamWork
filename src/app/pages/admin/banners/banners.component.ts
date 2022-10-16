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
  removeSuccess: boolean = false;
  removeFailed: boolean = false;
  updateSuccess: boolean = false;
  updateFailed: boolean = false;


  constructor(private BannerService: BannerService) { }

  ngOnInit(): void {
    this.BannerService.getBanners().subscribe(banners => {
      this.banners = banners;
    })
  }

  resetStatusRemove() {
    if (this.removeSuccess) this.removeSuccess = false;
    if (this.removeFailed) this.removeFailed = false;
  }
  resetStatusUpdate() {
    if (this.updateSuccess) this.updateSuccess = false;
    if (this.updateFailed) this.updateFailed = false;
  }

  updateBanner(banner?: any) {
    this.BannerService.update({ ...banner, active: !banner.active }).subscribe((newBanner) => {
      this.updateSuccess = true;

      this.banners = this.banners.map(banner => {
        if (banner.id === newBanner.id) return newBanner;
        return banner;
      });
      setTimeout(() => {
        this.resetStatusUpdate()
      }, 3000)

    }, error => {
      this.updateFailed = true;

      setTimeout(() => {
        this.resetStatusUpdate()
      }, 3000)
    })

  }

  removeBanner(id?: number): void {
    if (id) {
      this.BannerService.remove(id).subscribe(() => {
        this.removeSuccess = true;
        this.banners = this.banners.filter(banner => banner.id !== id);
        setTimeout(() => {
          this.resetStatusRemove()
        }, 3000)

      }, error => {
        this.removeFailed = true;

        setTimeout(() => {
          this.resetStatusRemove()
        }, 3000)
      })

    }
  }

}
