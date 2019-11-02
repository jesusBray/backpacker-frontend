import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from "../../core/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private authService: AuthService) { }

  ngOnInit() {
  }
  
  profileForm = this.fb.group({
    apellido: ['', Validators.required],
    email: ['', Validators.required],
    nombre: ['',Validators.required],
    pasword: ['', Validators.required],
    telefono: ['']

  })

  onSubmit() {
    console.log(this.profileForm.value);
    // this.updateUser();
    this.gotoList();
    
  }

  updateUser(){
    this.authService.createUser(this.profileForm.value).subscribe(
      data => console.log(data),
      error => console.error(error)
    );
    // this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/user']);
  }
}
