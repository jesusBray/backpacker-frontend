import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    userName: ['', Validators.required],
    pasword: ['', Validators.required],
  })

  onSubmit() {
    console.warn(this.profileForm.value);    
    this.router.navigate(['/user']);
  }

}
