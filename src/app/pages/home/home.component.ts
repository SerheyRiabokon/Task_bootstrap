import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/services/order-details/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodData:any;

  constructor(
    private orderDetailsService: OrderDetailsService
  ) { }

  ngOnInit(): void {
    this.foodData = this.orderDetailsService.foodDetails;
  }

}