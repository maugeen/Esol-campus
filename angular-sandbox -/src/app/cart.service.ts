import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: Product[] = [];

  constructor(private http: HttpClient) {

  }

  // agregar al carrito
  addToCart(product: Product): void {
    this.items.push(product);
  }

  // mostrar el carrito
  getItems(): Product[] {
    return this.items;
  }

  // vaciar el carrito
  clearCart(): Product[] {
    this.items = [];
    return this.items;
  }

  //costos de envío
  getShippingPrices() {
    return this.http.get<{type: string, price: number} []>
    ("../assets/shipping.json")
  }
}