import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../model/product.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button'; // Si usas botones
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule,MatCardModule,MatButtonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  cart: Product[] = []; // Especifica que cart es un arreglo de productos
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);
  cart$ = this.cartSubject.asObservable(); // Exponer el observable

  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    // Obtener los productos del carrito desde el servicio
    this.cartService.cart$.subscribe(cart => {
      this.cart = cart;
    });
  }

  // Método para añadir un producto al carrito
  addToCart(product: Product): void {
    this.cart.push(product);
    this.cartSubject.next(this.cart);  // Emitir los cambios al carrito
  }

  // Método para eliminar un producto del carrito
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
    this.cartSubject.next(this.cart);  // Emitir los cambios al carrito
  }

}
