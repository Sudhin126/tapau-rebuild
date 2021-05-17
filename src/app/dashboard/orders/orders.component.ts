import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  listss=[];

  constructor(private ordersService: OrdersService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    debugger;
    this.ordersService.getList().subscribe((data)=>{
      debugger;
      this.listss = data["data"];
      // this.searches.sort((a,b) => a.coName.localeCompare(b.coName));
    });
}
}


