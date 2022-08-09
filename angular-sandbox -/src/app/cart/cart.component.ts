import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';
import { Product, products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent  {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    adress:""
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
    ) { }

  onSubmit(): void {
    this.items = this.cartService.clearCart()
    console.warn("Su orden fue enviada", this.checkoutForm.value);
    this.checkoutForm.reset()

  }

}
