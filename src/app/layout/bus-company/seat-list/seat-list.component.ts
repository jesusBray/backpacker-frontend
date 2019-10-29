import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

import { CoreService } from "../../../core/core.service";

@Component({
  selector: 'app-seat-list',
  templateUrl: './seat-list.component.html',
  styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {
  
  private unsubscribe: Subject<any> = new Subject<any>();
  constructor(private service :CoreService) { }

  ngOnInit() { }

  public displayedColumns: string[] = ['name_empresa', 'num_bus', 'horario_llegada', 'horario_salida','phone','tiempo_receso'];
  public dataSource = null;

  public getCompanyBuss() {
    this.service.getPassengers().pipe(takeUntil(this.unsubscribe)).subscribe(( foundDate => {
      this.dataSource = foundDate;
    }))
  }

  //this funcction delete the subscrimpsiones.
  public OnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  public getCompanyBussById() {
    this.service.getPassengerById('5d65dbe44465c232afb40425').subscribe((foundDato =>{
      console.log(foundDato);
    }));
  }


}
