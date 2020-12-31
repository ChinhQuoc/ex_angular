import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopService } from 'src/app/services/shop.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: string;
  response: any;
  product: any;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _shopService: ShopService
  ) { }

  ngOnInit(): void {
    this.id = this._activateRoute.snapshot.paramMap.get('id');
    this._shopService.getProductDetail(this.id).subscribe(res => {
      return this.product = res;
    }, error => {
      console.log(error);
    });
  }
}
