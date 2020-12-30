import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any;
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getList().subscribe(res => {
      return this.products = res;
    }, error => {
      console.log(error);
    });
  }

}
