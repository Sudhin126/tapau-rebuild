import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard.component';
import { DboysComponent } from './dboys/dboys.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PackagesComponent } from './packages/packages.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { StaffsComponent } from './staffs/staffs.component';
import { SubadminsComponent } from './subadmins/subadmins.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: '', component: HomeComponent},
    {path: 'packages', component: PackagesComponent},
    {path: 'customers', component: CustomersComponent},
    {path: 'orders', component: OrdersComponent},
    {path: 'transactions', component: TransactionsComponent},
    {path: 'staffs', component: StaffsComponent},
    {path: 'dboys', component: DboysComponent},
    {path: 'reviews', component: ReviewsComponent},
    {path: 'subadmins', component: SubadminsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
