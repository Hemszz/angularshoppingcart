import { Component, OnInit } from '@angular/core';
import { CartService } from './../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts;
  constructor(private _cartService:CartService) { 
    this.shippingCosts = this._cartService.getShippingPrices();
  }

  ngOnInit() {
  }

}
