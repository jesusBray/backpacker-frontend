import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CompanyBusService } from "../../../core/company-bus.service";
import { error } from 'util';

@Component({
  selector: 'app-edit-bus',
  templateUrl: './edit-bus.component.html',
  styleUrls: ['./edit-bus.component.css']
})
export class EditBusComponent implements OnInit {

  public bus:any;
  private getBus =localStorage.getItem('idBus');
  constructor(private fb: FormBuilder, private service: CompanyBusService) { }

  ngOnInit() {
    this.bus =JSON.parse(this.getBus);
    
  }

  profileForm = this.fb.group({
    destino:[''],
    matricula:['']
  });

  onSubmit(){
    console.log(this.profileForm.value);
    
    this.service.updateBus(this.bus.id,this.profileForm.value).subscribe(resp => {
      if (resp.status == 200) {
        console.log("update data");
      }else{
        console.error(error);
      }
      console.log(resp);
    })
  }

}
