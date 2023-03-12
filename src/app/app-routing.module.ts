import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {ItemdetailComponent} from "./itemdetail/itemdetail.component";
import {CardlistComponent} from "./cardlist/cardlist.component";
import {ProductlistComponent} from "./productlist/productlist.component";
import {RegisterComponent} from "./register/register.component";
import {TutorialComponent} from "./tutorial/tutorial.component";

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'homepage', component: HomepageComponent
  },
  {
    path: 'itemDetail', component: ItemdetailComponent
  },
  {
    path: 'itemDetail/cardList', component: CardlistComponent
  },
  {
    path: 'homepage/productList', component: ProductlistComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'tutorial', component: TutorialComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
