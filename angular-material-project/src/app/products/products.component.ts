import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Product } from '../model/product.model';
import { MatDialog } from '@angular/material/dialog';
import { ProductEditComponent } from '../product-edit/product-edit.component';  // Importa el componente del modal
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(public dialog: MatDialog, private cartService: CartService) {}
  products: Product[] = [
    { id: 1, name: 'Producto 1',descripcion:'', price: 100, imagenUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Producto 2',descripcion:'', price: 200, imagenUrl: 'https://via.placeholder.com/150' }, 
    { id: 3, name: 'Producto 3',descripcion:'', price: 300, imagenUrl: 'https://via.placeholder.com/150' },
  ];

  // Columnas visibles en la tabla
  displayedColumns: string[] = ['name','descripcion', 'price', 'imagenUrl', 'actions'];

  viewProduct(product: any) {
    alert(`Viendo el producto: ${product.name}`);
  }

  /*editProduct(product: any) {
    alert(`Editando el producto: ${product.name}`);
  }*/
    editProduct(product: Product): void {
      const dialogRef = this.dialog.open(ProductEditComponent, {
        width: '400px',
        data: { ...product }  // Le pasamos los datos del producto a editar
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          // Si el usuario hizo clic en "Guardar", actualizamos el producto
          const index = this.products.findIndex(p => p.id === result.id);
          if (index !== -1) {
            this.products[index] = result;
          }
        }
      });
    }
     // Función para actualizar el producto en la lista
  updateProduct(updatedProduct: any): void {
    const index = this.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;  // Reemplazar el producto en la lista
    }
  }
   // Añadir al carrito
   addToCart(product: Product): void {
    this.cartService.addToCart(product);  // Llamar al servicio para añadir al carrito
  }


  deleteProduct(productId: number) {
    this.products = this.products.filter(product => product.id !== productId);
    alert(`Producto con ID ${productId} eliminado.`);
  }

  /*addToCart(product: any) {
    alert(`Añadido al carrito: ${product.name}`);
  }*/
}
