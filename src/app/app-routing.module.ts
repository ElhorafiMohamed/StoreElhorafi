import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProductsComponent} from "./products/products.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
  },
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

