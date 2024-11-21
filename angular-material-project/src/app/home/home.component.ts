import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  products = [
    { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 10 },
    { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 20 },
    { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 30 },
  ];

}
