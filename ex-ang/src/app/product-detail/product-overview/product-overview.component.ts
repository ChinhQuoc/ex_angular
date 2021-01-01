import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-overview',
  templateUrl: './product-overview.component.html',
  styleUrls: ['./product-overview.component.scss']
})
export class ProductOverviewComponent implements OnInit, OnDestroy {
  parentId: string;
  sub: Subscription;

  constructor(
    private _activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sub = this._activateRoute.parent.params.subscribe(
      params =>
        this.parentId = params['id']
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
