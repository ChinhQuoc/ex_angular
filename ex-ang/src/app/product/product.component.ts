import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any;
  pages: number[];
  currentPage: number;
  filter: string;

  constructor(
    private shopService: ShopService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe(params => {
      this.currentPage = params['pageNumber'] || 1;
      this.filter = params['filter'] || '';
    });
    this.loadData()
    this.pages = [1, 2, 3, 4, 5];
  }

  delete(id: string) {
    let confirmResult = confirm("Are you sure to delete this product?");
    if (confirmResult) {
      this.shopService.deleteProduct(id).subscribe(res => {
        if(res) {
          alert("Delete success!");
          this.loadData();
        }
      })
    }
  }

  loadData() {
    this.shopService.getList().subscribe(res => {
      return this.products = res;
    }, error => {
      console.log(error);
    });
  }
}
