import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user:any;
  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    userName: ['', Validators.required],
    pasword: ['', Validators.required],
  })

  onSubmit() {
    this.user = this.profileForm.value;
    if (this.user.userName == 'adm' && this.user.pasword == 'adm') {
      this.router.navigate(['/main/user']);
    }
    else
      this.router.navigate(['/main']);
  }

}
