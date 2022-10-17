import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-banner',
  templateUrl: './sub-banner.component.html',
  styleUrls: ['./sub-banner.component.css']
})
export class SubBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  imageObject: Array<object> = [{
    image: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_4.jpg?1663857245989',
    thumbImage: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_4.jpg?1663857245989',
  }, {
    image: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_3.jpg?1663857245989', // Support base64 image
    thumbImage: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_3.jpg?1663857245989', // Support base64 image
  }, {
    image: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_4.jpg?1663857245989',
    thumbImage: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_4.jpg?1663857245989',
  }, {
    image: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_3.jpg?1663857245989', // Support base64 image
    thumbImage: 'https://bizweb.sapocdn.net/100/438/408/themes/863105/assets/slider_3.jpg?1663857245989', // Support base64 image
  },
  ];

}
