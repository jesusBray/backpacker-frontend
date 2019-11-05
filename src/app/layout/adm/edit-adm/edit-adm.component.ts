import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { AdmService } from "../../../core/adm.service";
import { User } from "../../../module/user";
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-adm',
  templateUrl: './edit-adm.component.html',
  styleUrls: ['./edit-adm.component.css']
})
export class EditAdmComponent implements OnInit {

  private showOption:boolean = true;
  @Output() saveUser = new EventEmitter();
  userName: string;
  user:User;
  private value = localStorage.getItem('id');
  constructor(private fb: FormBuilder,private service: AdmService, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(this.value);
  }

  profileForm = this.fb.group({
    name: ['', Validators.required],
    apellido: ['', Validators.required],
  })

  onSubmit() {
    this.service.updateUser(this.user);
    this.showOption = false;
  }
}
