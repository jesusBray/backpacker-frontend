import { Component, OnInit, Input } from '@angular/core';
import { CompanyBus } from "../../module/company-bus";
const mockBuses = 
[
  {
    id:'12333',
    name:'Bolivar',
    bus:[
      { 
        id:123,
        numBus:1,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'345345',
    name:'Trans Benito',
    bus:[
      { 
        id:123,
        numBus:2,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'5677',
    name:'Copacabana',
    bus:[
      { 
        id:123,
        numBus:1,
        matricula:'xxx-123'
      }
    ]
  },
  {
    id:'6767676',
    name:'Trans La Paz',
    bus:[
      { 
        id:123,
        numBus:3,
        matricula:'xxx-123'
      }
    ]
  },
]

@Component({
  selector: 'app-dashboard-buses',
  templateUrl: './dashboard-buses.component.html',
  styleUrls: ['./dashboard-buses.component.css']
})
export class DashboardBusesComponent implements OnInit {

  @Input() bussines;

  constructor() { }

  buses = ['bus1', 'Bus2', 'Bus3', 'Bus4'];
  valornombre:string="nombre123";
  private valueDetaillBus:any[];
  public dataSource:CompanyBus[] = mockBuses;

  ngOnInit() {
    // this.getDetallBus();
    console.log(this.bussines);
    
    mockBuses.forEach(element => {
      this.valueDetaillBus = element.bus
      console.log(this.valueDetaillBus);
      
    });
  }
}
