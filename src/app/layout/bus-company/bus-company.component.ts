import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'app-bus-company',
  templateUrl: './bus-company.component.html',
  styleUrls: ['./bus-company.component.css']
})
export class BusCompanyComponent implements OnInit {
  constructor() { }

  ngOnInit() { }

}
