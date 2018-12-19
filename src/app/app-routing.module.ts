import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockCreateComponent } from './components/stock-create/stock-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/stock_create', pathMatch: 'full' },  
  // { path: 'stock', component: StockComponent } ,
  { path: 'stock_create', component: StockCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { enableTracing: false } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
