import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AdmService } from "../../../core/adm.service";
import { Router } from "@angular/router";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-adm',
  templateUrl: './create-adm.component.html',
  styleUrls: ['./create-adm.component.css']
})
export class CreateAdmComponent implements OnInit {

  @Output() saveUser = new EventEmitter();
  constructor(private fb: FormBuilder, private server: AdmService, private router: Router) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    apellido: ['', Validators.required],
    email: ['', Validators.required],
    nombre: ['', Validators.required],
    password: ['', Validators.required],
    telefono: [''],
  });

  onSubmit(){
    this.server.createUser(this.profileForm.value).subscribe(
      value => {
        if (error) 
          console.log('Error found: ',error);
      }
    );
      console.log(this.profileForm.value);
    this.saveUser.emit('');
  }
}
