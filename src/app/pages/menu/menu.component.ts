import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  foodData:any;

  constructor(
    private orderDetailsService: OrderDetailsService
  ) { }

  ngOnInit(): void {
    this.foodData = this.orderDetailsService.foodDetails;
  }
}