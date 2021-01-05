import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductComponent } from 'src/app/product/product.component';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';
import { ProductDetailComponent } from 'src/app/product-detail/product-detail.component';
import { ProductOverviewComponent } from 'src/app/product-detail/product-overview/product-overview.component';
import { ProductProjectComponent } from 'src/app/product-detail/product-project/product-project.component';
import { LoginComponent } from 'src/app/login/login.component';
import { CheckLoginGuard } from 'src/app/guard/check-login.guard';
import { CheckSaveFormGuard } from 'src/app/guard/check-save-form.guard';
import { ProductFormComponent } from 'src/app/product-form/product-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // pathMatch: 'full': nếu đúng path là '' thì trang sẽ tự động redirect sang trang lít product
  // pathMatch: 'frefix': path chỉ cần đúng 1 phần
  // { path: '', redirectTo: 'listProducts', pathMatch: 'full' },
  { path: 'listProducts', component: ProductComponent, canActivate: [CheckLoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'editProduct/:id', component: ProductFormComponent },
  {
    path: 'product/:id', component: ProductDetailComponent, canDeactivate: [CheckSaveFormGuard],
    children: [
      { path: 'productOverview', component: ProductOverviewComponent },
      { path: 'productProject', component: ProductProjectComponent }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
