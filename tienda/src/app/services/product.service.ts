import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../model/product.model';


@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productos: Producto[] = [];
  private carrito: Producto[] = [];
  private productosSubject = new BehaviorSubject<Producto[]>([]);

  constructor() {
    // Aquí puedes cargar productos desde una API, por ahora usaremos datos simulados.
    this.productos = [
      { id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 100, imagenUrl: 'url_imagen' },
      { id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 150, imagenUrl: 'url_imagen' },
    ];
    this.productosSubject.next(this.productos);
  }

  get productos$() {
    return this.productosSubject.asObservable();
  }

  addProducto(producto: Producto) {
    this.productos.push(producto);
    this.productosSubject.next(this.productos);
  }

  updateProducto(updatedProducto: Producto) {
    const index = this.productos.findIndex(p => p.id === updatedProducto.id);
    if (index !== -1) {
      this.productos[index] = updatedProducto;
      this.productosSubject.next(this.productos);
    }
  }

  deleteProducto(id: number) {
    this.productos = this.productos.filter(p => p.id !== id);
    this.productosSubject.next(this.productos);
  }

  addToCarrito(producto: Producto) {
    this.carrito.push(producto);
    // Aquí podrías usar un BehaviorSubject para gestionar el carrito también
  }

  getCarrito() {
    return this.carrito;
  }
}
