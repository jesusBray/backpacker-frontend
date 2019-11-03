import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { AdmService } from "../../../core/adm.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-adm',
  templateUrl: './create-adm.component.html',
  styleUrls: ['./create-adm.component.css']
})
export class CreateAdmComponent implements OnInit {

  constructor(private fb: FormBuilder, private server: AdmService, private router: Router) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    apellido: [''],
  });

  onSubmit(){
    this.server.createUser(this.profileForm.value).subscribe(
      value => {
        alert("se creo con exito");
      }
    )
  }
}
