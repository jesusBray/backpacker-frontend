import { Component, OnInit, Input } from '@angular/core';
import { CompanyBusService } from "../../core/company-bus.service";

@Component({
  selector: 'app-main-board',
  templateUrl: './main-board.component.html',
  styleUrls: ['./main-board.component.css']
})
export class MainBoardComponent implements OnInit {

  @Input() optionView: string;
  constructor(private service: CompanyBusService) { }

  ngOnInit() {
    this.listBuses();
  }
  
  public listBuses(): void {
    this.service.getBusById(this.optionView).subscribe(resp => {
      console.log(resp, 'user');
    })
  }

}
