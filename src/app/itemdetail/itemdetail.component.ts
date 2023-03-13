import { Component } from '@angular/core';

@Component({
  selector: 'app-itemdetail',
  templateUrl: './itemdetail.component.html',
  styleUrls: ['./itemdetail.component.css']
})
export class ItemdetailComponent {

  quantity: number = 1

  up() {
    if (this.quantity < 10) {
      this.quantity++;
      // @ts-ignore
      document.getElementById("quantity").value = this.quantity
    }
  }

  down() {
    if (this.quantity > 0 ) {
      this.quantity--;
      // @ts-ignore
      document.getElementById("quantity").value = this.quantity
    }
  }
}
