import { Component, OnInit } from '@angular/core';
import { CompanyBusService } from "../../../core/company-bus.service";
import { error } from 'util';

@Component({
  selector: 'app-list-buses',
  templateUrl: './list-buses.component.html',
  styleUrls: ['./list-buses.component.css']
})
export class ListBusesComponent implements OnInit {

  ngOnInit() {
    this.getUsers();
  }

  private titleNames :string[]= ['DESTINO','MATRICULA','ACTIONS'];
  private items;
  private option:any;
  constructor(private server: CompanyBusService) { }

  getUsers(){
    this.server.getAllBuses().subscribe(
      value => {
        this.items = value
      }
    );
  }

  deleteOption(value) {
    this.server.deleteBuses(value).subscribe(resp => {
      if (error) {
        console.log('Error found: ', error);
      }
      console.log("sussesful delete resp");
      this.getUsers();
    })
    
  }

  creteOption(value){
    this.option = value;
  }

  editOption(bus) {
    // this.getUsers();
    this.option = 2;
    localStorage.setItem('idBus',JSON.stringify(bus));
  }
}
