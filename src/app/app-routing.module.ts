import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";

const routes: Routes = [
  {path: "first", component: FirstComponent},
  {path: "second", component: SecondComponent},
  {path: "third", component: ThirdComponent},
  {path: "fourth", component: FourthComponent},
  {
    path: "**",
    component: FirstComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
