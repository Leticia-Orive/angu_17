import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './model/product.model';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = [];
// Mantener una lista de productos en el carrito
  private cartSubject = new BehaviorSubject<Product[]>(this.cart);
  // Observar los cambios en el carrito
  cart$ = this.cartSubject.asObservable();
   
  
  constructor() { }

   
  
 
   // Añadir un producto al carrito
   addToCart(product: Product): void {
    this.cart.push(product);  // Aseguramos que cart es de tipo Product[]
    this.cartSubject.next(this.cart);
   }
   
 
   // Obtener la cantidad de productos en el carrito
   getCartCount(): number {
    return this.cart.length; // Regresa la cantidad de productos en el carrito
   }
   clearCart(): void {
    this.cart = []; // Limpia el carrito
    this.cartSubject.next(this.cart);
  }
  // Método para eliminar un producto del carrito
  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
    this.cartSubject.next(this.cart);  // Emitir los cambios al carrito
  }

}
