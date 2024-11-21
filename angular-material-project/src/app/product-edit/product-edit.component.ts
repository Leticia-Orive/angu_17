import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../model/product.model';// Define un modelo de Producto, si es necesario
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  // Recibimos los datos del producto a editar a través del modal
  constructor(
    public dialogRef: MatDialogRef<ProductEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  // Método para cerrar el modal sin guardar
  onCancel(): void {
    this.dialogRef.close();
  }

  // Método para guardar los cambios
  onSave(): void {
    this.dialogRef.close(this.data); // Retorna el objeto actualizado
  }

}
