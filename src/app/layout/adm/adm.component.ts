import { Component, OnInit } from '@angular/core';
import { AdmService } from "../../core/adm.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.css']
})
export class AdmComponent implements OnInit {
  private option: any;
  constructor(private service: AdmService, private router: Router) { }
  
  ngOnInit() {
  }
  
  buttocase(value) {
    this.option = value
  }

  saveOption(value){
    this.option = value;
  }
}
