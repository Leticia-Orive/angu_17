import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Producto } from '../../model/product.model';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-editar-producto-dialog',
  standalone: true,
  imports: [ MatFormFieldModule,MatButtonModule,MatDialogModule,FormsModule],
  templateUrl: './editar-producto-dialog.component.html',
  styleUrl: './editar-producto-dialog.component.css'
})
export class EditarProductoDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditarProductoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Producto
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
