import { Component } from '@angular/core';
import { Producto } from '../../model/product.model';
import { ProductoService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { EditarProductoDialogComponent } from '../editar-producto-dialog/editar-producto-dialog.component';
@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [MatToolbarModule,MatTableModule, CommonModule ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos: Producto[] = [];
  displayedColumns: string[] = ['nombre', 'descripcion', 'precio', 'acciones']; 
  dataSource: Producto[] = [];
  constructor(private productoService: ProductoService, public dialog: MatDialog) {
    this.productoService.productos$.subscribe((productos) => {
      this.productos = productos;
      this.dataSource = productos;
    });
  }

  openDialog(producto?: Producto): void {
    const dialogRef = this.dialog.open(EditarProductoDialogComponent, {
      width: '250px',
      data: producto || { id: null, nombre: '', descripcion: '', precio: 0, imagenUrl: '' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        if (result.id) {
          this.productoService.updateProducto(result);
        } else {
          this.productoService.addProducto(result);
        }
      }
    });
  }

  deleteProducto(id: number) {
    this.productoService.deleteProducto(id);
  }

  addToCarrito(producto: Producto) {
    this.productoService.addToCarrito(producto);
  }

}
