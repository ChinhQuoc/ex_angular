import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Injectable()
export class CheckSaveFormGuard implements CanDeactivate<ProductDetailComponent> {
  canDeactivate(component: ProductDetailComponent) {
    alert(`You cant not save page without saving data`)
    return false;
  }
}
