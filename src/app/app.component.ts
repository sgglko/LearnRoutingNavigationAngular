import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {FormControl, FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LearnRoutingNavigation';

  testProp = new FormControl("");

  profileForm = new FormGroup({
    firstName: new FormControl("", Validators.min(2)),
    lastName: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private router: Router, private fb: FormBuilder){
    this.router.events.subscribe((e) => {
      console.log(e);
    })
  }

  modifyFromControl(): void {
   this.testProp.setValue("")
  }

  showFormGroup():void {
    console.log(this.profileForm.value)
  }
}
