import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponent} from "./first/first.component";
import {SecondComponent} from "./second/second.component";
import {ThirdComponent} from "./third/third.component";
import {FourthComponent} from "./fourth/fourth.component";
import {BlockitGuard} from "./blockit.guard";

const routes: Routes = [
  //normal Paths
  {path: "first", component: FirstComponent},
  {path: "second", component: SecondComponent},
  {path: "third", component: ThirdComponent},
  {path: "fourth", component: FourthComponent},
  //no path
  {path:"", redirectTo: "/first", pathMatch: "full"},
  //load children lazy loading
  { path: 'customer',
    //guard --> blockit.guard.ts to block connection
    canActivate: [BlockitGuard],
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
  //wild path
  {path: "**",component: FirstComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true,
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
