import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-detail-popup',
  templateUrl: './detail-popup.component.html',
  styleUrls: ['./detail-popup.component.css']
})
export class DetailPopupComponent {
  constructor(private router: Router,
              private matDialog: MatDialog) {
  }
  itemDetail() {
    this.router.navigate(['/itemDetail'])
    this.matDialog.closeAll()
  }
}
