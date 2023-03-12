import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {DetailPopupComponent} from "../detail-popup/detail-popup.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  checkLoad: boolean = false;
  constructor(private router:Router,
              private matDialog: MatDialog) {
  }
  itemDetail(): void {
    // let newRouterLink = '/itemDetail';
    // this.router.navigate(['/homepage']).then(() => { this.router.navigate([newRouterLink ]); })
    this.router.navigate(['/itemDetail'])
    // @ts-ignore
    // document.getElementById("product-pop-up").style.display = "none"
  }
  openPopup():void {
    this.matDialog.open(DetailPopupComponent)
  }
}
