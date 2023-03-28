import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnRoutingNavigation';

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      console.log(e);
    })
  }

  goToRoute(route: string = "/fourth"): void {
    this.router.navigateByUrl(route).then(() => {
      console.log(this.router.url);
    })
  }
}
