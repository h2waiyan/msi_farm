import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = new FormControl('htoowaiyan');
  password = new FormControl('12342345');
  genderradio = new FormControl('male');

  genders = ['Male', 'Female', 'Rather Not To Say'];

  register() {
    console.log(this.password.value);
    console.log(this.username.value);
    console.log(this.genderradio.value);
  }
}
