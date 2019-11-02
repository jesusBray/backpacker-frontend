import { Component, OnInit } from '@angular/core';
import { AdmService } from "../../../core/adm.service";
import { User } from "../../../module/user";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-edit-adm',
  templateUrl: './edit-adm.component.html',
  styleUrls: ['./edit-adm.component.css']
})
export class EditAdmComponent implements OnInit {

  userName: string;
  constructor(private fb: FormBuilder,private service: AdmService) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    apellido: ['', Validators.required],
  })

  onSubmit() {
    let value = localStorage.getItem('id');
    console.log("click en submit");
    
    this.service.getUserById(value).subscribe(
      resp => {
        if (error) {
          console.error(error);
        }
        console.log(resp);
    });
  }
}
