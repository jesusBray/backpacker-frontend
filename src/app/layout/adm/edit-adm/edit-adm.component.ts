import { Component, OnInit } from '@angular/core';
import { AdmService } from "../../../core/adm.service";
import { User } from "../../../module/user";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-adm',
  templateUrl: './edit-adm.component.html',
  styleUrls: ['./edit-adm.component.css']
})
export class EditAdmComponent implements OnInit {

  userName: string;
  user:User;
  private value = localStorage.getItem('id');
  constructor(private fb: FormBuilder,private service: AdmService) { }

  ngOnInit() {
    this.user = JSON.parse(this.value);
  }

  profileForm = this.fb.group({
    name: ['', Validators.required],
    apellido: ['', Validators.required],
  })

  onSubmit() {
    this.service.updateUser(this.user);
  }
}
