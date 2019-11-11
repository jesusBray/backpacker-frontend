import { Component, OnInit, Input } from '@angular/core';
import { CompanyBus } from "../../module/company-bus";

@Component({
  selector: 'app-dashboard-buses',
  templateUrl: './dashboard-buses.component.html',
  styleUrls: ['./dashboard-buses.component.css']
})
export class DashboardBusesComponent implements OnInit {

  @Input() getCompany;

  constructor() { }

  buses = ['bus1', 'Bus2', 'Bus3', 'Bus4'];
  valornombre:string="nombre123";
  private horaLlegada="15:00 pm";
  private horaSalida="8:00 am";
  private valueDetaillBus:any[];
  // public dataSource:CompanyBus[] = mockBuses;

  ngOnInit() {
    // mockBuses.forEach(element => {
    //   this.valueDetaillBus = element.bus
    // });
  }
}
