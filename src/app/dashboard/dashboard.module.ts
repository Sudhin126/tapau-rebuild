import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PackagesComponent } from './packages/packages.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { StaffsComponent } from './staffs/staffs.component';
import { DboysComponent } from './dboys/dboys.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { SubadminsComponent } from './subadmins/subadmins.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    PackagesComponent,
    CustomersComponent,
    OrdersComponent,
    TransactionsComponent,
    StaffsComponent,
    DboysComponent,
    ReviewsComponent,
    SubadminsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
