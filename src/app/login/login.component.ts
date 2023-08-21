import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "password";

  constructor(private router: Router) { }

  login() {

    // API Call . success
    if (this.username == "hwy" && this.password == '12345') {
      this.router.navigateByUrl("dashboard");
    }
  }
}
