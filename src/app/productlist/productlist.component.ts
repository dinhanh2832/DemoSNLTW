import { Component } from '@angular/core';
import {DetailPopupComponent} from "../detail-popup/detail-popup.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent {
  constructor(private matDialog: MatDialog) {
  }
  openPopup() {
    this.matDialog.open(DetailPopupComponent)
  }
}
