import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Importa el módulo de Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog'; 
import { CartService } from './cart.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatToolbarModule,MatButtonModule,MatDialogModule   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-material-project';

  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Suscribirse al carrito para obtener la cantidad de productos
    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart.length;  // Actualizar el contador
    });
  }
}
