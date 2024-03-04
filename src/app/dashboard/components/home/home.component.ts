import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products: any = [
    { img: '/assets/images/home1.jpg', name: 'home1' },
    { img: '/assets/images/home2.jpg', name: 'home2' },
    { img: '/assets/images/home3.jpg', name: 'home3' },
    { img: '/assets/images/home4.jpg', name: 'home4' },
    { img: '/assets/images/home5.jpg', name: 'home5' },
  ];
  imgUrl: string = '';

  responsiveOptions: any[] | undefined;

  constructor() {
    this.imgUrl = 'assets/images/home1.jpg';
  }

  ngOnInit() {
    // this.productService.getProductsSmall().then((products) => {
    //     this.products = products;
    // });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'danger';
    }
  }
}
