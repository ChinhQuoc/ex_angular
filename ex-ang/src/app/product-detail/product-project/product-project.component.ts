import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-project',
  templateUrl: './product-project.component.html',
  styleUrls: ['./product-project.component.scss']
})
export class ProductProjectComponent implements OnInit, OnDestroy {
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
