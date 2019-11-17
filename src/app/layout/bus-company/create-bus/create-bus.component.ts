import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyBusService } from "../../../core/company-bus.service";
import { Router } from "@angular/router";
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})
export class CreateBusComponent implements OnInit {

  @Output() saveBus = new EventEmitter();
  constructor(private fb: FormBuilder, private server: CompanyBusService, private router: Router) { }

  ngOnInit() {
  }

  profileForm = this.fb.group({
    destino: [''],
    matricula: ['', Validators.required],
  });

  onSubmit(){
    this.server.createBus(this.profileForm.value).subscribe(
      value => {
        if (error) 
          console.log('Error found: ',error);
      }
    );
      console.log(this.profileForm.value);
    this.saveBus.emit('');
  }
}
