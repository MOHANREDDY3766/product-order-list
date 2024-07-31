import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {
  products = ['Pencil', 'Eraser', 'Pens'];
  quantities = [0, 1, 2, 3, 4, 5];
  rows = [{ product: '', quantity: '' }];
  order = [];

  constructor(private productService: ProductService) {}

  onProductChange(index: number) {
    if (index === this.rows.length - 1) {
      this.addRow();
    }
  }

  addRow() {
    if (this.rows.length < 8) {
      this.rows.push({ product: '', quantity: '' });
    }
  }

  showOrder() {
    this.order = this.rows.filter(row => row.product && row.quantity);
    this.rows = this.order.length < 8 ? this.order.concat([{ product: '', quantity: '' }]) : this.order;
  }

  readOrder() {
    this.productService.readOrder(this.order);
  }
}
